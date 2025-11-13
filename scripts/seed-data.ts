import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function seed() {
  console.log('Seeding...');

  // Admin
  const { data: admin } = await supabase.auth.admin.createUser({
    email: 'admin@cbtc.com',
    password: 'Admin123!',
    email_confirm: true,
  });

  await supabase.from('users').upsert({
    id: admin.user.id,
    email: 'admin@cbtc.com',
    role: 'admin',
    first_name: 'System',
    last_name: 'Admin',
    is_active: true,
  });

  // Trainer
  const { data: trainer } = await supabase.auth.admin.createUser({
    email: 'trainer@cbtc.com',
    password: 'Trainer123!',
    email_confirm: true,
  });

  await supabase.from('users').upsert({
    id: trainer.user.id,
    email: 'trainer@cbtc.com',
    role: 'instructor',
    first_name: 'Jane',
    last_name: 'Doe',
    is_active: true,
  });

  // Student
  const { data: student } = await supabase.auth.admin.createUser({
    email: 'student@cbtc.com',
    password: 'Student123!',
    email_confirm: true,
  });

  await supabase.from('users').upsert({
    id: student.user.id,
    email: 'student@cbtc.com',
    role: 'student',
    first_name: 'John',
    last_name: 'Smith',
    is_active: true,
  });

  // Sample Course
  const { data: course } = await supabase.from('courses').insert({
    title: 'Introduction to Web Development',
    description: 'Learn HTML, CSS, JS',
    instructor_id: trainer.user.id,
    price: 99,
  }).select().single();

  // Enroll student
  await supabase.from('enrollments').insert({
    user_id: student.user.id,
    course_id: course.id,
  });

  console.log('Seeded: admin, trainer, student + course');
}

seed().catch(console.error);
