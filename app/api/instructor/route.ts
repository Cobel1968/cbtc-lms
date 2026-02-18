import { NextResponse } from 'next/server';
import { requireTrainerOrAdmin } from '@/lib/auth-route';

export async function GET() {
  const auth = await requireTrainerOrAdmin();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  return NextResponse.json({ message: 'Instructor API placeholder' });
}

export async function POST() {
  const auth = await requireTrainerOrAdmin();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  return NextResponse.json({ message: 'Use GET for instructor data' }, { status: 405 });
}


