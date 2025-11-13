import { BilingualText, Course, CourseCategory, CourseLevel, SortOption } from './types';

// Données des 10 cours
const courses: Course[] = [
  {
    id: 'smart-contracts',
    name: {
      fr: 'Développement Smart Contracts Solidity',
      en: 'Smart Contracts Development with Solidity'
    },
    description: {
      fr: 'Maîtrisez la programmation blockchain et créez des contrats intelligents sécurisés sur Ethereum',
      en: 'Master blockchain programming and create secure smart contracts on Ethereum'
    },
    category: {
      id: 'tech',
      label: { fr: 'Technologie', en: 'Technology' }
    },
    level: {
      id: 'advanced',
      label: { fr: 'Avancé', en: 'Advanced' }
    },
    duration_weeks: 12,
    price_xof: 325000,
    objectives: [
      { fr: 'Comprendre l\'architecture blockchain et Ethereum', en: 'Understand blockchain architecture and Ethereum' },
      { fr: 'Maîtriser le langage Solidity', en: 'Master Solidity language' },
      { fr: 'Développer et déployer des smart contracts', en: 'Develop and deploy smart contracts' },
      { fr: 'Auditer la sécurité des contrats', en: 'Audit contract security' }
    ],
    prerequisites: [
      { fr: 'Bases en programmation (JavaScript, Python)', en: 'Programming basics (JavaScript, Python)' },
      { fr: 'Compréhension des concepts blockchain', en: 'Understanding of blockchain concepts' }
    ],
    curriculum: [
      { fr: 'Introduction à la blockchain et Ethereum', en: 'Introduction to blockchain and Ethereum' },
      { fr: 'Fondamentaux Solidity', en: 'Solidity fundamentals' },
      { fr: 'Smart contracts avancés', en: 'Advanced smart contracts' },
      { fr: 'Tests et déploiement', en: 'Testing and deployment' },
      { fr: 'Sécurité et audit', en: 'Security and audit' }
    ],
    rating: 4.8,
    reviewCount: 127,
    enrollmentCount: 342
  },
  {
    id: 'ai-ml',
    name: {
      fr: 'Intelligence Artificielle et Machine Learning',
      en: 'Artificial Intelligence and Machine Learning'
    },
    description: {
      fr: 'Devenez expert en IA et développez des modèles de Machine Learning performants',
      en: 'Become an AI expert and develop high-performance Machine Learning models'
    },
    category: {
      id: 'tech',
      label: { fr: 'Technologie', en: 'Technology' }
    },
    level: {
      id: 'intermediate',
      label: { fr: 'Intermédiaire', en: 'Intermediate' }
    },
    duration_weeks: 10,
    price_xof: 230000,
    objectives: [
      { fr: 'Comprendre les algorithmes de ML', en: 'Understand ML algorithms' },
      { fr: 'Utiliser TensorFlow et PyTorch', en: 'Use TensorFlow and PyTorch' },
      { fr: 'Créer des réseaux de neurones', en: 'Create neural networks' },
      { fr: 'Déployer des modèles en production', en: 'Deploy models in production' }
    ],
    prerequisites: [
      { fr: 'Python intermédiaire', en: 'Intermediate Python' },
      { fr: 'Bases en mathématiques (algèbre, statistiques)', en: 'Math basics (algebra, statistics)' }
    ],
    curriculum: [
      { fr: 'Introduction au Machine Learning', en: 'Introduction to Machine Learning' },
      { fr: 'Réseaux de neurones', en: 'Neural networks' },
      { fr: 'Deep Learning avec TensorFlow', en: 'Deep Learning with TensorFlow' },
      { fr: 'Vision par ordinateur', en: 'Computer vision' },
      { fr: 'NLP et traitement du langage', en: 'NLP and language processing' }
    ],
    rating: 4.7,
    reviewCount: 89,
    enrollmentCount: 256
  },
  {
    id: 'ielts-65',
    name: {
      fr: 'Préparation IELTS 6.5',
      en: 'IELTS 6.5 Preparation'
    },
    description: {
      fr: 'Programme intensif pour atteindre le niveau IELTS 6.5 requis pour l\'immigration et les études',
      en: 'Intensive program to achieve IELTS 6.5 level required for immigration and studies'
    },
    category: {
      id: 'language',
      label: { fr: 'Langues', en: 'Languages' }
    },
    level: {
      id: 'intermediate',
      label: { fr: 'Intermédiaire', en: 'Intermediate' }
    },
    duration_weeks: 8,
    price_xof: 260000,
    objectives: [
      { fr: 'Atteindre le score IELTS 6.5', en: 'Achieve IELTS 6.5 score' },
      { fr: 'Maîtriser les 4 sections du test', en: 'Master all 4 test sections' },
      { fr: 'Techniques de gestion du temps', en: 'Time management techniques' },
      { fr: 'Pratique intensive avec examens blancs', en: 'Intensive practice with mock exams' }
    ],
    prerequisites: [
      { fr: 'Niveau anglais intermédiaire (B1-B2)', en: 'Intermediate English level (B1-B2)' }
    ],
    curriculum: [
      { fr: 'Listening - Compréhension orale', en: 'Listening comprehension' },
      { fr: 'Reading - Lecture académique', en: 'Academic reading' },
      { fr: 'Writing - Rédaction Task 1 & 2', en: 'Writing Task 1 & 2' },
      { fr: 'Speaking - Expression orale', en: 'Speaking skills' },
      { fr: 'Examens blancs et corrections', en: 'Mock exams and feedback' }
    ],
    rating: 4.9,
    reviewCount: 203,
    enrollmentCount: 487
  },
  {
    id: 'ielts-50',
    name: {
      fr: 'Préparation IELTS 5.0',
      en: 'IELTS 5.0 Preparation'
    },
    description: {
      fr: 'Formation complète pour obtenir le score IELTS 5.0',
      en: 'Complete training to achieve IELTS 5.0 score'
    },
    category: {
      id: 'language',
      label: { fr: 'Langues', en: 'Languages' }
    },
    level: {
      id: 'beginner',
      label: { fr: 'Débutant', en: 'Beginner' }
    },
    duration_weeks: 6,
    price_xof: 195000,
    objectives: [
      { fr: 'Atteindre le score IELTS 5.0', en: 'Achieve IELTS 5.0 score' },
      { fr: 'Bases solides en anglais', en: 'Solid English foundations' },
      { fr: 'Familiarisation avec le format IELTS', en: 'IELTS format familiarization' }
    ],
    prerequisites: [
      { fr: 'Niveau anglais élémentaire (A2)', en: 'Elementary English level (A2)' }
    ],
    curriculum: [
      { fr: 'Fundamentals - Bases de l\'anglais', en: 'English fundamentals' },
      { fr: 'Listening - Compréhension orale', en: 'Listening comprehension' },
      { fr: 'Reading - Lecture simple', en: 'Basic reading' },
      { fr: 'Writing - Rédaction de base', en: 'Basic writing' },
      { fr: 'Speaking - Expression orale', en: 'Speaking skills' }
    ],
    rating: 4.6,
    reviewCount: 156,
    enrollmentCount: 398
  },
  {
    id: 'ielts-40',
    name: {
      fr: 'Préparation IELTS 4.0',
      en: 'IELTS 4.0 Preparation'
    },
    description: {
      fr: 'Démarrez votre parcours IELTS avec une base solide',
      en: 'Start your IELTS journey with a solid foundation'
    },
    category: {
      id: 'language',
      label: { fr: 'Langues', en: 'Languages' }
    },
    level: {
      id: 'beginner',
      label: { fr: 'Débutant', en: 'Beginner' }
    },
    duration_weeks: 5,
    price_xof: 165000,
    objectives: [
      { fr: 'Atteindre le score IELTS 4.0', en: 'Achieve IELTS 4.0 score' },
      { fr: 'Introduction au test IELTS', en: 'Introduction to IELTS test' },
      { fr: 'Vocabulaire de base', en: 'Basic vocabulary' }
    ],
    prerequisites: [
      { fr: 'Aucun prérequis', en: 'No prerequisites' }
    ],
    curriculum: [
      { fr: 'Introduction à l\'anglais', en: 'Introduction to English' },
      { fr: 'Vocabulaire essentiel', en: 'Essential vocabulary' },
      { fr: 'Grammaire de base', en: 'Basic grammar' },
      { fr: 'Compréhension orale simple', en: 'Simple listening' },
      { fr: 'Expression orale guidée', en: 'Guided speaking' }
    ],
    rating: 4.5,
    reviewCount: 98,
    enrollmentCount: 267
  },
  {
    id: 'english-basic',
    name: {
      fr: 'Anglais Basique',
      en: 'Basic English'
    },
    description: {
      fr: 'Apprenez les fondamentaux de la langue anglaise',
      en: 'Learn the fundamentals of English language'
    },
    category: {
      id: 'language',
      label: { fr: 'Langues', en: 'Languages' }
    },
    level: {
      id: 'beginner',
      label: { fr: 'Débutant', en: 'Beginner' }
    },
    duration_weeks: 4,
    price_xof: 130000,
    objectives: [
      { fr: 'Communiquer en anglais de base', en: 'Communicate in basic English' },
      { fr: 'Comprendre des conversations simples', en: 'Understand simple conversations' },
      { fr: 'Écrire des phrases courtes', en: 'Write short sentences' }
    ],
    prerequisites: [
      { fr: 'Aucun prérequis', en: 'No prerequisites' }
    ],
    curriculum: [
      { fr: 'Alphabet et prononciation', en: 'Alphabet and pronunciation' },
      { fr: 'Vocabulaire quotidien', en: 'Daily vocabulary' },
      { fr: 'Grammaire élémentaire', en: 'Elementary grammar' },
      { fr: 'Conversations de base', en: 'Basic conversations' }
    ],
    rating: 4.7,
    reviewCount: 234,
    enrollmentCount: 589
  },
  {
    id: 'digital-marketing',
    name: {
      fr: 'Marketing Digital 360°',
      en: '360° Digital Marketing'
    },
    description: {
      fr: 'Formation complète en stratégie digitale, SEO, publicité en ligne et réseaux sociaux',
      en: 'Complete training in digital strategy, SEO, online advertising and social media'
    },
    category: {
      id: 'business',
      label: { fr: 'Business', en: 'Business' }
    },
    level: {
      id: 'intermediate',
      label: { fr: 'Intermédiaire', en: 'Intermediate' }
    },
    duration_weeks: 10,
    price_xof: 295000,
    objectives: [
      { fr: 'Élaborer une stratégie digitale complète', en: 'Develop a complete digital strategy' },
      { fr: 'Maîtriser le SEO et SEA', en: 'Master SEO and SEA' },
      { fr: 'Gérer les réseaux sociaux professionnellement', en: 'Manage social media professionally' },
      { fr: 'Analyser les performances marketing', en: 'Analyze marketing performance' }
    ],
    prerequisites: [
      { fr: 'Bases en marketing', en: 'Marketing basics' },
      { fr: 'Usage courant d\'internet', en: 'Regular internet usage' }
    ],
    curriculum: [
      { fr: 'Stratégie digitale', en: 'Digital strategy' },
      { fr: 'SEO - Référencement naturel', en: 'SEO - Organic search' },
      { fr: 'SEA - Publicité en ligne (Google Ads)', en: 'SEA - Online advertising (Google Ads)' },
      { fr: 'Social Media Marketing', en: 'Social Media Marketing' },
      { fr: 'Analytics et ROI', en: 'Analytics and ROI' }
    ],
    rating: 4.8,
    reviewCount: 176,
    enrollmentCount: 423
  },
  {
    id: 'customer-service',
    name: {
      fr: 'Excellence du Service Client',
      en: 'Customer Service Excellence'
    },
    description: {
      fr: 'Développez vos compétences pour offrir un service client exceptionnel',
      en: 'Develop your skills to provide exceptional customer service'
    },
    category: {
      id: 'business',
      label: { fr: 'Business', en: 'Business' }
    },
    level: {
      id: 'beginner',
      label: { fr: 'Débutant', en: 'Beginner' }
    },
    duration_weeks: 6,
    price_xof: 185000,
    objectives: [
      { fr: 'Techniques de communication client', en: 'Customer communication techniques' },
      { fr: 'Gestion des réclamations', en: 'Complaint management' },
      { fr: 'Fidélisation client', en: 'Customer retention' },
      { fr: 'Service client digital', en: 'Digital customer service' }
    ],
    prerequisites: [
      { fr: 'Aucun prérequis', en: 'No prerequisites' }
    ],
    curriculum: [
      { fr: 'Fondamentaux du service client', en: 'Customer service fundamentals' },
      { fr: 'Communication efficace', en: 'Effective communication' },
      { fr: 'Gestion des situations difficiles', en: 'Handling difficult situations' },
      { fr: 'Outils digitaux de service client', en: 'Digital customer service tools' },
      { fr: 'Excellence et fidélisation', en: 'Excellence and retention' }
    ],
    rating: 4.6,
    reviewCount: 142,
    enrollmentCount: 367
  },
  {
    id: 'marketing-sales',
    name: {
      fr: 'Marketing et Techniques de Vente',
      en: 'Marketing and Sales Techniques'
    },
    description: {
      fr: 'Maîtrisez l\'art de vendre et les stratégies marketing modernes',
      en: 'Master the art of selling and modern marketing strategies'
    },
    category: {
      id: 'business',
      label: { fr: 'Business', en: 'Business' }
    },
    level: {
      id: 'intermediate',
      label: { fr: 'Intermédiaire', en: 'Intermediate' }
    },
    duration_weeks: 8,
    price_xof: 260000,
    objectives: [
      { fr: 'Techniques de vente avancées', en: 'Advanced sales techniques' },
      { fr: 'Psychologie du consommateur', en: 'Consumer psychology' },
      { fr: 'Négociation et closing', en: 'Negotiation and closing' },
      { fr: 'Marketing stratégique', en: 'Strategic marketing' }
    ],
    prerequisites: [
      { fr: 'Expérience en vente ou marketing souhaitable', en: 'Sales or marketing experience desirable' }
    ],
    curriculum: [
      { fr: 'Fondamentaux du marketing', en: 'Marketing fundamentals' },
      { fr: 'Techniques de prospection', en: 'Prospecting techniques' },
      { fr: 'Art de la négociation', en: 'Art of negotiation' },
      { fr: 'Closing et suivi client', en: 'Closing and client follow-up' },
      { fr: 'Marketing mix et stratégie', en: 'Marketing mix and strategy' }
    ],
    rating: 4.7,
    reviewCount: 189,
    enrollmentCount: 445
  },
  {
    id: 'asset-management',
    name: {
      fr: 'Gestion d\'Actifs et Investissement',
      en: 'Asset Management and Investment'
    },
    description: {
      fr: 'Formation professionnelle en gestion de portefeuille et stratégies d\'investissement',
      en: 'Professional training in portfolio management and investment strategies'
    },
    category: {
      id: 'business',
      label: { fr: 'Business', en: 'Business' }
    },
    level: {
      id: 'advanced',
      label: { fr: 'Avancé', en: 'Advanced' }
    },
    duration_weeks: 12,
    price_xof: 360000,
    objectives: [
      { fr: 'Analyse financière avancée', en: 'Advanced financial analysis' },
      { fr: 'Gestion de portefeuille', en: 'Portfolio management' },
      { fr: 'Évaluation des risques', en: 'Risk assessment' },
      { fr: 'Stratégies d\'investissement', en: 'Investment strategies' }
    ],
    prerequisites: [
      { fr: 'Connaissances en finance', en: 'Finance knowledge' },
      { fr: 'Bases en comptabilité', en: 'Accounting basics' }
    ],
    curriculum: [
      { fr: 'Marchés financiers', en: 'Financial markets' },
      { fr: 'Analyse fondamentale et technique', en: 'Fundamental and technical analysis' },
      { fr: 'Gestion de portefeuille', en: 'Portfolio management' },
      { fr: 'Produits dérivés', en: 'Derivatives' },
      { fr: 'Gestion des risques', en: 'Risk management' }
    ],
    rating: 4.9,
    reviewCount: 94,
    enrollmentCount: 218
  }
];

// Export des données et fonctions utilitaires
export const coursesData = courses;

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return courses.filter(course => course.category.id === category);
}

export function getCoursesByLevel(level: CourseLevel): Course[] {
  return courses.filter(course => course.level.id === level);
}

export function sortCourses(courses: Course[], sortBy: SortOption): Course[] {
  const sorted = [...courses];
  
  switch (sortBy) {
    case 'popularity':
      return sorted.sort((a, b) => (b.enrollmentCount || 0) - (a.enrollmentCount || 0));
    case 'price-asc':
      return sorted.sort((a, b) => a.price_xof - b.price_xof);
    case 'price-desc':
      return sorted.sort((a, b) => b.price_xof - a.price_xof);
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'duration':
      return sorted.sort((a, b) => a.duration_weeks - b.duration_weeks);
    default:
      return sorted;
  }
}
