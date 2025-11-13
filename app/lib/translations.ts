// FILE: ./lib/translations.ts

export interface Translations {
  nav: {
    home: string;
    courses: string;
    about: string;
    contact: string;
    login: string;
    register: string;
  };
  hero: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    cta: { fr: string; en: string };
  };
  exploreCourses: { fr: string; en: string };
}

export type Language = 'fr' | 'en';

export const translations: Record<'fr' | 'en', Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      courses: 'Cours',
      about: 'À propos',
      contact: 'Contact',
      login: 'Connexion',
      register: 'Inscription'
    },
    hero: {
      title: { fr: 'Transformez votre avenir avec CBTC', en: 'Transform your future with CBTC' },
      subtitle: { fr: 'Des formations de qualité en technologie, langues et business en Côte d\'Ivoire', en: 'Quality training in technology, languages and business in Côte d\'Ivoire' },
      cta: { fr: 'Commencer maintenant', en: 'Start now' }
    },
    exploreCourses: { fr: 'Explorer les cours', en: 'Explore courses' }
  },
  en: {
    nav: {
      home: 'Home',
      courses: 'Courses',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      register: 'Register'
    },
    hero: {
      title: { fr: 'Transformez votre avenir avec CBTC', en: 'Transform your future with CBTC' },
      subtitle: { fr: 'Des formations de qualité en technologie, langues et business en Côte d\'Ivoire', en: 'Quality training in technology, languages and business in Côte d\'Ivoire' },
      cta: { fr: 'Commencer maintenant', en: 'Start now' }
    },
    exploreCourses: { fr: 'Explorer les cours', en: 'Explore courses' }
  }
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

// NOTE: Set language utility is still useful, but its logic must also be client-aware
export function setLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}