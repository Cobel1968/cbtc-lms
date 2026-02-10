import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Engine Health Check: Verifies the user_progress table is reachable
export const testConnection = async () => {
  const { data, error } = await supabase.from('user_progress').select('*').limit(1)
  if (error) {
    console.error("Supabase Schema Mismatch:", error.message)
    return false
  }
  return true
}