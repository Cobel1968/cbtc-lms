"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { CheckCircle2, Zap, Clock, BookOpen } from 'lucide-react'

export default function DiagnosticPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="max-w-4xl mx-auto py-12 px-6">
        {/* PROGRESS BAR */}
        <div className="flex justify-between mb-12">
           {[1, 2, 3].map((i) => (
             <div key={i} className={`h-1 flex-1 mx-2 rounded-full ${step >= i ? 'bg-blue-600' : 'bg-slate-200'}`} />
           ))}
        </div>

        <div className="bg-white rounded-[2.5rem] p-12 shadow-sm border border-slate-100">
          {step === 1 && (
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">Phase 01: Baseline Extraction</span>
                <h2 className="text-3xl font-black text-slate-900 uppercase italic">Technical Background</h2>
              </div>
              
              <div className="grid gap-4">
                <button onClick={() => setStep(2)} className="w-full text-left p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50/30 transition-all flex justify-between items-center group">
                  <div>
                    <p className="font-black text-slate-900 uppercase text-sm italic">Industrial Manufacturing</p>
                    <p className="text-xs text-slate-500 font-medium">QC/QA, SOPs, and Safety Protocols</p>
                  </div>
                  <Zap size={20} className="text-slate-200 group-hover:text-blue-600" />
                </button>

                <button onClick={() => setStep(2)} className="w-full text-left p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50/30 transition-all flex justify-between items-center group">
                  <div>
                    <p className="font-black text-slate-900 uppercase text-sm italic">Oil & Gas / Hydraulics</p>
                    <p className="text-xs text-slate-500 font-medium">Mechanical Maintenance & Risk Assessment</p>
                  </div>
                  <Zap size={20} className="text-slate-200 group-hover:text-blue-600" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <Clock size={32} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 uppercase italic">Calculating Dynamic Path...</h2>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">Our engine is cross-referencing your background with the curriculum density to optimize your timeframe.</p>
              <button onClick={() => setStep(3)} className="text-blue-600 font-black uppercase text-[10px] tracking-widest pt-4">Simulate Completion</button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <div className="bg-green-50 border border-green-100 p-6 rounded-3xl flex items-center gap-4">
                <CheckCircle2 className="text-green-600" size={32} />
                <div>
                  <h3 className="font-black text-green-900 uppercase italic text-sm">Path Mapping Successful</h3>
                  <p className="text-green-700 text-xs">Estimated Time Saved: <span className="font-bold">14.5 Hours</span></p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Technical Fluency</p>
                    <p className="text-xl font-black text-slate-900 italic">B1 (French Inter.)</p>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Curriculum Density</p>
                    <p className="text-xl font-black text-slate-900 italic">Medium-Low</p>
                 </div>
              </div>

              <Link href="/student" className="block w-full bg-slate-900 text-white text-center py-5 rounded-2xl font-black uppercase text-sm hover:bg-blue-600 transition-all">
                Enter Optimized Curriculum
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}