import { createServerClient } from '@/lib/supabase';
export const supabase = createServerClient();

// USER HELPERS
export async function getUserByEmail(email: string) {
  const { data, error } = await supabase.from('users').select('*').eq('email', email).single();
  return { data, error };
}

export async function createUser(userData: { 
  id: string; 
  email: string; 
  role?: 'student' | 'instructor' | 'admin'; 
  name?: string;
  is_active?: boolean;
}) {
  const { data, error } = await supabase
    .from('users')
    .insert({
      id: userData.id,
      email: userData.email,
      role: userData.role || 'student',
      name: userData.name,
      is_active: userData.is_active ?? true,
    })
    .select()
    .single();
  return { data, error };
}

// COURSE HELPERS
export async function getCourseById(id: string) {
  const { data, error } = await supabase.from('courses').select('*').eq('id', id).single();
  return { data, error };
}

export async function getCourses() {
  const { data, error } = await supabase.from('courses').select('*');
  return { data, error };
}

export async function createCourse(course: { 
  title: string; 
  description?: string; 
  instructor_id: string;
  price?: number;
}) {
  const { data, error } = await supabase
    .from('courses')
    .insert({
      title: course.title,
      description: course.description,
      instructor_id: course.instructor_id,
      price: course.price ?? 0,
    })
    .select()
    .single();
  return { data, error };
}

// ENROLLMENT HELPER
export async function createEnrollment(enrollment: { 
  user_id: string; 
  course_id: string; 
  enrolled_at?: string;
}) {
  const { data, error } = await supabase
    .from('enrollments')
    .insert({
      user_id: enrollment.user_id,
      course_id: enrollment.course_id,
      enrolled_at: enrollment.enrolled_at || new Date().toISOString(),
    })
    .select()
    .single();
  return { data, error };
}
