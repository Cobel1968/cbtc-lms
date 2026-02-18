import { supabase } from "@/lib/supabase";
import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth-route';

export const dynamic = 'force-dynamic';

// GET handler for a single student
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const auth = await requireAdmin();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  const { id } = params;

  try {
    const { data: student, error } = await supabase
      .from('students')
      .select('id, name, email, status')
      .eq('id', id)
      .single(); // fetch one record

    if (error) throw error;

    if (!student) {
      return NextResponse.json(
        { error: `Student with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(student);
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
