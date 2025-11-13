import { coursesData, getCourseById } from '@/app/lib/courses-data';
import CourseDetailClient from './CourseDetailClient';

// Générer les paramètres statiques pour toutes les pages de cours
export async function generateStaticParams() {
  return coursesData.map((course) => ({
    id: course.id,
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function CoursePage({ params }: PageProps) {
  const course = getCourseById(params.id);
  
  return <CourseDetailClient course={course} />;
}
