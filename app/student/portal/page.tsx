"use client"
import React, { useState, useEffect } from 'react'
import TopNav from '@/components/TopNav'
import CourseSidebar from "@/components/CourseSidebar"

export default function StudentPortal() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null // Returns a blank page during build, preventing any crashes

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="flex">
        <CourseSidebar />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Cobel LMS Dashboard</h1>
          <p className="mt-4">Initializing Adaptive Learning Algorithm...</p>
        </main>
      </div>
    </div>
  )
}