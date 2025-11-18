'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useRouter } from 'next/navigation';
import { Brain, CheckCircle, Clock, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { coursesData } from '@/app/lib/courses-data';

interface Question {
  id: string;
  question: { fr: string; en: string };
  options: { fr: string; en: string }[];
  correctAnswer: number;
  explanation?: { fr: string; en: string };
}

export default function DiagnosticPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [levelRecommendation, setLevelRecommendation] = useState('');

  // Sample diagnostic questions (in a real app, these would come from the database)
  const questions: Question[] = [
    {
      id: '1',
      question: {
        fr: 'Quelle est votre expérience avec cette technologie ?',
        en: 'What is your experience with this technology?'
      },
      options: [
        { fr: 'Débutant complet - Je n\'ai jamais utilisé cette technologie', en: 'Complete beginner - I have never used this technology' },
        { fr: 'Débutant - J\'ai quelques notions de base', en: 'Beginner - I have some basic knowledge' },
        { fr: 'Intermédiaire - J\'ai une bonne compréhension', en: 'Intermediate - I have a good understanding' },
        { fr: 'Avancé - Je suis très expérimenté', en: 'Advanced - I am very experienced' }
      ],
      correctAnswer: 0
    },
    {
      id: '2',
      question: {
        fr: 'Combien de temps pouvez-vous consacrer à l\'apprentissage par semaine ?',
        en: 'How much time can you dedicate to learning per week?'
      },
      options: [
        { fr: 'Moins de 5 heures', en: 'Less than 5 hours' },
        { fr: '5-10 heures', en: '5-10 hours' },
        { fr: '10-20 heures', en: '10-20 hours' },
        { fr: 'Plus de 20 heures', en: 'More than 20 hours' }
      ],
      correctAnswer: 0
    },
    {
      id: '3',
      question: {
        fr: 'Quel est votre objectif principal pour ce cours ?',
        en: 'What is your main goal for this course?'
      },
      options: [
        { fr: 'Apprendre les bases', en: 'Learn the basics' },
        { fr: 'Améliorer mes compétences existantes', en: 'Improve my existing skills' },
        { fr: 'Changer de carrière', en: 'Career change' },
        { fr: 'Certification professionnelle', en: 'Professional certification' }
      ],
      correctAnswer: 0
    }
  ];

  useEffect(() => {
    if (!isComplete && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeRemaining, isComplete]);

  const handleAnswer = (answerIndex: number) => {
    setAnswers({ ...answers, [currentQuestion]: answerIndex });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    // Calculate score and recommendation
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] !== undefined) {
        totalScore += answers[index] + 1; // 1-4 scale
      }
    });

    const averageScore = totalScore / questions.length;
    let recommendation = 'beginner';
    
    if (averageScore >= 3.5) {
      recommendation = 'advanced';
    } else if (averageScore >= 2.5) {
      recommendation = 'intermediate';
    }

    setScore(Math.round((totalScore / (questions.length * 4)) * 100));
    setLevelRecommendation(recommendation);
    setIsComplete(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const t = {
    title: language === 'fr' ? 'Test de Diagnostic IA' : 'AI Diagnostic Test',
    subtitle: language === 'fr' 
      ? 'Évaluez votre niveau et obtenez des recommandations personnalisées'
      : 'Assess your level and get personalized recommendations',
    selectCourse: language === 'fr' ? 'Sélectionnez un cours' : 'Select a Course',
    start: language === 'fr' ? 'Commencer le test' : 'Start Test',
    question: language === 'fr' ? 'Question' : 'Question',
    of: language === 'fr' ? 'sur' : 'of',
    timeRemaining: language === 'fr' ? 'Temps restant' : 'Time Remaining',
    next: language === 'fr' ? 'Suivant' : 'Next',
    previous: language === 'fr' ? 'Précédent' : 'Previous',
    submit: language === 'fr' ? 'Soumettre' : 'Submit',
    results: language === 'fr' ? 'Résultats du Diagnostic' : 'Diagnostic Results',
    yourScore: language === 'fr' ? 'Votre Score' : 'Your Score',
    recommendation: language === 'fr' ? 'Recommandation' : 'Recommendation',
    level: language === 'fr' ? 'Niveau recommandé' : 'Recommended Level',
    beginner: language === 'fr' ? 'Débutant' : 'Beginner',
    intermediate: language === 'fr' ? 'Intermédiaire' : 'Intermediate',
    advanced: language === 'fr' ? 'Avancé' : 'Advanced',
    viewCourses: language === 'fr' ? 'Voir les cours recommandés' : 'View Recommended Courses',
    backToHome: language === 'fr' ? 'Retour à l\'accueil' : 'Back to Home',
  };

  if (!selectedCourse && !isComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Brain size={48} />
              <h1 className="text-5xl font-bold">{t.title}</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl">{t.subtitle}</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{t.selectCourse}</h2>
            <div className="space-y-3">
              {coursesData.map((course) => (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course.id)}
                  className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {course.name[language]}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {course.description[language]}
                    </p>
                  </div>
                  <ArrowRight className="text-blue-600" size={20} />
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">{t.results}</h1>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
              <h2 className="text-3xl font-bold mb-2">{t.yourScore}</h2>
              <div className="text-6xl font-bold text-blue-600 mb-4">{score}%</div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-2">{t.recommendation}</h3>
              <p className="text-lg">
                <span className="font-semibold">{t.level}:</span>{' '}
                {levelRecommendation === 'beginner' && t.beginner}
                {levelRecommendation === 'intermediate' && t.intermediate}
                {levelRecommendation === 'advanced' && t.advanced}
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href={`/courses?level=${levelRecommendation}`}
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t.viewCourses}
              </Link>
              <Link
                href="/"
                className="block w-full border-2 border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                {t.backToHome}
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <BookOpen className="text-blue-600" size={24} />
              <div>
                <h2 className="font-semibold text-gray-900">
                  {t.question} {currentQuestion + 1} {t.of} {questions.length}
                </h2>
                <p className="text-sm text-gray-600">
                  {coursesData.find(c => c.id === selectedCourse)?.name[language]}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-red-600">
              <Clock size={20} />
              <span className="font-semibold">{formatTime(timeRemaining)}</span>
            </div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            {currentQ.question[language]}
          </h3>

          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  selectedAnswer === index
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedAnswer === index && (
                      <div className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="font-medium">{option[language]}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.previous}
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? t.submit : t.next}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

