export interface Course {
  id: number;
  title_en: string;
  title_fr: string;
  code: string;
  modules?: Module[];
}

export interface Module {
  id: number;
  course_id: number;
  name_en: string;
  name_fr: string;
  sequence_order: number;
  curriculum_density: number;
}

export interface Question {
  id: string;
  module_id: number;
  content_en: string;
  content_fr: string;
  options_json: any;
  correct_key: string;
  domain?: string;
}
