"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { Languages, Activity, CheckCircle, AlertCircle } from 'lucide-react'

export default function StudentFluencyMapping() {
  const technicalTerms = [
    { term: "Hydraulic Pump", fr: "Pompe Hydraulique", mastery: 95, status: "Verified" },
    { term: "Pressure Valve", fr: "Soupape de Pression", mastery: 40, status: "Review Required" },
    { term: "Circuit Breaker", fr: "Disjoncteur", mastery: 88, status: "Verified" }
  ]
}

  return (
    <div className="flex bg-[#F1F5F9] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 uppercase italic">Bilingual Vocational Mapping</h1>
          <p className="text-[#00629B] font-bold text-xs tracking-[0.3em] uppercase mt-2">Cobel AI Engine // Technical Fluency Audit</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fluency Overview */}
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200">
            <h2 className="font-black text-slate-800 uppercase mb-6 flex items-center gap-2">
              <Languages className="text-[#00629B]" /> Language Balance
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                  <span>English Technical (EN)</span>
                  <span>92%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-[#00629B] h-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                  <span>French Technical (FR)</span>
                  <span>64%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full" style={{ width: '64%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Term Audit Table */}
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden lg:col-span-2">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b">
                <tr className="text-[10px] font-black text-slate-400 uppercase">
                  <th className="p-6">Technical Term (EN)</th>
                  <th>Technical Term (FR)</th>
                  <th>Fluency Score</th>
                  <th className="p-6 text-right">Handwriting Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {technicalTerms.map((item, i) => (
                  <tr key={i} className="font-bold text-sm">
                    <td className="p-6 text-slate-800">{item.term}</td>
                    <td className="text-slate-500 italic">{item.fr}</td>
                    <td>
                       <span className={px-3 py-1 rounded-lg text-[10px] \}>
                         {item.mastery}% Mastery
                       </span>
                    </td>
                    <td className="p-6 text-right">
                      {item.status === "Verified" ? (
                        <CheckCircle size={18} className="text-green-500 inline" />
                      ) : (
                        <AlertCircle size={18} className="text-orange-500 inline" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
