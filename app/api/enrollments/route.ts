import { NextResponse } from 'next/server'
import { createEnrollment } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { studentId, courseId } = await request.json()
    const { data, error } = await createEnrollment(studentId, courseId)
    
    if (error) return NextResponse.json({ error: error.message }, { status: 400 })
    return NextResponse.json({ success: true, data })
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}