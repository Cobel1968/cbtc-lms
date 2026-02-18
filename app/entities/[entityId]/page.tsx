'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface EntityPageProps {
  params: {
    id: string;
  };
}

export default function EntityPage({ params }: EntityPageProps) {
  const { id } = params;
  const [entity, setEntity] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchEntity() {
      try {
        const res = await fetch(`/api/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch entity ${id}`);
        const data = await res.json();
        setEntity(data.data);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEntity();
  }, [id]);

  if (loading) return <div>Loading entity {id}...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!entity) return <div>No data found for entity {id}</div>;

  return (
    <div>
      <h1>Entity ID: {entity.id}</h1>
      <pre>{JSON.stringify(entity, null, 2)}</pre>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
