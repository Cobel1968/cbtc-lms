'use client';
import Link from 'next/link';
import { Camera, LayoutDashboard, Zap, Database } from 'lucide-react';

export default function MenuPage() {
  const cards = [
    { 
      title: "Dashboard", 
      desc: "Analyse de la densité du curriculum et ECTS", 
      icon: LayoutDashboard, 
      href: "/dashboard", 
      color: "bg-slate-900" 
    },
    { 
      title: "Scan OCR", 
      desc: "Pont Pédagogique (Analyse Manuscrite Feature 4)", 
      icon: Camera, 
      href: "/handwriting-bridge", 
      color: "bg-blue-600" 
    },
    { 
      title: "Forecasting", 
      desc: "Optimisation Temporelle & Prédictions", 
      icon: Zap, 
      href: "/forecasting", 
      color: "bg-amber-500" 
    },
    { 
      title: "Modules", 
      desc: "Gestion des 70 modules bilingues injectés", 
      icon: Database, 
      href: "/modules", 
      color: "bg-slate-700" 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-8">
      <header className="max-w-4xl w-full mb-12 text-center">
        <h1 className="text-4xl font-black text-slate-800 tracking-tight uppercase">
          Cobel Engine Hub
        </h1>
        <p className="text-slate-500 font-medium mt-2">
          Interface de gestion de l'innovation pédagogique
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="group">
            <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full relative overflow-hidden">
              <div className={\ w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform}>
                <card.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {card.desc}
              </p>
              <div className="flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest">
                Accéder au module 
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
