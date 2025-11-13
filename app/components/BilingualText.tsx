'use client';

import { useLanguage } from '../contexts/LanguageContext';

interface BilingualTextProps {
  text: {
    fr: string;
    en: string;
  };
}

export default function BilingualText({ text }: BilingualTextProps) {
  const { language } = useLanguage();
  return <>{text[language]}</>;
}
