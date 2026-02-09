import CourseSidebar from "@/components/CourseSidebar"
"use client"
import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import TopNav from '@/components/TopNav'
import { BookOpen, CheckCircle, Lock, BarChart3 } from 'lucide-react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function StudentPortal() {
  const [activeCourse, setActiveCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function retrieveExistingData() {
      // We fetch the first available course and its related modules automatically
      const { data, error } = await supabase
        .from('courses')
        .select(`*, modules(*)`)
        .order('id', { ascending: true })
        .limit(1)
        .single()
      
      if (data) setActiveCourse(data)
      setLoading(false)
    }
    retrieveExistingData()
  }, [])

  if (loading) return <div className="p-20 text-center font-black animate-pulse">RETRIVING COBEL ENGINE DATA...</div>

  return (
    <div className="min-h-screen bg-cbtc-slate font-sans">
      <TopNav />
      <main className="max-w-[1600px] mx-auto flex">
      <div className="flex-1 py-12 px-10">
        {activeCourse ? (
          <>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-cbtc-magenta text-[10px] font-black uppercase tracking-[0.4em]">Enrolled Course: {activeCourse.code}</h2>
                <h1 className="text-5xl font-black uppercase italic tracking-tighter text-cbtc-navy">{activeCourse.title_en}</h1>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-white shadow-lg flex items-center gap-4">
                <BarChart3 className="text-cbtc-blue" />
                <div>
                  <p className="text-[8px] font-black text-slate-400 uppercase">Engine Forecast</p>
                  <p className="text-xs font-black text-cbtc-navy">FEATURE 3: ACTIVE</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeCourse.modules?.map((m: any, idx: number) => (
                <div key={m.id} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-white hover:border-cbtc-blue transition-all group">
                   <div className="flex justify-between items-start mb-6">
                     <span className="text-[10px] font-black text-slate-300 italic uppercase">Module 0{idx + 1}</span>
                     {idx === 0 ? <CheckCircle size={18} className="text-cbtc-blue" /> : <Lock size={18} className="text-slate-200" />}
                   </div>
                   <h3 className="text-lg font-black uppercase italic leading-tight text-cbtc-navy mb-1">{m.name_en}</h3>
                   <p className="text-[10px] font-bold text-slate-400 uppercase">{m.name_fr}</p>
                   
                   <button 
                    disabled={idx > 0} 
                    onClick={() => window.location.href = `/student/assessment/module-1`}
                    className={`mt-8 w-full py-4 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${idx === 0 ? 'bg-cbtc-navy text-white hover:bg-cbtc-magenta' : 'bg-slate-50 text-slate-300'}`}
                   >
                     {idx === 0 ? 'Continue' : 'Locked'}
                   </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
             <p className="font-black text-slate-400 uppercase tracking-widest">No Active Course Found in Supabase</p>
          </div>
        )}
            </div>
      <CourseSidebar stats={{ timeSaved: "4.5 HRS", fluencyScore: 78, completionForecast: "FEB 12, 2026", currentModule: 1 }} />
    </main>
    </div>
  )
}