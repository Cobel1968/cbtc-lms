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

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const updates = await req.json();
    const { data: course, error } = await db.updateCourse(params.id, updates);
    
    if (error || !course) {
      return NextResponse.json(
        { error: 'Erreur lors de la mise à jour du cours' }, 
        { status: 500 }
      );
    }
    
    return NextResponse.json({ data: course });
  } catch (error: any) {
    console.error('Error updating course:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' }, 
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await db.deleteCourse(params.id);
    
    if (error) {
      return NextResponse.json(
        { error: 'Erreur lors de la suppression du cours' }, 
        { status: 500 }
      );
    }
    
    return NextResponse.json({ message: 'Cours supprimé avec succès' });
  } catch (error: any) {
    console.error('Error deleting course:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' }, 
      { status: 500 }
    );
  }
}
