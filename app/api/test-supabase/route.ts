import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

export async function GET() {
  console.log(' [TEST-SUPABASE] D�but')
  
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    console.log('[TEST-SUPABASE] Variables:', {
      hasUrl: !!url,
      hasService: !!serviceKey,
      hasAnon: !!anonKey
    })
    
    if (!url) {
      console.error('[TEST-SUPABASE]  URL manquante')
      return Response.json({ 
        success: false,
        error: 'URL manquante'
      }, { status: 500 })
    }

    if (!serviceKey && !anonKey) {
      console.error('[TEST-SUPABASE]  Cl�s manquantes')
      return Response.json({ 
        success: false,
        error: 'Cl�s manquantes'
      }, { status: 500 })
    }

    const key = serviceKey || anonKey
    const keyType = serviceKey ? 'SERVICE_ROLE' : 'ANON'
    
    console.log('[TEST-SUPABASE] Cr�ation client:', keyType)
    
    const supabase = createClient(url, key, {
      auth: { persistSession: false }
    })
    
    console.log('[TEST-SUPABASE] Requ�te modules...')
    
    const { data, error, count } = await supabase
      .from('modules')
      .select('id, code_module', { count: 'exact' })
      .limit(3)
    
    if (error) {
      console.error('[TEST-SUPABASE]  Erreur:', error.message)
      return Response.json({ 
        success: false,
        error: error.message,
        code: error.code,
        hint: error.hint,
        keyType
      }, { status: 500 })
    }

    console.log('[TEST-SUPABASE]  Succ�s! Count:', count)

    return Response.json({ 
      success: true,
      message: 'Supabase op�rationnel!',
      diagnostics: {
        connection: 'OK',
        keyType,
        modulesCount: count,
        sampleModules: data
      }
    })

  } catch (err: any) {
    console.error('[TEST-SUPABASE]  Exception:', err.message)
    return Response.json({ 
      success: false,
      error: err.message,
      code: err.code
    }, { status: 500 })
  }
}


