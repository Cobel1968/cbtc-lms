"use client"
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Users, Zap, Search, ChevronRight } from 'lucide-react'

export default function TrainerStudentList() {
  const [students, setStudents] = useState<any[]>([])

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .order('time_saved', { ascending: false })
      if (data) setStudents(data)
    }
    fetchStudents()
  }, [])

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b flex justify-between items-center bg-slate-50/50">
        <div className="flex items-center gap-2">
          <Users className="text-blue-600" size={20} />
          <h2 className="font-bold text-slate-800">Vocational Student Tracking</h2>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          <input className="pl-10 pr-4 py-2 border rounded-full text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Search students..." />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-[10px] uppercase tracking-widest text-slate-400 bg-slate-50">
            <tr>
              <th className="px-6 py-3">Student Name</th>
              <th className="px-6 py-3 text-center">AI Optimization</th>
              <th className="px-6 py-3">Path Density</th>
              <th className="px-6 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map(s => (
              <tr key={s.id} className="hover:bg-blue-50/30 transition">
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-700">{s.full_name || 'Anonymous Student'}</p>
                  <p className="text-xs text-slate-400 uppercase">{s.language_preference === 'fr' ? ' French Track' : ' English Track'}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    <Zap size={12} /> -{s.time_saved}h
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full" style={{ width: \% }}></div>
                  </div>
                  <p className="text-[10px] mt-1 text-slate-500">{(s.curriculum_density * 100).toFixed(0)}% Density</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-blue-600 transition">
                    <ChevronRight size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}