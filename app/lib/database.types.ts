// Database types for Supabase
// Generated based on the 9 tables in Supabase

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          first_name: string | null;
          last_name: string | null;
          phone: string | null;
          role: 'student' | 'instructor' | 'admin' | 'super_admin';
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          role?: 'student' | 'instructor' | 'admin' | 'super_admin';
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          role?: 'student' | 'instructor' | 'admin' | 'super_admin';
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      instructors: {
        Row: {
          id: string;
          user_id: string;
          bio: Json | null; // BilingualText
          expertise: string[] | null;
          certifications: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          bio?: Json | null;
          expertise?: string[] | null;
          certifications?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          bio?: Json | null;
          expertise?: string[] | null;
          certifications?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      courses: {
        Row: {
          id: string;
          name: Json; // BilingualText
          description: Json; // BilingualText
          category: string;
          price: number;
          currency: string;
          duration_weeks: number;
          language: string;
          level: string;
          instructor_id: string;
          image_url: string | null;
          thumbnail_url: string | null;
          video_intro_url: string | null;
          objectives: Json | null; // BilingualText[]
          prerequisites: Json | null; // BilingualText[]
          curriculum: Json | null; // CurriculumWeek[]
          is_published: boolean;
          requires_diagnostic: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: Json;
          description: Json;
          category: string;
          price: number;
          currency?: string;
          duration_weeks: number;
          language: string;
          level: string;
          instructor_id: string;
          image_url?: string | null;
          thumbnail_url?: string | null;
          video_intro_url?: string | null;
          objectives?: Json | null;
          prerequisites?: Json | null;
          curriculum?: Json | null;
          is_published?: boolean;
          requires_diagnostic?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: Json;
          description?: Json;
          category?: string;
          price?: number;
          currency?: string;
          duration_weeks?: number;
          language?: string;
          level?: string;
          instructor_id?: string;
          image_url?: string | null;
          thumbnail_url?: string | null;
          video_intro_url?: string | null;
          objectives?: Json | null;
          prerequisites?: Json | null;
          curriculum?: Json | null;
          is_published?: boolean;
          requires_diagnostic?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      diagnostic_tests: {
        Row: {
          id: string;
          course_id: string;
          title: Json; // BilingualText
          description: Json | null; // BilingualText
          duration_minutes: number;
          questions: Json; // DiagnosticQuestion[]
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          title: Json;
          description?: Json | null;
          duration_minutes: number;
          questions: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          course_id?: string;
          title?: Json;
          description?: Json | null;
          duration_minutes?: number;
          questions?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      diagnostic_results: {
        Row: {
          id: string;
          user_id: string;
          test_id: string;
          score: number;
          max_score: number;
          percentage: number;
          level_recommendation: string;
          ai_analysis: Json | null; // BilingualText
          suggested_duration_weeks: number | null;
          answers: Json; // Record<string, string>
          completed_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          test_id: string;
          score: number;
          max_score: number;
          percentage: number;
          level_recommendation: string;
          ai_analysis?: Json | null;
          suggested_duration_weeks?: number | null;
          answers: Json;
          completed_at?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          test_id?: string;
          score?: number;
          max_score?: number;
          percentage?: number;
          level_recommendation?: string;
          ai_analysis?: Json | null;
          suggested_duration_weeks?: number | null;
          answers?: Json;
          completed_at?: string;
          created_at?: string;
        };
      };
      learning_contracts: {
        Row: {
          id: string;
          student_id: string;
          course_id: string;
          start_date: string;
          end_date: string;
          total_price: number;
          payment_schedule: Json | null; // PaymentSchedule[]
          objectives: string[] | null;
          terms: Json | null; // BilingualText
          student_signature: string | null;
          instructor_signature: string | null;
          signed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          student_id: string;
          course_id: string;
          start_date: string;
          end_date: string;
          total_price: number;
          payment_schedule?: Json | null;
          objectives?: string[] | null;
          terms?: Json | null;
          student_signature?: string | null;
          instructor_signature?: string | null;
          signed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          student_id?: string;
          course_id?: string;
          start_date?: string;
          end_date?: string;
          total_price?: number;
          payment_schedule?: Json | null;
          objectives?: string[] | null;
          terms?: Json | null;
          student_signature?: string | null;
          instructor_signature?: string | null;
          signed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      enrollments: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          learning_contract_id: string | null;
          enrollment_date: string;
          start_date: string | null;
          completion_date: string | null;
          progress_percentage: number;
          status: 'pending' | 'active' | 'completed' | 'cancelled';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_id: string;
          learning_contract_id?: string | null;
          enrollment_date?: string;
          start_date?: string | null;
          completion_date?: string | null;
          progress_percentage?: number;
          status?: 'pending' | 'active' | 'completed' | 'cancelled';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          course_id?: string;
          learning_contract_id?: string | null;
          enrollment_date?: string;
          start_date?: string | null;
          completion_date?: string | null;
          progress_percentage?: number;
          status?: 'pending' | 'active' | 'completed' | 'cancelled';
          created_at?: string;
          updated_at?: string;
        };
      };
      assignments: {
        Row: {
          id: string;
          course_id: string;
          title: Json; // BilingualText
          description: Json | null; // BilingualText
          due_date: string | null;
          max_score: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          title: Json;
          description?: Json | null;
          due_date?: string | null;
          max_score: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          course_id?: string;
          title?: Json;
          description?: Json | null;
          due_date?: string | null;
          max_score?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      submissions: {
        Row: {
          id: string;
          assignment_id: string;
          user_id: string;
          content: Json | null;
          score: number | null;
          feedback: Json | null; // BilingualText
          submitted_at: string | null;
          graded_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          assignment_id: string;
          user_id: string;
          content?: Json | null;
          score?: number | null;
          feedback?: Json | null;
          submitted_at?: string | null;
          graded_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          assignment_id?: string;
          user_id?: string;
          content?: Json | null;
          score?: number | null;
          feedback?: Json | null;
          submitted_at?: string | null;
          graded_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      user_role: 'student' | 'instructor' | 'admin' | 'super_admin';
      enrollment_status: 'pending' | 'active' | 'completed' | 'cancelled';
    };
  };
}

