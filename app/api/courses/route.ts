import { NextResponse } from 'next/server';
import * as db from '@/lib/db-helpers';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const published = searchParams.get('published');
    const category = searchParams.get('category');
    const level = searchParams.get('level');
    const instructor_id = searchParams.get('instructor_id');
    
    const filters: any = {};
    if (published !== null) filters.published = published === 'true';
    if (category) filters.category = category;
    if (level) filters.level = level;
    if (instructor_id) filters.instructor_id = instructor_id;
    
    const courses = await db.getCourses(filters);
    
    return NextResponse.json(courses);
  } catch (error: any) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur lors de la rÃ©cupÃ©ration des cours' }, 
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const courseData = await req.json();
    
    // Validate required fields
    if (!courseData.name || !courseDataData?.description || !courseData.instructor_id) {
      return NextResponse.json(
        { error: 'Les champs name, description et instructor_id sont requis' }, 
        { status: 400 }
      );
    }
    
    const course = await db.createCourse({
      ...courseData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    
    return NextResponse.json(course, { status: 201 });
  } catch (error: any) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur lors de la crÃ©ation du cours' }, 
      { status: 500 }
    );
  }
}


