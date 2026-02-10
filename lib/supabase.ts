import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Missing Export: Build Safe Client
export const createBuildSafeClient = () => supabase;

// Missing Export: Create User (used for B2B Registration)
export const createUser = async (email, password, metadata) => {
  return await supabase.auth.signUp({
    email,
    password,
    options: { data: metadata }
  })
}

// Missing Export: Create Enrollment (used for Student onboarding)
export const createEnrollment = async (enrollmentData) => {
  return await supabase.from('user_progress').insert([enrollmentData])
}