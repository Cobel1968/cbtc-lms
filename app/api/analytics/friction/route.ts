import { createServerClient } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from('vocational_assessments')
      .select('detected_technical_terms_en, detected_technical_terms_fr, bilingual_fluency_score');
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    const termsEn = (data || []).flatMap(a => (a.detected_technical_terms_en as string[]) || []);
    const termsFr = (data || []).flatMap(a => (a.detected_technical_terms_fr as string[]) || []);
    const frictionTerms = [...termsEn, ...termsFr];
    const heatmap = frictionTerms.reduce((acc: Record<string, number>, term: string) => {
      acc[term] = (acc[term] || 0) + 1;
      return acc;
    }, {});
    const averageFriction =
      (data || []).length > 0
        ? 1 - (data || []).reduce((s, a) => s + Number(a.bilingual_fluency_score || 0), 0) / (data || []).length
        : 0;
    return NextResponse.json({ success: true, heatmap, averageFriction });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json({ message: 'Use GET for friction analytics' }, { status: 405 });
}


