// Cobel AI Engine - Build Version: 20260210-0610
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const createClientComponentClient = () => createClient(supabaseUrl, supabaseAnonKey)

export const createBuildSafeClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) return null
  return supabase
}

export const createUser = async (email: string, fullName: string, role: string) => {
  return await supabase.from('profiles').insert([{ email, full_name: fullName, role }])
}

export const createEnrollment = async (studentId: string, courseId: string) => {
  return await supabase.from('enrollments').insert([{ student_id: studentId, course_id: courseId, status: 'active' }])
}

export const db = { createEnrollment, createUser, supabase }