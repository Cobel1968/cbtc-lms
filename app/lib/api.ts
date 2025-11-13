// app/lib/api.ts
import config from '@/lib/config';
import { getToken } from './auth';
import type { User, Course, DiagnosticTest, DiagnosticResult, LearningContract, Enrollment } from './types';

const API_URL = config.apiUrl;

interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = getToken();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        error: errorData.message || `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('API request error:', error);
    return {
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

export async function login(email: string, password: string): Promise<ApiResponse<{ token: string; user: User }>> {
  return apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function register(userData: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
}): Promise<ApiResponse<{ token: string; user: User }>> {
  return apiRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
}

export async function logout(): Promise<ApiResponse<void>> {
  return apiRequest('/auth/logout', { method: 'POST' });
}

export async function getProfile(): Promise<ApiResponse<User>> {
  return apiRequest('/auth/profile');
}

export async function getCourses(): Promise<ApiResponse<Course[]>> {
  return apiRequest('/courses');
}

export async function getCourse(id: string): Promise<ApiResponse<Course>> {
  return apiRequest(`/courses/${id}`);
}

export async function enrollCourse(courseId: string): Promise<ApiResponse<Enrollment>> {
  return apiRequest('/enrollments', {
    method: 'POST',
    body: JSON.stringify({ course_id: courseId }),
  });
}

export async function startDiagnosticTest(testId: string): Promise<ApiResponse<DiagnosticTest>> {
  return apiRequest(`/diagnostic-tests/${testId}/start`, { method: 'POST' });
}

export async function submitDiagnosticTest(
  testId: string,
  answers: Record<string, string>
): Promise<ApiResponse<DiagnosticResult>> {
  return apiRequest(`/diagnostic-tests/${testId}/submit`, {
    method: 'POST',
    body: JSON.stringify({ answers }),
  });
}

export async function getDiagnosticResults(userId: string): Promise<ApiResponse<DiagnosticResult[]>> {
  return apiRequest(`/users/${userId}/diagnostic-results`);
}

export async function generateLearningContract(
  courseId: string,
  diagnosticResultId?: string
): Promise<ApiResponse<LearningContract>> {
  return apiRequest('/learning-contracts', {
    method: 'POST',
    body: JSON.stringify({ course_id: courseId, diagnostic_result_id: diagnosticResultId }),
  });
}

export async function signLearningContract(contractId: string): Promise<ApiResponse<LearningContract>> {
  return apiRequest(`/learning-contracts/${contractId}/sign`, { method: 'POST' });
}

export async function getLearningContract(contractId: string): Promise<ApiResponse<LearningContract>> {
  return apiRequest(`/learning-contracts/${contractId}`);
}

export async function getUserEnrollments(userId: string): Promise<ApiResponse<Enrollment[]>> {
  return apiRequest(`/users/${userId}/enrollments`);
}

export async function updateEnrollmentProgress(
  enrollmentId: string,
  progress: number
): Promise<ApiResponse<Enrollment>> {
  return apiRequest(`/enrollments/${enrollmentId}/progress`, {
    method: 'PATCH',
    body: JSON.stringify({ progress_percentage: progress }),
  });
}
