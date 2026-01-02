import { NextResponse } from 'next/server';
import * as db from '@/lib/db-helpers';

export async function POST(req: Request) {
  try {
    const { course_id, user_id, learning_contract_id } = await req.json();
    
    if (!course_id || !user_id) {
      return NextResponse.json(
        { error: 'course_id et user_id sont requis' }, 
        { status: 400 }
      );
    }
    
    const { data: enrollment, error } = await db.createEnrollment({
      user_id,
      course_id,
      learning_contract_id: learning_contract_id || null,
      enrollment_date: new Date().toISOString(),
      progress_percentage: 0,
      status: 'pending',
    });
    
    if (error || !enrollment) {
      return NextResponse.json(
        { error: 'Erreur lors de l\'inscription au cours' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ data: enrollment }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating enrollment:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' }, 
      { status: 500 }
    );
  }
}
