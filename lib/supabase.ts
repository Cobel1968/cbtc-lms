import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// 1. Core Supabase Instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 2. Client Component Client (Named Export)
export const createClientComponentClient = () => createClient(supabaseUrl, supabaseAnonKey)

// 3. User & Enrollment Logic (Named Exports)
export const createUser = async (email: string, fullName: string, role: string) => {
  return await supabase.from('profiles').insert([{ email, full_name: fullName, role }])
}

export const createEnrollment = async (studentId: string, courseId: string) => {
  return await supabase.from('enrollments').insert([{ student_id: studentId, course_id: courseId, status: 'active' }])
}

// 4. Build-Safe Utility (Named Export)
export const createBuildSafeClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) return null
  return supabase
}

// 5. The "db" Wrapper (For components importing as 'db')
export const db = {
  createEnrollment,
  createUser,
  supabase
}

// 6. Default Export (Emergency Fallback)
export default { 
  supabase, 
  createClientComponentClient, 
  createUser, 
  createEnrollment, 
  createBuildSafeClient,
  db 
}