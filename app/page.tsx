"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Timer } from 'lucide-react'

export default function PerfectScalePage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 flex flex-col overflow-x-hidden">
      
      {/* HEADER - Kept at 100% for readability but tightened */}
      <nav className="flex justify-between items-center px-12 py-6 bg-white sticky top-0 z-50 border-b border-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#111827] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-500 rotate-45"></div>
          </div>
          <span className="font-black text-xl tracking-tighter uppercase text-slate-900">
            Cobel <span className="text-blue-600">LMS</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <a href="#" className="hover:text-blue-600 transition-colors">Methodology</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Curriculum</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Enterprise</a>
        </div>

        <Link href="/admin" className="bg-[#111827] text-white px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
          Console Access
        </Link>
      </nav>

      {/* MAIN CONTENT - SCALED DOWN BY 10% */}
      <main className="flex-1 flex items-center justify-center">
        <div style={{ transform: 'scale(0.9)', transformOrigin: 'center center' }} className="w-full max-w-7xl px-12 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border border-blue-100 inline-block">
                Technical Innovation // 2026
              </span>
              
              <h1 className="text-[65px] font-black text-slate-900 leading-[0.85] uppercase italic tracking-tighter">
                Training <br/> at the <br/>
                <span className="text-blue-600">Speed of <br/> Thought.</span>
              </h1>

              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                Solving the technical problem of knowledge gaps and bilingual friction through 
                <span className="text-slate-900 font-bold"> Temporal Optimization</span> and 
                <span className="text-slate-900 font-bold"> Dynamic Path Mapping.</span>
              </p>

              <div className="pt-4">
                <Link href="/diagnostic" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs flex items-center gap-3 w-fit hover:bg-[#111827] transition-all group">
                  Start Diagnostic <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* GRAPHIC AREA */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="bg-slate-50 w-[450px] aspect-square rounded-[4rem] flex items-center justify-center relative overflow-hidden">
                 <Timer size={180} className="text-white opacity-40 animate-pulse" />
                 <div className="absolute top-10 right-10 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-50">
                    <p className="text-blue-600 text-[9px] font-black uppercase tracking-widest mb-1">Success Rate</p>
                    <p className="text-3xl font-black text-slate-900 tracking-tighter italic">98.4%</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
