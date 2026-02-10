"use client"
import React, { useEffect, useState } from 'react'
import TopNav from '@/components/TopNav'
import { supabase } from '@/lib/supabase'
import { Users, Clock, BarChart3, TrendingUp } from 'lucide-react'

export default function EmployerDashboard() {
  const [stats, setStats] = useState({ teamSize: 0, daysSaved: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getMetrics() {
      try {
        const { data, error } = await supabase.from('user_progress').select('*')
        if (!error && data) {
          const total = data.reduce((acc, curr) => acc + (curr.optimized_days || 0), 0)
          setStats({ teamSize: data.length, daysSaved: total })
        }
      } catch (err) {
        console.error("Dashboard Load Error:", err)
      } finally {
        setLoading(false)
      }
    }
    getMetrics()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <TopNav />
      <main className="max-w-7xl mx-auto py-12 px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-[#003366]">Partner Dashboard</h1>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Real-time Vocational Metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
            <Users className="text-blue-600 mb-4" size={24} />
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Active Students</p>
            <p className="text-4xl font-black mt-2">{loading ? "..." : stats.teamSize}</p>
          </div>

          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
            <Clock className="text-green-600 mb-4" size={24} />
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Temporal Savings</p>
            <p className="text-4xl font-black mt-2">{loading ? "..." : stats.daysSaved} Days</p>
          </div>

          <div className="bg-[#003366] p-8 rounded-[32px] text-white shadow-xl shadow-blue-900/20">
            <TrendingUp className="text-blue-300 mb-4" size={24} />
            <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest">Optimization Rate</p>
            <p className="text-4xl font-black mt-2">18.4%</p>
          </div>
        </div>
        
        <div className="mt-12 p-12 bg-white rounded-[40px] border border-slate-100 text-center">
          <p className="text-slate-400 text-sm italic font-medium">Curriculum selection and bilingual mapping results will appear here.</p>
        </div>
      </main>
    </div>
  )
}