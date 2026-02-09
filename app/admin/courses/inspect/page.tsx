"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { Database, Code, CheckCircle2, FlaskConical } from 'lucide-react'

export default function CourseInspector() {
  const activeCourse = {
    id: "C-101",
    title: "Advanced Hydraulics",
    bilingualMapping: [
      { en: "Actuator", fr: "Actionneur", weight: 0.8 },
      { en: "Fluid Reservoir", fr: "Réservoir de Fluide", weight: 0.5 },
      { en: "Pressure Gauge", fr: "Manomètre", weight: 0.9 }
    ],
    density: "High",
    milestones: ["Diagnostic", "Bilingual Audit", "Temporal Optimization"]
  }

}

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 uppercase italic">Data Inspector</h1>
          <p className="text-[#00629B] font-bold text-xs tracking-widest uppercase mt-2">Verifying Engine Assets // Abel C. Innovation</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl">
            <h3 className="font-black uppercase text-sm text-blue-400 mb-6 flex items-center gap-2">
              <Code size={18} /> JSON Metadata Schema
            </h3>
            <pre className="text-[10px] font-mono opacity-80 bg-black/30 p-4 rounded-xl">
{{
  "id": "",
  "logic": "Adaptive",
  "terms": ,
  "bridge": "Active"
}}
            </pre>
            <div className="mt-8 space-y-4">
               <div className="flex items-center gap-3">
                 <CheckCircle2 size={16} className="text-green-400" />
                 <span className="text-xs font-bold uppercase tracking-tight">Bilingual Keys Verified</span>
               </div>
               <div className="flex items-center gap-3">
                 <FlaskConical size={16} className="text-blue-400" />
                 <span className="text-xs font-bold uppercase tracking-tight">Adaptive Logic Mapped</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
            <h3 className="font-black text-slate-900 uppercase mb-6 flex items-center gap-2">
              <Database className="text-[#00629B]" /> Handwriting Bridge Keywords
            </h3>
            <table className="w-full">
              <thead>
                <tr className="text-[10px] font-black text-slate-400 uppercase border-b">
                  <th className="pb-4">Target Keyword (EN)</th>
                  <th className="pb-4">Recognition Match (FR)</th>
                  <th className="pb-4 text-right">Difficulty Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {activeCourse.bilingualMapping.map((term, i) => (
                  <tr key={i} className="text-sm font-bold">
                    <td className="py-4 text-slate-800">{term.en}</td>
                    <td className="py-4 text-[#00629B] italic">{term.fr}</td>
                    <td className="py-4 text-right font-mono text-xs text-slate-400">{term.weight}</td>
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
