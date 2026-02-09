"use client"
import React from 'react'
import Link from 'next/link'
import { BrainCircuit, Timer, Languages, PenTool, ArrowRight } from 'lucide-react'

export default function VisitorPortal() {
  const features = [
    { 
      icon: <BrainCircuit className="text-blue-500" />, 
      title: "Adaptive Logic", 
      desc: "Our engine maps your technical path dynamically, skipping what you already know." 
    },
    { 
      icon: <Languages className="text-blue-500" />, 
      title: "Bilingual Mapping", 
      desc: "Fluency audit between English & French technical terms to eliminate friction." 
    },
    { 
      icon: <PenTool className="text-blue-500" />, 
      title: "Analog Bridge", 
      desc: "Proprietary module that digitizes your handwritten assessments into your profile." 
    }
  ]

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-500 rotate-45"></div>
          </div>
          <span className="font-black text-xl tracking-tighter uppercase text-slate-900">Cobel <span className="text-blue-600">LMS</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-black uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-blue-600 transition-colors">Methodology</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Curriculum</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Enterprise</a>
        </div>
        <Link href="/admin" className="bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-100">
          Console Access
        </Link>
      </nav>

      {/* HERO SECTION */}
      <main className="px-10 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100">
              Technical Innovation // 2026
            </span>
            <h1 className="text-7xl font-black text-slate-900 leading-[0.9] mt-6 italic uppercase">
              Training at the <br/><span className="text-blue-600">Speed of Thought.</span>
            </h1>
            <p className="text-slate-500 mt-8 text-lg font-medium leading-relaxed max-w-md">
              Solving the technical problem of knowledge gaps and bilingual friction through 
              <span className="text-slate-900 font-bold"> Temporal Optimization</span> and 
              <span className="text-slate-900 font-bold"> Dynamic Path Mapping.</span>
            </p>
            <div className="flex gap-4 mt-10">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-sm flex items-center gap-3 hover:bg-slate-900 transition-all group">
                Start Diagnostic <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-100 aspect-square rounded-[4rem] overflow-hidden relative group">
               <div className="absolute inset-0 flex items-center justify-center">
                  <Timer size={200} className="text-white/50 animate-pulse" />
               </div>
               {/* Decorative floating elements */}
               <div className="absolute top-10 right-10 bg-white p-6 rounded-3xl shadow-2xl animate-bounce">
                  <p className="text-[10px] font-black text-blue-600 uppercase mb-1">Success Rate</p>
                  <p className="text-2xl font-black">98.4%</p>
               </div>
            </div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <section className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="group">
              <div className="mb-6 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase italic mb-4">{f.title}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}