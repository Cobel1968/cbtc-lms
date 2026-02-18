import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth-route';

export async function GET() {
  const auth = await requireAdmin();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  return NextResponse.json({ message: 'Admin student list placeholder' });
}

export async function POST() {
  const auth = await requireAdmin();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  return NextResponse.json({ message: 'Use GET for student list' }, { status: 405 });
}


