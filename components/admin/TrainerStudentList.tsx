"use client"
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Users, Search } from 'lucide-react'

export default function TrainerStudentList() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await supabase.from('profiles').select('*').eq('role', 'student')
      if (data) setStudents(data)
    }
    fetchStudents()
  }, [])

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b flex justify-between items-center bg-slate-50/50">
        <div className="flex items-center gap-2">
          <Users className="text-blue-600" size={20} />
          <h2 className="font-bold text-slate-800">Enrolled Students</h2>
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        {students.map((s: any) => (
          <div key={s.id} className="p-4 flex justify-between items-center hover:bg-slate-50">
            <span className="font-medium text-sm">{s.full_name}</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">
              {s.time_saved}h Saved
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}