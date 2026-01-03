'use client'
import { Zap, Clock, CheckCircle, Languages, TrendingUp, Download } from 'lucide-react'

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#f8fafc] p-10">
      <header className="max-w-6xl mx-auto mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Jean's Learning Portal</h1>
          <p className="text-slate-500 font-medium italic">Cobel AI Engine: Optimized Path</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
          <div className="text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase">Speed Index</p>
            <p className="text-lg font-black text-indigo-600">1.4x</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase">Time Saved</p>
            <p className="text-lg font-black text-emerald-600">12h</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Feature 2: Dynamic Path Mapping */}
          <section className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp size={20} className="text-indigo-600" /> Path Mapping
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center"><CheckCircle className="mx-auto text-emerald-500" /><p className="text-[10px] font-bold mt-2">SOLAR BASICS</p></div>
              <div className="text-center"><CheckCircle className="mx-auto text-emerald-500" /><p className="text-[10px] font-bold mt-2">WIRING</p></div>
              <div className="text-center"><Zap className="mx-auto text-indigo-600" /><p className="text-[10px] font-bold mt-2 text-indigo-600">GRID MAP</p></div>
              <div className="text-center opacity-30"><Clock className="mx-auto" /><p className="text-[10px] font-bold mt-2">FINAL CERT</p></div>
            </div>
          </section>
        </div>

        {/* Feature 1 & 3: Bilingual & Temporal Optimization */}
        <div className="space-y-8">
          <section className="bg-indigo-900 text-white rounded-[32px] p-8">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Languages size={20}/> Technical Fluency</h3>
            <div className="text-xs font-bold text-indigo-200 uppercase tracking-widest">Bilingual Technical Terms Identified</div>
            <p className="text-2xl font-black mt-2">89% Accuracy</p>
          </section>
        </div>
      </div>
    </div>
  )
}