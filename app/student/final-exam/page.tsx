"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { Award, Lock, ShieldCheck, ChevronRight, FileText, CheckCircle2 } from 'lucide-react'

export default function SummativeGateway() {
  // Logic: In a real app, this would be fetched from the Trainer's ingestion database
  const [modulesCompleted, setModulesCompleted] = useState(8); 
  const isUnlocked = modulesCompleted === 8;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      <TopNav />
      
      <main className="max-w-4xl mx-auto py-20 px-8 text-center">
        <div className="mb-12">
          <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200">
            <Award className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-black uppercase italic tracking-tighter">Summative <br/><span className="text-blue-600">Certification Exam</span></h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-4">Abel C. Vocational Logic // 2026</p>
        </div>

        {/* LOCKER INTERFACE */}
        <div className="bg-white rounded-[3.5rem] p-12 border border-slate-100 shadow-2xl space-y-8 relative overflow-hidden">
          {!isUnlocked && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex items-center justify-center">
              <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center">
                <Lock size={32} className="text-blue-500 mb-4" />
                <h3 className="text-lg font-black uppercase italic">Gateway Locked</h3>
                <p className="text-[10px] font-medium opacity-70 mt-2 uppercase tracking-widest">
                  {8 - modulesCompleted} Formative Assessments Pending Trainer Scan
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 text-left">
            <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase italic">Integrity Protocol</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                  This summative exam covers all 8 modules. Once started, the session is timed and your bilingual technical fluency will be monitored.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase italic">Trainer Ingestion Verification</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                  System has confirmed {modulesCompleted}/8 formative scans. Your Analog-to-Digital profile is 100% synchronized.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-50">
             <button 
              disabled={!isUnlocked}
              className={`w-full py-6 rounded-[2rem] font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 transition-all ${isUnlocked ? 'bg-blue-600 text-white hover:bg-slate-900 shadow-xl' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
             >
               Begin Summative Assessment <ChevronRight size={20} />
             </button>
             <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-6 italic">
               Completion of this exam triggers Certificate Generation.
             </p>
          </div>
        </div>
      </main>
    </div>
  )
}