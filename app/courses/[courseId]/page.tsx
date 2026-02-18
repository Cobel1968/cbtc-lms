'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface CoursePageProps {
  params: {
    id: string;
  };
}

interface Module {
  id: string;
  title_en: string;
  title_fr: string;
}

export default function CoursePage({ params }: CoursePageProps) {
  const { id } = params;
  const [courseData, setCourseData] = useState<{ id: string; modules: Module[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch(`/api/courses/${id}`);
        if (!res.ok) throw new Error(`Course ${id} not found`);
        const data = await res.json();
        setCourseData(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, [id]);

  if (loading) return <div>Loading course {id}...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!courseData) return <div>No data found for course {id}</div>;

  return (
    <div>
      <h1>Course: {courseData.id}</h1>
      <h2>Modules</h2>
      <ul>
        {courseData.modules.map((mod) => (
          <li key={mod.id}>
            {mod.title_en} / {mod.title_fr}
          </li>
        ))}
      </ul>
      <button onClick={() => router.push('/courses')}>Back to Courses</button>
    </div>
  );
}
