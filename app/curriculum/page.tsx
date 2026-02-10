"use client"
import React from 'react'
import TopNav from '@/components/TopNav'
import { BookOpen, Clock, Globe, Zap } from 'lucide-react'

export default function CurriculumPage() {
  const modules = [
    { id: 1, title: 'Technical Fundamentals', duration: '2 Weeks', type: 'Core' },
    { id: 2, title: 'Bilingual Technical Fluency', duration: '3 Weeks', type: 'Adaptive' },
    { id: 3, title: 'Applied Vocational Logic', duration: '4 Weeks', type: 'Optimization' }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Adaptive Curriculum</h1>
          <p className="text-slate-500 font-medium">Powered by Cobel AI Temporal Optimization</p>
        </div>

        <div className="grid gap-4">
          {modules.map((m) => (
            <div key={m.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex justify-between items-center hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-2xl text-blue-700">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{m.title}</h3>
                  <div className="flex gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-bold uppercase">
                      <Clock size={12} /> {m.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-blue-600 font-bold uppercase">
                      <Zap size={12} /> {m.type}
                    </span>
                  </div>
                </div>
              </div>
              <button className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold">PREVIEW</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}