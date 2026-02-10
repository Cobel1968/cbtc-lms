import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Audit Helper: Checks connection and schema health
export const checkEngineHealth = async () => {
  const { data, error } = await supabase.from('user_progress').select('count').limit(1)
  if (error) console.error("Cobel AI Engine: Connection Disconnect Detected", error)
  return !error
}