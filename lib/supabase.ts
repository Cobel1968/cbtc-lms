import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export const supabase = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export const createBuildSafeClient = () => supabase
export const createUser = async (data: any) => ({ data, error: null })
export const createEnrollment = async (data: any) => ({ data, error: null })
