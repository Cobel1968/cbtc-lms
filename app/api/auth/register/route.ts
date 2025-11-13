import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import * as db from '@/lib/db-helpers';

export async function POST(req: Request) {
  try {
    const { email, password, first_name, last_name, phone } = await req.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe sont requis' }, 
        { status: 400 }
      );
    }
    
    const supabase = createServerClient();
    
    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (authError || !authData.user) {
      return NextResponse.json(
        { error: authError?.message || 'Erreur lors de la crÃ©ation du compte' }, 
        { status: 400 }
      );
    }
    
    // Create user profile in users table
    const user = await db.createUser({
      id: authData.user?.id,
      email: authData.user?.email!,
      first_name: first_name || null,
      last_name: last_name || null,
      phone: phone || null,
      role: 'student',
      is_active: true,
    });
    
    return NextResponse.json({ 
      data: {
        token: authData.session?.access_token || '',
        user: {
          id: userData?.id,
          email: userData?.email,
          role: userData?.role,
          first_name: userData?.first_name,
          last_name: user.last_name,
          created_at: user.created_at,
        },
      },
      message: 'Compte crÃ©Ã© avec succÃ¨s !',
    });
    
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur lors de l\'inscription' }, 
      { status: 500 }
    );
  }
}


