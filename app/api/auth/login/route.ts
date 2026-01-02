import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import * as db from '@/lib/db-helpers';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Identifiants requis pour accÃ©der Ã  CBTC' }, 
        { status: 400 }
      );
    }
    
    const supabase = createServerClient();
    
    // Authenticate with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (authError || !authData.user) {
      return NextResponse.json(
        { error: 'Email ou mot de passe incorrect' }, 
        { status: 401 }
      );
    }
    
    // Get user profile from users table
    let user;
    try {
      user = await db.getUserByEmail(email);
    } catch (error) {
      // If user doesn't exist in users table, create one from auth user
      user = await db.createUser({
        id: authData.user?.id,
        email: authData.user?.email!,
        role: 'student',
        is_active: true,
      });
    }
    
    return NextResponse.json({ 
      data: {
        token: authData.session?.access_token || '',
        user: {
          id: user?.id,
          email: user?.email,
          role: user?.role,
          first_name: user?.first_name,
          last_name: user.last_name,
          created_at: user.created_at,
        },
      },
      message: 'ðŸš€ Connexion CBTC rÃ©ussie ! Redirection...',
    });
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Erreur de connexion' }, 
      { status: 500 }
    );
  }
}






