// Build Check: 20260209084945
"use client"
export const dynamic = 'force-dynamic';
import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import CourseSidebar from "@/components/CourseSidebar"
import TopNav from '@/components/TopNav'
import { BookOpen, CheckCircle, Lock, BarChart3 } from 'lucide-react'

export default function StudentPortal() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="flex">
        <CourseSidebar />
        <main className="flex-1 p-8">
           <h1 className="text-2xl font-bold">Cobel Learning Management System</h1>
        </main>
      </div>
    </div>
  )
}