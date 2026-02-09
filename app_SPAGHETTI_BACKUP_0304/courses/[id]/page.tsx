import { coursesData } from '@/lib/coursesdata';
import DynamicViewer from '@/components/course/DynamicViewer';
import { notFound } from 'next/navigation';

export default function CoursePage({ params }: { params: { id: string } }) {
  // Find the course in our identified list
  const course = coursesData.find(c => c.id === params.id);

  if (!course) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <DynamicViewer 
        courseId={course.id} 
        htmlPath={course.path} 
      />
    </main>
  );
}