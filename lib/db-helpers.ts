import { createServerClient } from '@/lib/supabase';
export const supabase = createServerClient();

// USER HELPERS
export async function getUserByEmail(email: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();
  return { data, error };
}

export async function createUser(userData: { 
  id: string; 
  email: string; 
  role?: 'student' | 'instructor' | 'admin'; 
  name?: string;
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
  is_active?: boolean;
}) {
  const { data, error } = await supabase
    .from('users')
    .insert({
      id: userData.id,
      email: userData.email,
      role: userData.role || 'student',
      name: userData.name,
      first_name: userData.first_name,
      last_name: userData.last_name,
      phone: userData.phone,
      is_active: userData.is_active ?? true,
    })
    .select()
    .single();
  return { data, error };
}

// COURSE HELPERS
export async function getCourseById(id: string) {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
}

export async function getCourses() {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false });
  return { data, error };
}

export async function createCourse(courseData: any) {
  const { data, error } = await supabase
    .from('courses')
    .insert(courseData)
    .select()
    .single();
  return { data, error };
}

export async function updateCourse(id: string, updates: any) {
  const { data, error } = await supabase
    .from('courses')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
}

export async function deleteCourse(id: string) {
  const { data, error } = await supabase
    .from('courses')
    .delete()
    .eq('id', id);
  return { data, error };
}

// ENROLLMENT HELPERS
export async function createEnrollment(enrollmentData: any) {
  const { data, error } = await supabase
    .from('enrollments')
    .insert(enrollmentData)
    .select()
    .single();
  return { data, error };
}

export async function getEnrollmentsByUser(userId: string) {
  const { data, error } = await supabase
    .from('enrollments')
    .select('*, courses(*)')
    .eq('user_id', userId);
  return { data, error };
}

export async function getEnrollmentsByCourse(courseId: string) {
  const { data, error } = await supabase
    .from('enrollments')
    .select('*, users(*)')
    .eq('course_id', courseId);
  return { data, error };
}

// PAYMENT HELPERS
export async function createPayment(paymentData: any) {
  const { data, error } = await supabase
    .from('payments')
    .insert(paymentData)
    .select()
    .single();
  return { data, error };
}

export async function getPaymentsByUser(userId: string) {
  const { data, error } = await supabase
    .from('payments')
    .select('*')
    .eq('user_id', userId);
  return { data, error };
}

// DIAGNOSTIC HELPERS
export async function getDiagnosticQuestions(testId: string) {
  const { data, error } = await supabase
    .from('diagnostic_questions')
    .select('*')
    .eq('test_id', testId);
  return { data, error };
}

export async function saveDiagnosticResult(resultData: any) {
  const { data, error } = await supabase
    .from('diagnostic_results')
    .insert(resultData)
    .select()
    .single();
  return { data, error };
}
