"use client"
import React, { useState, useEffect } from 'react'
import TopNav from '@/components/TopNav'
import CourseSidebar from "@/components/CourseSidebar"
import HandwritingUpload from '@/components/portal/HandwritingUpload'
import CurriculumMap from '@/components/portal/CurriculumMap'
import MilestoneForecast from '@/components/portal/MilestoneForecast'
import BillingModule from '@/components/portal/BillingModule'
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
          <div className="max-w-6xl mx-auto">
            <header className="mb-8 flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Cobel AI Dashboard</h1>
                <p className="text-slate-500">Accelerated Vocational Path</p>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Learning & AI */}
              <div className="lg:col-span-2 space-y-8">
                <MilestoneForecast timeSaved={studentData.time_saved} />
                <HandwritingUpload studentId={studentData.id} />
                <CurriculumMap timeSaved={studentData.time_saved} />
              </div>

              {/* Right Column: Financial & Stats */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">AI Optimization</p>
                  <h2 className="text-4xl font-black text-slate-800">{studentData.time_saved}h</h2>
                  <p className="text-sm text-slate-400">Hours removed from curriculum</p>
                </div>
                
                <BillingModule />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}