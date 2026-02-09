import { createClient } from '@supabase/supabase-js'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// For general logic & browser-side use
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Build-safe helper
export const createBuildSafeClient = () => supabase

// Client-side component helper
export { createClientComponentClient }

// Bridge helpers for Enrollment and User logic
export const createEnrollment = async (data: any) => supabase.from('enrollments').insert(data)
export const createUser = async (data: any) => supabase.auth.signUp(data)

export default supabase
