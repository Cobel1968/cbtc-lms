"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BookOpen, Clock, Zap, ChevronRight, Menu, ArrowLeft, LogOut, Home } from 'lucide-react'

export default function CurriculumPage() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const modules = [
    { id: 1, title: 'Technical Fundamentals', duration: '2 Weeks', type: 'CORE', path: '/modules/fundamentals' },
    { id: 2, title: 'Bilingual Technical Fluency', duration: '3 Weeks', type: 'ADAPTIVE', path: '/modules/fluency' },
    { id: 3, title: 'Applied Vocational Logic', duration: '4 Weeks', type: 'OPTIMIZATION', path: '/modules/logic' }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* RESTORED LOGO HEADER */}
      <nav className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
             <img src="/logo.png" alt="Cobel Logo" className="h-10 w-auto" onerror="this.style.display='none'"/>
             <div className="leading-none">
                <span className="font-black text-xl tracking-tighter block">COBEL</span>
                <span className="text-[10px] font-bold text-blue-600 uppercase">Business Training Center</span>
             </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
          <button onClick={() => router.back()} className="hidden md:flex items-center gap-2 text-slate-400 font-bold text-xs hover:text-slate-600">
            <ArrowLeft size={14} /> BACK
          </button>
          
          <button onClick={() => setIsMenuOpen(true)} className="flex items-center gap-2 text-slate-500 font-bold text-xs hover:text-blue-600">
            <Menu size={16} /> MENU
          </button>

          <Link href="/register" className="bg-[#003366] text-white px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-blue-800 transition shadow-lg shadow-blue-100">
            NEXT <ChevronRight size={16} />
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-16 px-6">
        <header className="mb-12">
          <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">Adaptive <br/>Curriculum</h1>
          <p className="text-slate-400 font-bold text-sm mt-4 tracking-wide uppercase">Powered by Cobel AI Temporal Optimization</p>
        </header>

        <div className="space-y-6">
          {modules.map((m) => (
            <div key={m.id} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center hover:shadow-xl hover:border-blue-100 transition-all group">
              <div className="flex items-center gap-6">
                <div className="bg-blue-50 p-5 rounded-3xl text-blue-600 group-hover:bg-[#003366] group-hover:text-white transition-all">
                  <BookOpen size={32} />
                </div>
                <div>
                  <h3 className="font-black text-2xl text-slate-850 tracking-tight">{m.title}</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-[10px] text-slate-400 font-black uppercase tracking-widest">
                      <Clock size={14} /> {m.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] text-blue-600 font-black uppercase tracking-widest">
                      <Zap size={14} /> {m.type}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => router.push(m.path)}
                className="mt-6 md:mt-0 bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#003366] transition-all shadow-lg"
              >
                PREVIEW
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SIDEBAR MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex justify-end">
          <div className="w-80 bg-white h-full p-10 shadow-2xl flex flex-col">
            <button onClick={() => setIsMenuOpen(false)} className="self-end text-xs font-black text-slate-300 hover:text-red-500 uppercase mb-12">Close</button>
            <nav className="space-y-8">
              <Link href="/dashboard" className="flex items-center gap-4 font-black text-2xl text-slate-900 hover:text-blue-600 transition">DASHBOARD</Link>
              <Link href="/reports" className="flex items-center gap-4 font-black text-2xl text-slate-900 hover:text-blue-600 transition">REPORTS</Link>
              <Link href="/settings" className="flex items-center gap-4 font-black text-2xl text-slate-900 hover:text-blue-600 transition">SETTINGS</Link>
              <hr className="border-slate-100" />
              <Link href="/" className="flex items-center gap-2 font-bold text-slate-400 hover:text-slate-900 transition tracking-widest text-xs uppercase"><Home size={14}/> Exit to Home</Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}