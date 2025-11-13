// Database helper functions for Supabase queries
import { supabase } from './supabase';
import type { Database } from './database.types';

type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T];

// Type exports for easier use
export type User = Tables<'users'>;
export type Instructor = Tables<'instructors'>;
export type Course = Tables<'courses'>;
export type DiagnosticTest = Tables<'diagnostic_tests'>;
export type DiagnosticResult = Tables<'diagnostic_results'>;
export type LearningContract = Tables<'learning_contracts'>;
export type Enrollment = Tables<'enrollments'>;
export type Assignment = Tables<'assignments'>;
export type Submission = Tables<'submissions'>;

// User helpers
export async function getUserById(id: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getUserByEmail(email: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();
  
  if (error) throw error;
  return data;
}

export async function createUser(userData: Database['public']['Tables']['users']['Insert']) {
  const { data, error } = await supabase
    .from('users')
    .insert(userData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

// Course helpers
export async function getCourses(filters?: {
  published?: boolean;
  category?: string;
  level?: string;
  instructor_id?: string;
}) {
  let query = supabase.from('courses').select('*');
  
  if (filters?.published !== undefined) {
    query = query.eq('is_published', filters.published);
  }
  if (filters?.category) {
    query = query.eq('category', filters.category);
  }
  if (filters?.level) {
    query = query.eq('level', filters.level);
  }
  if (filters?.instructor_id) {
    query = query.eq('instructor_id', filters.instructor_id);
  }
  
  const { data, error } = await query.order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function getCourseById(id: string) {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
}

export async function createCourse(courseData: Database['public']['Tables']['courses']['Insert']) {
  const { data, error } = await supabase
    .from('courses')
    .insert(courseData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

// Enrollment helpers
export async function getEnrollmentsByUserId(userId: string) {
  const { data, error } = await supabase
    .from('enrollments')
    .select('*')
    .eq('user_id', userId)
    .order('enrollment_date', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function getEnrollmentsByCourseId(courseId: string) {
  const { data, error } = await supabase
    .from('enrollments')
    .select('*')
    .eq('course_id', courseId)
    .order('enrollment_date', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function createEnrollment(enrollmentData: Database['public']['Tables']['enrollments']['Insert']) {
  const { data, error } = await supabase
    .from('enrollments')
    .insert(enrollmentData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function updateEnrollmentProgress(
  enrollmentId: string,
  progress: number
) {
  const { data, error } = await supabase
    .from('enrollments')
    .update({ progress_percentage: progress, updated_at: new Date().toISOString() })
    .eq('id', enrollmentId)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

// Diagnostic test helpers
export async function getDiagnosticTestByCourseId(courseId: string) {
  const { data, error } = await supabase
    .from('diagnostic_tests')
    .select('*')
    .eq('course_id', courseId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function createDiagnosticResult(
  resultData: Database['public']['Tables']['diagnostic_results']['Insert']
) {
  const { data, error } = await supabase
    .from('diagnostic_results')
    .insert(resultData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function getDiagnosticResultsByUserId(userId: string) {
  const { data, error } = await supabase
    .from('diagnostic_results')
    .select('*')
    .eq('user_id', userId)
    .order('completed_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// Learning contract helpers
export async function getLearningContractById(id: string) {
  const { data, error } = await supabase
    .from('learning_contracts')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
}

export async function createLearningContract(
  contractData: Database['public']['Tables']['learning_contracts']['Insert']
) {
  const { data, error } = await supabase
    .from('learning_contracts')
    .insert(contractData)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function signLearningContract(
  contractId: string,
  signature: 'student' | 'instructor',
  signatureData: string
) {
  const updateData: Database['public']['Tables']['learning_contracts']['Update'] = {
    updated_at: new Date().toISOString(),
  };
  
  if (signature === 'student') {
    updateData.student_signature = signatureData;
  } else {
    updateData.instructor_signature = signatureData;
  }
  
  // If both signatures are present, set signed_at
  const { data: contract } = await supabase
    .from('learning_contracts')
    .select('student_signature, instructor_signature')
    .eq('id', contractId)
    .single();
  
  if (contract?.student_signature && contract?.instructor_signature) {
    updateData.signed_at = new Date().toISOString();
  }
  
  const { data, error } = await supabase
    .from('learning_contracts')
    .update(updateData)
    .eq('id', contractId)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

// Instructor helpers
export async function getInstructorByUserId(userId: string) {
  const { data, error } = await supabase
    .from('instructors')
    .select('*')
    .eq('user_id', userId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getInstructorWithUser(instructorId: string) {
  const { data, error } = await supabase
    .from('instructors')
    .select(`
      *,
      users (*)
    `)
    .eq('id', instructorId)
    .single();
  
  if (error) throw error;
  return data;
}

// Assignment helpers
export async function getAssignmentsByCourseId(courseId: string) {
  const { data, error } = await supabase
    .from('assignments')
    .select('*')
    .eq('course_id', courseId)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// Submission helpers
export async function getSubmissionsByAssignmentId(assignmentId: string) {
  const { data, error } = await supabase
    .from('submissions')
    .select('*')
    .eq('assignment_id', assignmentId)
    .order('submitted_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function getSubmissionsByUserId(userId: string) {
  const { data, error } = await supabase
    .from('submissions')
    .select('*')
    .eq('user_id', userId)
    .order('submitted_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

