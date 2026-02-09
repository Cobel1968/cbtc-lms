export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      assessment_ingestion_logs: {
        Row: { id: number; user_id: string | null; file_path: string; status: string | null; device_metadata: Json | null; created_at: string | null }
      },
      assessment_pool: {
        Row: { id: string; course_id: string | null; question_en: string | null; question_fr: string | null; density_weight: number | null; module_id: string | null }
      },
      assessment_results: {
        Row: { id: string; student_id: string | null; technical_terms_detected: Json | null; fluency_score: number | null; bilingual_friction_score: number | null }
      },
      courses: {
        Row: { id: string; title: string; course_code: string; description: string | null; curriculum: Json | null; name_fr: string | null }
      }
    }
  }
}
