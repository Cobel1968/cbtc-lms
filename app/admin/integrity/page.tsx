"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { BarChart3, PieChart, Zap, Target, TrendingUp } from 'lucide-react'

export default function SystemIntegrity() {
  const metrics = {
    throughput: "+22%",
    roi: ",500 Saved/mo",
    frictionLevel: "Low (4%)",
    activeCertifications: 128
  }

}

  return (
    <div className="flex bg-[#F1F5F9] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black text-slate-900 uppercase italic">System Integrity</h1>
            <p className="text-[#00629B] font-bold text-xs tracking-widest uppercase mt-2">Administrator Oversight // Manufacturing & QA Loop</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-[10px] font-black text-slate-400 uppercase block">Engine Health</span>
            <span className="text-green-500 font-bold text-sm flex items-center gap-2">
              <Zap size={14} fill="currentColor" /> 99.8% Optimized
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <MetricCard title="Training Throughput" value={metrics.throughput} icon={<TrendingUp className="text-blue-600" />} />
          <MetricCard title="Est. ROI (Time Saved)" value={metrics.roi} icon={<BarChart3 className="text-green-600" />} />
          <MetricCard title="Bilingual Friction" value={metrics.frictionLevel} icon={<Target className="text-orange-600" />} />
          <MetricCard title="Certificates Issued" value={metrics.activeCertifications} icon={<PieChart className="text-purple-600" />} />
        </div>

        {/* ANALYTICS SECTION */}
        <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100">
          <h3 className="text-xl font-black text-slate-900 uppercase italic mb-8">Integrated Manufacturing Performance</h3>
          <div className="h-64 flex items-end gap-4 px-4">
            {[60, 85, 40, 95, 70, 90, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-slate-100 rounded-t-2xl relative group hover:bg-blue-600 transition-all">
                <div style={{ height: \% }} className="bg-slate-900 rounded-t-2xl group-hover:bg-blue-500 transition-all"></div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-black text-slate-400 uppercase">Mod \</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
            Module Completion Speed (AI-Optimized vs Standard)
          </p>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
}

  return (
    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4">{icon}</div>
      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">{title}</p>
      <p className="text-2xl font-black text-slate-900">{value}</p>
    </div>
  )
}
