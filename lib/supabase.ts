import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// 1. Primary Supabase Instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 2. Explicitly Named Function for Client Components
export const createClientComponentClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey)
}

// 3. Build-Safe Wrapper (Prevents 404s during pre-rendering)
export const createBuildSafeClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) return null
  return supabase
}

// 4. B2B Logic Functions
export const createUser = async (email: string, fullName: string, role: string) => {
  return await supabase.from('profiles').insert([{ email, full_name: fullName, role }])
}

export const createEnrollment = async (studentId: string, courseId: string) => {
  return await supabase.from('enrollments').insert([{ 
    student_id: studentId, 
    course_id: courseId, 
    status: 'active' 
  }])
}

// 5. Unified Object for components using 'db' import
export const db = {
  createEnrollment,
  createUser,
  supabase
}