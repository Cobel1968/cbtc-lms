import { NextResponse } from 'next/server';
import * as db from '@/lib/db-helpers';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { data: course, error } = await db.getCourseById(params.id);
    
    if (error || !course) {
      return NextResponse.json(
        { error: 'Cours non trouvé' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json({ data: course });
  } catch (error: any) {
    console.error('Error fetching course:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' }, 
      { status: 500 }
    );
  }
}
