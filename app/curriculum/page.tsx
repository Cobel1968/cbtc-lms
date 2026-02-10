"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import TopNav from '@/components/TopNav'
import { BookOpen, Clock, Zap, ChevronRight, Menu, ArrowLeft, LogOut } from 'lucide-react'

export default function CurriculumPage() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const modules = [
    { id: 1, title: 'Technical Fundamentals', duration: '2 Weeks', type: 'Core', path: '/modules/fundamentals' },
    { id: 2, title: 'Bilingual Technical Fluency', duration: '3 Weeks', type: 'Adaptive', path: '/modules/fluency' },
    { id: 3, title: 'Applied Vocational Logic', duration: '4 Weeks', type: 'Optimization', path: '/modules/logic' }
  ]

  const handlePreview = (title: string) => {
    alert(`Initializing Preview for: ${title}\nAI Engine calculating temporal path...`)
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Dynamic Header based on your screenshot */}
      <nav className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="font-black text-xl tracking-tighter">COBEL <span className="text-blue-600 font-medium text-sm block -mt-1">BUSINESS TRAINING CENTER</span></div>
        </div>
        
        <div className="flex items-center gap-6">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-slate-400 font-bold text-xs hover:text-slate-600 transition">
            <ArrowLeft size={16} /> BACK
          </button>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center gap-2 text-slate-500 font-bold text-xs hover:text-blue-600 transition">
            <Menu size={16} /> MENU
          </button>

          <button onClick={() => router.push('/register')} className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            NEXT <ChevronRight size={16} />
          </button>

          <button onClick={() => router.push('/')} className="flex items-center gap-2 text-slate-400 font-bold text-xs hover:text-red-600 transition">
            <LogOut size={16} /> EXIT
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Adaptive Curriculum</h1>
          <p className="text-slate-500 font-medium">Powered by Cobel AI Temporal Optimization</p>
        </header>

        <div className="space-y-4">
          {modules.map((m) => (
            <div key={m.id} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center hover:border-blue-200 transition-all group">
              <div className="flex items-center gap-6">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-slate-850">{m.title}</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase tracking-wider">
                      <Clock size={14} /> {m.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-blue-600 font-black uppercase tracking-wider">
                      <Zap size={14} /> {m.type}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handlePreview(m.title)}
                className="mt-4 md:mt-0 bg-slate-900 text-white px-10 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95"
              >
                PREVIEW
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Menu Modal Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] flex justify-end">
          <div className="w-64 bg-white h-full p-8 shadow-2xl">
            <button onClick={() => setIsMenuOpen(false)} className="text-xs font-bold text-slate-400 mb-8 uppercase">Close Menu</button>
            <nav className="space-y-6">
              <a href="#" className="block font-black text-slate-900 hover:text-blue-600">DASHBOARD</a>
              <a href="#" className="block font-black text-slate-900 hover:text-blue-600">REPORTS</a>
              <a href="#" className="block font-black text-slate-900 hover:text-blue-600">SETTINGS</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}