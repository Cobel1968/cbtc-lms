import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// 1. Core Supabase Instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 2. Compatibility Export for Client Components
export const createClientComponentClient = () => createClient(supabaseUrl, supabaseAnonKey)

// 3. Named Export for Enrollments (Fixed for API routes)
export const createEnrollment = async (studentId: string, courseId: string) => {
  return await supabase.from('enrollments').insert([{ 
    student_id: studentId, 
    course_id: courseId,
    status: 'active'
  }])
}

// 4. User Logic
export const createUser = async (email: string, fullName: string, role: string) => {
  return await supabase.from('profiles').insert([{ email, full_name: fullName, role }])
}

// 5. Build-Safe Client Utility
export const createBuildSafeClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) return null
  return supabase
}

// Legacy 'db' wrapper for backward compatibility
export const db = {
  createEnrollment
}