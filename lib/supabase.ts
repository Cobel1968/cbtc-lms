import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 1. Direct Named Export (What the API wants)
export const createEnrollment = async (studentId: string, courseId: string) => {
  return await supabase.from('enrollments').insert([{ 
    student_id: studentId, 
    course_id: courseId,
    status: 'active'
  }])
}

// 2. Object Export (Backwards compatibility for 'db.createEnrollment')
export const db = {
  createEnrollment: createEnrollment
}

export const createClientComponentClient = () => createClient(supabaseUrl, supabaseAnonKey)
export const createUser = async (email: string, fullName: string, role: string) => {
  return await supabase.from('profiles').insert([{ email, full_name: fullName, role }])
}
export const createBuildSafeClient = () => (supabaseUrl && supabaseAnonKey ? supabase : null)