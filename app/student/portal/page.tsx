"use client"
import React, { useState, useEffect } from 'react'
import TopNav from '@/components/TopNav'
import CourseSidebar from "@/components/CourseSidebar"

export default function StudentPortal() {
  const [mounted, setMounted] = useState(false)
  const [studentData, setStudentData] = useState(null)

  // This ONLY runs in the browser, never during 'next build'
  useEffect(() => {
    setMounted(true)
    // Your Supabase fetch logic would go here
  }, [])

  // If we are prerendering on Vercel, render a safe 'Loading' shell
  if (!mounted) {
    return <div className="min-h-screen bg-slate-50"><TopNav /><div className="flex"><CourseSidebar /><main className="p-8">Loading Portal...</main></div></div>
  }

  // Now it is safe to access studentData because this code only runs in the browser
  const timeSaved = studentData?.timeSaved || 0

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="flex">
        <CourseSidebar />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Cobel LMS Dashboard</h1>
          <div className="mt-4 p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="text-lg font-semibold text-blue-600">Temporal Optimization</h2>
            <p className="text-3xl font-bold">{timeSaved} Hours Saved</p>
          </div>
        </main>
      </div>
    </div>
  )
}