"use client"
import React from 'react'
import TopNav from '@/components/TopNav'
import AdminDictionary from '@/components/admin/AdminDictionary'
import CourseEditor from '@/components/admin/CourseEditor'
import TrainerStudentList from '@/components/admin/TrainerStudentList'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopNav />
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Trainer Command Center</h1>
          <p className="text-slate-500 font-medium">Managing Cobel AI Engine & Bilingual Path Mapping</p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-8">
            <TrainerStudentList />
            <CourseEditor />
          </div>
          <div className="space-y-8">
            <AdminDictionary />
          </div>
        </div>
      </main>
    </div>
  )
}