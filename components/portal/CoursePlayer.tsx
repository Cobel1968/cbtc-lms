"use client"
import React, { useState } from 'react'
import { PlayCircle, FileText, Languages, ChevronRight } from 'lucide-react'

export default function CoursePlayer({ module }) {
  const [language, setLanguage] = useState<'en' | 'fr'>('en')

  if (!module) return <div className="p-8 text-slate-500">Select a module to begin your optimized path.</div>

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
      {/* 1. Video Placeholder */}
      <div className="aspect-video bg-slate-900 flex items-center justify-center text-white flex-col gap-4">
        <PlayCircle size={64} className="text-blue-500 animate-pulse" />
        <p className="text-slate-400 font-mono">Streaming: {module.title} (Bilingual Stream)</p>
      </div>

      {/* 2. Control Bar */}
      <div className="p-4 border-b bg-slate-50 flex justify-between items-center">
        <h2 className="font-bold text-slate-800">{module.title}</h2>
        <button 
          onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border shadow-sm text-sm font-bold hover:bg-blue-50 transition"
        >
          <Languages size={16} className="text-blue-600" />
          {language === 'en' ? 'Switch to French' : 'Passer à langlais'}
        </button>
      </div>

      {/* 3. Bilingual Transcript Area */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4 text-blue-600">
          <FileText size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">Technical Transcript</span>
        </div>
        <p className="text-slate-700 leading-relaxed">
          {language === 'en' ? (
            "In this lesson, we cover the proper use of a Multimeter to measure Voltage across a Circuit Breaker."
          ) : (
            "Dans cette leçon, nous couvrons l'utilisation correcte d'un Multimètre pour mesurer la Tension aux bornes d'un Disjoncteur."
          )}
        </p>
      </div>
    </div>
  )
}