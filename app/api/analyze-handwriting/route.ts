import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Tesseract from 'tesseract.js'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function POST(req: NextRequest) {
  console.log(' [ANALYZE-HANDWRITING] Feature 4 - Cobel AI Engine Activation')
  const startTime = Date.now()
  
  try {
    const { imageUrl, courseId, userId } = await req.json()
    
    if (!imageUrl) {
      return NextResponse.json({ success: false, error: 'imageUrl est requis' }, { status: 400 })
    }

    // 1. Initialisation Supabase avec Service Role (Instruction 2026-02-12)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // 2. OCR avec Tesseract
    const worker = await Tesseract.createWorker('fra+eng')
    const { data } = await worker.recognize(imageUrl)
    await worker.terminate()
    
    const extractedText = data.text.toLowerCase()
    console.log(' Confiance OCR:', Math.round(data.confidence) + '%')

    // 3. ANALYSE DYNAMIQUE : Récupération des termes techniques des 70 modules injectés
    // On cible les modules liés au cours spécifique pour plus de précision
    const { data: dbModules } = await supabase
      .from('modules')
      .select('termes_techniques, titre_francais, titre_anglais')
      .eq('course_id', courseId || '5400dd18-c89b-4a9e-b592-0c7c75c8a1b6') // Default ID verified

    // Extraction des termes attendus (Mapping Bilingue)
    const expectedTermsFr: string[] = []
    const expectedTermsEn: string[] = []

    dbModules?.forEach(m => {
      if (m.termes_techniques?.fr) expectedTermsFr.push(...m.termes_techniques.fr)
      if (m.termes_techniques?.en) expectedTermsEn.push(...m.termes_techniques.en)
    })

    // 4. MATCHING : Comparaison du texte extrait avec la base de données Cobel
    const foundTermsFr = expectedTermsFr.filter(term => extractedText.includes(term.toLowerCase()))
    const foundTermsEn = expectedTermsEn.filter(term => extractedText.includes(term.toLowerCase()))

    // 5. SCORE DE COMPRÉHENSION (Adaptative Logic)
    // On pondère par la confiance OCR et la densité bilingue
    const bilingualBonus = (foundTermsFr.length > 0 && foundTermsEn.length > 0) ? 20 : 0
    const comprehensionScore = Math.min(100, Math.round(
      (data.confidence * 0.4) + 
      (foundTermsFr.length * 10) + 
      (foundTermsEn.length * 10) +
      bilingualBonus
    ))

    // 6. POINTS DE FRICTION & RECOMMANDATIONS
    const frictionPoints = foundTermsFr
      .filter(fr => !foundTermsEn.some(en => fr === en)) // Cherche les manques de traduction
      .map(term => ({
        concept: term,
        severity: 'medium',
        suggestion: `Traduire "${term}" pour renforcer la fluidité bilingue.`
      })).slice(0, 3)

    // 7. ENREGISTREMENT DE L'ASSESSMENT
    const { data: assessment, error: dbError } = await supabase
      .from('assessments')
      .insert({
        student_id: userId || 'anonymous',
        course_id: courseId,
        image_url: imageUrl,
        extracted_text: data.text,
        technical_terms: { fr: foundTermsFr, en: foundTermsEn },
        comprehension_score: comprehensionScore,
        ocr_confidence: data.confidence,
        analyzed_at: new Date().toISOString()
      })
      .select('id')
      .single()

    const duration = Date.now() - startTime
    
    return NextResponse.json({
      success: true,
      analysis: {
        extracted_text: data.text,
        technical_terms: { fr: foundTermsFr, en: foundTermsEn },
        comprehension_score: comprehensionScore,
        bilingual_match: foundTermsFr.length > 0 && foundTermsEn.length > 0,
        ocr_confidence: Math.round(data.confidence),
        duration_ms: duration,
        assessment_id: assessment?.id
      }
    })

  } catch (error: any) {
    console.error(' [COBEL_ERROR]:', error.message)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}