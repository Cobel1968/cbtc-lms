"use client"
import React, { useEffect, useState } from 'react'
import TopNav from '@/components/TopNav'
import { supabase } from '@/lib/supabase'
import { BookOpen, Clock, Languages, PenTool } from 'lucide-react'

export default function StudentCurriculum() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getCourses() {
      const { data } = await supabase.from('courses').select('*')
      if (data) setCourses(data)
      setLoading(false)
    }
    getCourses()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopNav />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Adaptive Curriculum</h1>
          <p className="text-slate-500 font-medium">Powered by Cobel AI Temporal Optimization</p>
        </div>

        {loading ? (
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map(i => <div key={i} className="h-32 bg-slate-200 rounded-[32px]"></div>)}
          </div>
        ) : (
          <div className="grid gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex justify-between items-center group hover:border-blue-300 transition">
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    {course.category === 'Language' ? <Languages size={24}/> : <BookOpen size={24}/>}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{course.title}</h3>
                    <div className="flex gap-4 mt-1 text-slate-400 text-xs font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Clock size={12}/> {course.duration_days} Days</span>
                      <span className="text-blue-600">{course.category}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => window.location.href = `/courses/${course.id}/analysis`}
                  className="bg-[#003366] text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition"
                >
                  Open Module
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
