'use client';
export const dynamic = 'force-dynamic';

export interface Course {
  id: string;
  slug: string;
  name_en: string;
  name_fr: string;
  description_en: string;
  description_fr: string;
  category: string;
  level: string;
  duration_weeks: number;
  price: number;
  currency: string;
  language: string;
  is_published: boolean;
  requires_diagnostic: boolean;
  instructor_name: string;
  image_url?: string;
  thumbnail_url?: string;
  objectives_en?: string;
  objectives_fr?: string;
  prerequisites_en?: string;
  prerequisites_fr?: string;
  curriculum?: any;
  path?: string; // Added for the DynamicViewer bridge
}

export const coursesData: Course[] = [
  {
    id: 'HOSP-202',
    slug: 'hospitality-communication',
    name_en: 'Hospitality Communication',
    name_fr: 'Communication Hôtelière',
    description_en: 'Professional English and French for the hospitality industry.',
    description_fr: 'Anglais et Français professionnels pour l\'industrie hôtelière.',
    category: 'Vocational',
    level: 'Intermediate',
    duration_weeks: 8,
    price: 45000,
    currency: 'XOF',
    language: 'Bilingual',
    is_published: true,
    requires_diagnostic: true,
    instructor_name: 'Abel C.',
    path: '/courses/Vocational/Hospitality_Communication_Course.html'
  },
  {
    id: 'SURV-303',
    slug: 'survival-english',
    name_en: 'Survival English for Trade',
    name_fr: 'Anglais de Survie pour le Commerce',
    description_en: 'Essential English for cross-border trade and travel.',
    description_fr: 'Anglais essentiel pour le commerce transfrontalier et les voyages.',
    category: 'Vocational',
    level: 'Beginner',
    duration_weeks: 6,
    price: 35000,
    currency: 'XOF',
    language: 'English/French',
    is_published: true,
    requires_diagnostic: true,
    instructor_name: 'Abel C.',
    path: '/courses/Vocational/Survival_English_Trade_Travel.html'
  }
];

export const getCoursesByCategory = (category: string): Course[] => {
  const courses = Array.isArray(coursesData) ? coursesData : [];
  if (!category || category === 'all') return courses;
  return courses.filter(course => course?.category?.toLowerCase() === category.toLowerCase());
};

export const getCoursesByLevel = (level: string): Course[] => {
  const courses = Array.isArray(coursesData) ? coursesData : [];
  if (!level || level === 'all') return courses;
  return courses.filter(course => course?.level?.toLowerCase() === level.toLowerCase());
};

export const sortCourses = (courses: Course[], criteria: string): Course[] => {
  if (!Array.isArray(courses)) return [];
  const sorted = [...courses];
  switch (criteria) {
    case 'price-low': return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
    case 'price-high': return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
    case 'duration': return sorted.sort((a, b) => (a.duration_weeks || 0) - (b.duration_weeks || 0));
    case 'name': return sorted.sort((a, b) => (a.name_en || '').localeCompare(b.name_en || ''));
    default: return sorted;
  }
};

export default coursesData;