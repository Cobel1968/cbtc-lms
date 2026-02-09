"use client"
export const dynamic = 'force-dynamic';
import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import CourseSidebar from "@/components/CourseSidebar"
import TopNav from '@/components/TopNav'
import { BarChart3 } from 'lucide-react'

export default function StudentPortal() {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  // If we are building or loading, show a safe skeleton state
  if (!studentData) {
    return (
      <div className="min-h-screen bg-slate-50">
        <TopNav />
        <div className="flex">
          <CourseSidebar />
          <main className="flex-1 p-8">Initializing Cobel AI Engine...</main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="flex">
        <CourseSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold">Temporal Optimization</p>
                  <h2 className="text-xl font-bold">{studentData?.timeSaved || 0} Hours Saved</h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}