"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { Languages, ShieldAlert, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react'

export default function ModuleOneAssessment() {
  const [lang, setLang] = useState('fr') // Default to French for regional context
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  
  const question = {
    id: "m1-q1",
    en: "What is the primary function of a Pressure Relief Valve in a hydraulic circuit?",
    fr: "Quelle est la fonction principale d'une soupape de décharge dans un circuit hydraulique?",
    options: [
      { id: "a", en: "To increase fluid velocity", fr: "Augmenter la vitesse du fluide" },
      { id: "b", en: "To limit maximum system pressure", fr: "Limiter la pression maximale du système" },
      { id: "c", en: "To filter contaminants", fr: "Filtrer les contaminants" }
    ],
    correct: "b"
  }

  return (
    <div className="min-h-screen bg-cbtc-slate font-sans text-cbtc-navy">
      <TopNav />
      
      <main className="max-w-4xl mx-auto py-16 px-6">
        {/* PROGRESS HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-cbtc-blue text-[10px] font-black uppercase tracking-[0.4em]">Formative Assessment 01</h2>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter">Safety & Baseline Logic</h1>
          </div>
          <button 
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl hover:border-cbtc-magenta transition-all"
          >
            <Languages size={16} className="text-cbtc-magenta" />
            <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'en' ? 'Switch to French' : 'Passer à lAnglais'}</span>
          </button>
        </div>

        {/* QUESTION CARD */}
        <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-cbtc-yellow">
            <ShieldAlert size={120} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 text-cbtc-blue">
               <HelpCircle size={20} />
               <span className="text-[10px] font-black uppercase tracking-widest">Question 01 // Technical Mapping</span>
            </div>

            <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-tight mb-10 max-w-2xl">
              {lang === 'en' ? question.en : question.fr}
            </h3>

            <div className="space-y-4">
              {question.options.map((opt) => (
                <button 
                  key={opt.id}
                  onClick={() => setSelectedAnswer(opt.id)}
                  className={`w-full p-6 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${selectedAnswer === opt.id ? 'border-cbtc-blue bg-blue-50/50' : 'border-slate-50 hover:border-slate-200'}`}
                >
                  <span className="font-bold text-sm">{lang === 'en' ? opt.en : opt.fr}</span>
                  {selectedAnswer === opt.id && <CheckCircle2 className="text-cbtc-blue" size={20} />}
                </button>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-50 flex justify-between items-center">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                * This response will be cross-referenced with your Handwriting scan.
              </p>
              <button 
                className={`px-10 py-5 rounded-2xl font-black uppercase text-xs flex items-center gap-3 transition-all ${selectedAnswer ? 'bg-cbtc-navy text-white hover:bg-cbtc-blue' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}
              >
                Validate Answer <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}