import { NextResponse } from 'next/server';
import * as db from '@/lib/db-helpers';

export async function GET(req: Request) {
  try {
    const { data: courses, error } = await db.getCourses();
    
    if (error) {
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des cours' }, 
        { status: 500 }
      );
    }
    
    return NextResponse.json({ data: courses || [] });
  } catch (error: any) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' }, 
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const courseData = await req.json();
    
    // Validate required fields
    if (!courseData.name_fr || !courseData.name_en || !courseData.instructor_id) {
      return NextResponse.json(
        { error: 'Les champs name_fr, name_en et instructor_id sont requis' }, 
        { status: 400 }
      );
    }
    
    const { data: course, error } = await db.createCourse(courseData);
    
    if (error || !course) {
      return NextResponse.json(
        { error: 'Erreur lors de la création du cours' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ data: course }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur lors de la création du cours' }, 
      { status: 500 }
    );
  }
}
