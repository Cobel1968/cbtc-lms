import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Core Instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Explicit function for Client Components
export const createClientComponentClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Named Exports for all CBTC logic
export const createEnrollment = async (studentId: string, courseId: string) => {
  return await supabase.from('enrollments').insert([{ student_id: studentId, course_id: courseId, status: 'active' }])
}

export const createUser = async (email: string, fullName: string, role: string) => {
  return await supabase.from('profiles').insert([{ email, full_name: fullName, role }])
}

// Default export as a fallback for the entire 'db' object
const db = { supabase, createEnrollment, createUser, createClientComponentClient }
export default db