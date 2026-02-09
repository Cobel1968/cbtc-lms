"use client"
import React from 'react'
import { AlertCircle, CreditCard, Clock } from 'lucide-react'

export default function FinancialOversight({ metrics }: { metrics: any }) {
  if (!metrics.isOvertime) return null;

  return (
    <div className="mt-4 p-6 bg-red-50 border border-red-100 rounded-3xl animate-in slide-in-from-bottom-2">
      <div className="flex items-center gap-3 mb-4">
        <AlertCircle className="text-red-500" size={20} />
        <h3 className="text-[10px] font-black uppercase text-red-600 tracking-widest">Temporal Overtime Detected</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-slate-400" />
          <span className="text-[10px] font-bold text-slate-500 uppercase">Est. Exceedance:</span>
          <span className="text-sm font-black text-cbtc-navy">+{metrics.currentPrediction - metrics.standardDuration}h</span>
        </div>
        
        <div className="flex items-center gap-2">
          <CreditCard size={14} className="text-slate-400" />
          <span className="text-[10px] font-bold text-slate-500 uppercase">Pro-Rata Due:</span>
          <span className="text-sm font-black text-red-600"></span>
        </div>
      </div>
      
      <p className="mt-4 text-[8px] font-medium text-red-400 italic">
        *This report is Read-Only. Billing is generated based on the current Adaptive Path Prediction.
      </p>
    </div>
  )
}
