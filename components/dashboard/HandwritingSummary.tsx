"use client"
import React from 'react'
import { Printer, Eye, Lock, FileText, Mic } from 'lucide-react'

export default function HandwritingSummary({ studentData }: { studentData: any }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <FileText className="text-cbtc-navy" size={20} />
          <h3 className="text-sm font-black uppercase italic text-cbtc-navy">Analog-to-Digital Accuracy Summary</h3>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handlePrint}
            className="p-2 hover:bg-slate-50 text-slate-400 hover:text-cbtc-blue transition-colors"
            title="Print Report"
          >
            <Printer size={18} />
          </button>
          <div className="flex items-center gap-1 px-3 py-1 bg-amber-50 rounded-full border border-amber-100">
            <Lock size={12} className="text-amber-600" />
            <span className="text-[8px] font-black text-amber-600 uppercase">Read Only</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Written Accuracy (Handwriting OCR) */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Written Technical Accuracy</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-cbtc-navy">88%</span>
            <span className="text-[8px] font-bold text-green-600 uppercase">High Confidence</span>
          </div>
        </div>

        {/* Vocal Accuracy */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Vocal Technical Fluency</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-cbtc-magenta">92%</span>
            <span className="text-[8px] font-bold text-cbtc-blue uppercase">Bilingual Proficient</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Extracted Bilingual Terms</p>
        <div className="flex flex-wrap gap-2">
          {["Distributeur", "Directional Valve", "Vérin", "Actuator"].map(term => (
            <span key={term} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-cbtc-navy">
              {term}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
