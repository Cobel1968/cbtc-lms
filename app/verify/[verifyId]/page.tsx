'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface VerifyPageProps {
  params: {
    id: string;
  };
}

interface VerificationData {
  id: string;
  name: string;
  email: string;
  status: string;
  verifiedAt?: string;
}

export default function VerifyPage({ params }: VerifyPageProps) {
  const { id } = params;
  const [data, setData] = useState<VerificationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchVerification() {
      try {
        const res = await fetch(`/api/verify/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch verification for ID ${id}`);
        const result = await res.json();
        setData(result);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchVerification();
  }, [id]);

  if (loading) return <div>Loading verification for {id}...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!data) return <div>No verification data found for {id}</div>;

  return (
    <div>
      <h1>Verification Details</h1>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Status:</strong> {data.status}</p>
      {data.verifiedAt && <p><strong>Verified At:</strong> {data.verifiedAt}</p>}

      <button onClick={() => router.push('/')}>Back to Home</button>
    </div>
  );
}
