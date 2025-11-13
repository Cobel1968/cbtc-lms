import { NextResponse } from 'next/server';
import * as db from '@/lib/db-helpers';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const course = await db.getCourseById(paramsData?.id);
    return NextResponse.json(course);
  } catch (error: any) {
    console.error('Error fetching course:', error);
    return NextResponse.json(
      { error: error.message || 'Cours non trouvé' }, 
      { status: 404 }
    );
  }
}

