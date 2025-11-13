// FILE: app/register/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';
import BilingualText from '../components/BilingualText';

export default function RegisterPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Placeholder translation keys for the form (you may need to add these to your translations.ts file)
  const formTranslations = {
    title: { fr: 'Créer un Compte', en: 'Create an Account' },
    fullName: { fr: 'Nom Complet', en: 'Full Name' },
    email: { fr: 'Adresse E-mail', en: 'Email Address' },
    password: { fr: 'Mot de Passe', en: 'Password' },
    registerButton: { fr: 'S\'inscrire', en: 'Register' },
    alreadyAccount: { fr: 'Déjà un compte ?', en: 'Already have an account?' },
    signIn: { fr: 'Se connecter', en: 'Sign in' },
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Import the register function dynamically to avoid SSR issues
      const { register } = await import('../lib/api');
      const { saveAuth } = await import('../lib/auth');
      
      // Split full name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const first_name = nameParts[0] || '';
      const last_name = nameParts.slice(1).join(' ') || '';

      // Call the API
      const result = await register({
        email: formData.email,
        password: formData.password,
        first_name,
        last_name,
        phone: '', // Optional, can be added later
      });

      if (result.error) {
        setError(result.error);
        setIsLoading(false);
        return;
      }

      if (result.data) {
        // Save authentication
        saveAuth(result.data.token, result.data.user);
        setSuccess(true);
        
        // Redirect to home page after 1 second
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      }
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message || 'Une erreur est survenue lors de l\'inscription');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          <BilingualText text={formTranslations.title} />
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded-md">
              {error}
            </div>
          )}
          {success && (
            <div className="p-3 text-sm text-green-700 bg-green-100 border border-green-300 rounded-md">
              Compte créé avec succès ! Redirection en cours...
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              <BilingualText text={formTranslations.fullName} />
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              disabled={isLoading}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              <BilingualText text={formTranslations.email} />
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={isLoading}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              <BilingualText text={formTranslations.password} />
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              disabled={isLoading}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <BilingualText text={formTranslations.registerButton} />
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          <BilingualText text={formTranslations.alreadyAccount} />{' '}
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            <BilingualText text={formTranslations.signIn} />
          </Link>
        </p>
      </div>
    </div>
  );
}