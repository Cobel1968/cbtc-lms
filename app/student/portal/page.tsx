"use client"
import React, { useState, useEffect } from 'react'
import TopNav from '@/components/TopNav'
import CourseSidebar from "@/components/CourseSidebar"
import HandwritingUpload from '@/components/portal/HandwritingUpload'
import CurriculumMap from '@/components/portal/CurriculumMap'
import { supabase } from '@/lib/supabase'

export default function StudentPortal() {
  const [mounted, setMounted] = useState(false)
  const [studentData, setStudentData] = useState({ time_saved: 0, id: '' })

  useEffect(() => {
    setMounted(true)
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('id, time_saved')
          .eq('id', user.id)
          .single()
        if (data) setStudentData(data)
      }
    }
    fetchProfile()
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="flex">
        <CourseSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Cobel AI Dashboard</h1>
              <p className="text-slate-500">Bilingual Vocational Training & Adaptive Learning</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-sm font-semibold text-blue-600 uppercase">Temporal Optimization</p>
                <h2 className="text-4xl font-black text-slate-800">{studentData.time_saved}h</h2>
                <p className="text-xs text-slate-400 mt-1">Total Training Time Saved</p>
              </div>
              <div className="md:col-span-2">
                <HandwritingUpload studentId={studentData.id} />
              </div>
            </div>

            <CurriculumMap timeSaved={studentData.time_saved} />
          </div>
        </main>
      </div>
    </div>
  )
}