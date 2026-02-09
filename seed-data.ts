import { supabase } from './lib/supabase';

const initialCourses = [
  { 
    title_en: 'Advanced Hydraulic Systems', 
    title_fr: 'Systèmes Hydrauliques Avancés', 
    description: 'Bilingual technical mastery of fluid power.',
    category: 'Mechanical',
    density: 0.85 
  },
  { 
    title_en: 'Internal Combustion Logic', 
    title_fr: 'Logique de Combustion Interne', 
    description: 'Analyzing engine cycles and thermal efficiency.',
    category: 'Motor Tech',
    density: 0.92 
  },
  { 
    title_en: 'Electrical Circuit Troubleshooting', 
    title_fr: 'Dépannage des Circuits Électriques', 
    description: 'Diagnostics for complex vocational wiring.',
    category: 'Electrical',
    density: 0.78 
  }
];

async function seed() {
  const { data, error } = await supabase.from('modules').insert(initialCourses);
  if (error) console.error('Injection Error:', error);
  else console.log('Successfully injected 3 core modules.');
}

seed();