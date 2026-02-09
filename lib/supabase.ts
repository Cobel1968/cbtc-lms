import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// 1. Core Supabase Instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 2. Compatibility Export for Client Components
export const createClientComponentClient = () => createClient(supabaseUrl, supabaseAnonKey)

// 3. Build-Safe Client (Prevents 500 errors during Vercel Build)
export const createBuildSafeClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) return null
  return supabase
}

// 4. User & Enrollment Logic for B2B Registration
export const createUser = async (email: string, fullName: string, role: string) => {
  return await supabase.from('profiles').insert([{ email, full_name: fullName, role }])
}

export const db = {
  createEnrollment: async (studentId: string, courseId: string) => {
    return await supabase.from('enrollments').insert([{ student_id: studentId, course_id: courseId }])
  }
}