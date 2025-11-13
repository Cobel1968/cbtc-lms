// Types bilingues
export interface BilingualText {
  fr: string;
  en: string;
}

// Type Course complet
export interface Course {
  id: string;
  name: BilingualText;
  description: BilingualText;
  category: {
    id: string;
    label: BilingualText;
  };
  level: {
    id: string;
    label: BilingualText;
  };
  duration_weeks: number;
  price_xof: number;
  objectives: BilingualText[];
  prerequisites: BilingualText[];
  curriculum: BilingualText[];
  instructor_id?: string;
  rating?: number;
  reviewCount?: number;
  enrollmentCount?: number;
}

// Types additionnels pour api.ts
export interface User {
  id: string;
  email: string;
  role: 'student' | 'instructor' | 'admin' | 'super_admin';
  first_name?: string;
  last_name?: string;
  created_at?: string;
}

export interface DiagnosticTest {
  id: string;
  course_id: string;
  title: BilingualText;
  questions: any[];
  created_at?: string;
}

export interface DiagnosticResult {
  id: string;
  user_id: string;
  test_id: string;
  score: number;
  answers: any[];
  completed_at?: string;
}

export interface LearningContract {
  id: string;
  enrollment_id: string;
  objectives: BilingualText[];
  status: 'pending' | 'active' | 'completed';
  created_at?: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  status: 'active' | 'completed' | 'cancelled';
  enrolled_at?: string;
}

// Types pour les catégories et niveaux
export type CourseCategory = 'tech' | 'language' | 'business';
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type SortOption = 'popularity' | 'price-asc' | 'price-desc' | 'rating' | 'duration';

