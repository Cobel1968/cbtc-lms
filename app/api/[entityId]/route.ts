// app/api/[id]/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// GET handler for a generic entity by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    // Replace 'entities' with your actual table name
    const { data, error } = await supabase
      .from('entities')
      .select('*')
      .eq('id', id)
      .single(); // single ensures we get one row

    if (error) throw error;

    if (!data) {
      return NextResponse.json({ error: `Entity with ID ${id} not found` }, { status: 404 });
    }

    return NextResponse.json({ data });
  } catch (err: any) {
    console.error('API Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
