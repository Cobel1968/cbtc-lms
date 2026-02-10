"use client"
import React, { useEffect, useState } from 'react'
import TopNav from '@/components/TopNav'
import { supabase } from '@/lib/supabase'
import { Users, Clock, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react'

export default function EmployerDashboard() {
  const [stats, setStats] = useState({ teamSize: 0, daysSaved: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchEmployerData() {
      // Fetching real metrics from the Cobel AI Engine
      const { data, error } = await supabase
        .from('user_progress')
        .select('optimized_days')

      if (!error && data) {
        const totalSaved = data.reduce((acc, curr) => acc + (curr.optimized_days || 0), 0)
        setStats({
          teamSize: data.length,
          daysSaved: totalSaved
        })
      }
      setLoading(false)
    }
    fetchEmployerData()
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <TopNav />
      
      <main className="max-w-7xl mx-auto py-16 px-8">
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-4">
             <span className="h-[2px] w-8 bg-blue-600"></span>
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Partner Oversight</span>
          </div>
          <h1 className="text-6xl font-black uppercase tracking-tighter leading-[0.85] text-slate-900">
            Partner <br/>Portal
          </h1>
          <p className="mt-6 text-slate-500 font-medium max-w-md">
            Monitoring vocational ingestion and temporal optimization across your workforce.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Team Size Card */}
          <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col justify-between min-h-[200px]">
            <Users className="text-blue-600" size={24} />
            <div>
              <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-1">Enrolled Workforce</h3>
              <p className="text-5xl font-black tracking-tighter">{loading ? "..." : stats.teamSize}</p>
            </div>
          </div>

          {/* Time Optimized Card */}
          <div className="bg-[#003366] p-8 rounded-[32px] text-white flex flex-col justify-between min-h-[200px] shadow-xl shadow-blue-900/20">
            <Clock className="text-blue-300" size={24} />
            <div>
              <h3 className="font-black text-[10px] uppercase tracking-widest text-blue-200/60 mb-1">Temporal Gain</h3>
              <p className="text-5xl font-black tracking-tighter">{loading ? "..." : stats.daysSaved} <span className="text-lg">Days</span></p>
            </div>
          </div>

          {/* Efficiency Metric */}
          <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col justify-between min-h-[200px]">
            <BarChart3 className="text-slate-900" size={24} />
            <div>
              <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-1">Avg. Efficiency</h3>
              <p className="text-5xl font-black tracking-tighter">
                {stats.teamSize > 0 ? (stats.daysSaved / stats.teamSize).toFixed(1) : "0"}
              </p>
            </div>
          </div>

          {/* Quick Action */}
          <button className="group bg-white p-8 rounded-[32px] border-2 border-dashed border-slate-200 flex flex-col justify-between min-h-[200px] hover:border-blue-600 transition-all text-left">
            <ShieldCheck className="text-slate-300 group-hover:text-blue-600 transition" size={24} />
            <div>
              <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-2">New Onboarding</h3>
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase">
                Enrol Student <ArrowRight size={16} />
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  )
}