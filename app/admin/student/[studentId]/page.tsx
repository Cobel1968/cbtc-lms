'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface StudentPageProps {
  params: {
    id: string;
  };
}

export default function StudentPage({ params }: StudentPageProps) {
  const { id } = params;
  const [studentData, setStudentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchStudent() {
      try {
        const res = await fetch(`/api/admin/student/${id}`);
        if (!res.ok) throw new Error(`Student ${id} not found`);
        const data = await res.json();
        setStudentData(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchStudent();
  }, [id]);

  if (loading) return <div>Loading student {id}...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!studentData) return <div>No data found for student {id}</div>;

  return (
    <div>
      <h1>Student: {studentData.name}</h1>
      <p>Email: {studentData.email}</p>
      <p>Status: {studentData.status}</p>
      <button onClick={() => router.push('/admin/student')}>Back to Students</button>
      {/* Add more admin actions here */}
    </div>
  );
}
