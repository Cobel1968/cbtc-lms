'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, Clock, Users, Star, CheckCircle, PlayCircle, 
  FileText, Award, Calendar, ArrowLeft, ChevronRight 
} from 'lucide-react';
import { Course } from '@/app/lib/types';
import { useLanguage } from '@/app/contexts/LanguageContext';
import BilingualText from '@/app/components/BilingualText';
import Link from 'next/link';

interface CourseDetailClientProps {
  course: Course | undefined;
}

export default function CourseDetailClient({ course: initialCourse }: CourseDetailClientProps) {
  const router = useRouter();
  const { language } = useLanguage();
  const [course] = useState(initialCourse);

  useEffect(() => {
    if (!course) {
      router.push('/');
    }
  }, [course, router]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Cours non trouvé' : 'Course not found'}
          </h1>
          <Link href="/" className="text-blue-600 hover:underline">
            {language === 'fr' ? "Retour à l'accueil" : 'Back to home'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            {language === 'fr' ? 'Retour aux cours' : 'Back to courses'}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  <BilingualText text={course.category.label} />
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  <BilingualText text={course.level.label} />
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">
                <BilingualText text={course.name} />
              </h1>

              <p className="text-xl text-blue-100 mb-6">
                <BilingualText text={course.description} />
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="font-semibold">{course.rating || 4.5}</span>
                  <span className="text-blue-200">({course.reviewCount || 0} {language === 'fr' ? 'avis' : 'reviews'})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>{course.enrollmentCount || 0} {language === 'fr' ? 'étudiants' : 'students'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{course.duration_weeks} {language === 'fr' ? 'semaines' : 'weeks'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 text-gray-900">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-blue-600 mb-2">
                    {course.price_xof.toLocaleString()} XOF
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' ? 'Prix total du cours' : 'Full course price'}
                  </p>
                </div>

                <Link
                  href="/register"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3"
                >
                  {language === 'fr' ? "S'inscrire maintenant" : 'Enroll now'}
                </Link>

                <button className="block w-full border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-green-500" />
                    <span>{language === 'fr' ? 'Accès à vie' : 'Lifetime access'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-green-500" />
                    <span>{language === 'fr' ? 'Certificat de réussite' : 'Certificate of completion'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-green-500" />
                    <span>{language === 'fr' ? 'Support instructeur' : 'Instructor support'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="text-blue-600" size={28} />
                {language === 'fr' ? 'Objectifs du cours' : 'Course objectives'}
              </h2>
              <ul className="space-y-3">
                {course.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      <BilingualText text={objective} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="text-blue-600" size={28} />
                {language === 'fr' ? 'Prérequis' : 'Prerequisites'}
              </h2>
              <ul className="space-y-3">
                {course.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      <BilingualText text={prerequisite} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="text-blue-600" size={28} />
                {language === 'fr' ? 'Programme du cours' : 'Course curriculum'}
              </h2>
              <div className="space-y-3">
                {course.curriculum.map((module, index) => (
                  <div 
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <span className="font-semibold text-gray-900">
                          <BilingualText text={module} />
                        </span>
                      </div>
                      <PlayCircle className="text-gray-400" size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Détails du cours' : 'Course details'}
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={18} />
                    <span>{language === 'fr' ? 'Durée' : 'Duration'}</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {course.duration_weeks} {language === 'fr' ? 'semaines' : 'weeks'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BookOpen size={18} />
                    <span>{language === 'fr' ? 'Niveau' : 'Level'}</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    <BilingualText text={course.level.label} />
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={18} />
                    <span>{language === 'fr' ? 'Étudiants' : 'Students'}</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {course.enrollmentCount || 0}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award size={18} />
                    <span>{language === 'fr' ? 'Certificat' : 'Certificate'}</span>
                  </div>
                  <span className="font-semibold text-green-600">
                    {language === 'fr' ? 'Oui' : 'Yes'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span>{language === 'fr' ? 'Accès' : 'Access'}</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {language === 'fr' ? 'À vie' : 'Lifetime'}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {language === 'fr' ? 'Partagez ce cours' : 'Share this course'}
                </h4>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-200 transition-colors text-sm font-semibold">
                    Facebook
                  </button>
                  <button className="flex-1 bg-sky-100 text-sky-600 py-2 rounded-lg hover:bg-sky-200 transition-colors text-sm font-semibold">
                    Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}