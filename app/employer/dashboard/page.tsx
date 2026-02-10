"use client"
import React, { useEffect, useState } from 'react'
import TopNav from '@/components/TopNav'
import { supabase } from '@/lib/supabase'
import { Users, Clock, CheckCircle, ArrowUpRight, Search } from 'lucide-react'

export default function EmployerDashboard() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStudents() {
      // Fetching students and their Temporal Optimization status
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && data) {
        setStudents(data)
      }
      setLoading(false)
    }
    fetchStudents()
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <TopNav />
      
      <main className="max-w-7xl mx-auto py-12 px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none text-[#003366]">Partner Portal</h1>
            <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mt-4">Corporate Oversight: Cobel AI Engine</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-slate-50 text-slate-600 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition border border-slate-100">Export Report</button>
            <button className="bg-[#003366] text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-800 transition shadow-lg flex items-center gap-2">
              Enrol Student <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
            <Users className="text-blue-600 mb-6" size={24} />
            <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Total Enrolments</h3>
            <p className="text-4xl font-black mt-1">{loading ? "..." : students.length}</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
            <Clock className="text-green-600 mb-6" size={24} />
            <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Time Optimized</h3>
            <p className="text-4xl font-black mt-1">
                {students.reduce((acc, curr) => acc + (curr.optimized_days || 0), 0)} Days
            </p>
          </div>
          <div className="bg-[#003366] p-8 rounded-[32px] text-white shadow-xl shadow-blue-900/10">
            <CheckCircle className="text-blue-300 mb-6" size={24} />
            <h3 className="font-black text-[10px] uppercase tracking-widest text-blue-200/50">Avg. Mastery</h3>
            <p className="text-4xl font-black mt-1">88%</p>
          </div>
        </div>

        {/* Student List Table */}
        <div className="bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
            <h2 className="font-black text-sm uppercase tracking-widest">Active Workforce Training</h2>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-slate-300" size={16} />
              <input type="text" placeholder="Search students..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-50">
                  <th className="px-8 py-6">Milestone</th>
                  <th className="px-8 py-6">Original Duration</th>
                  <th className="px-8 py-6">Optimized Duration</th>
                  <th className="px-8 py-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {students.length > 0 ? students.map((s, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition">
                    <td className="px-8 py-6 font-bold text-slate-800">{s.milestone_name}</td>
                    <td className="px-8 py-6 text-slate-500 font-medium">{s.original_days} Days</td>
                    <td className="px-8 py-6 text-green-600 font-bold">-{s.original_days - s.optimized_days} Days</td>
                    <td className="px-8 py-6">
                      <span className="bg-blue-50 text-blue-600 text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-tighter">
                        {s.is_fast_tracked ? "Fast-Tracked" : "On Path"}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="4" className="px-8 py-20 text-center text-slate-400 text-xs font-medium">
                      {loading ? "Synchronizing with Cobel AI Engine..." : "No student data found in user_progress table."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}