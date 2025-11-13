// FILE: ./contexts/LanguageContext.tsx

'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, setLanguage } from '../lib/translations'; // Import Language type and setLanguage utility

// --- 1. Define Context and default values ---
// Initial language MUST be 'fr' for the Server-Side Render (SSR)
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: 'fr', 
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 2. Initial state is ALWAYS the server default ('fr')
  const [language, setLanguageState] = useState<Language>('fr');
  
  // 3. Client-side effect to read localStorage AFTER hydration
  useEffect(() => {
    // This runs only in the browser after the component has mounted
    const storedLang = (localStorage.getItem('language') as Language);
    
    // If a saved language exists and is different from the current (default 'fr')
    if (storedLang && storedLang !== language) {
      setLanguageState(storedLang); // Triggers a client-side re-render with the correct language
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once after the initial component mount

  // 4. Function to change language and update storage
  const updateLanguage = (lang: Language) => {
    setLanguage(lang); // Your utility to set localStorage
    setLanguageState(lang); // Triggers re-render for new language
  };

  const contextValue = useMemo(() => ({
    language,
    setLanguage: updateLanguage,
  }), [language]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}