"use client"
import React from 'react'
import TopNav from '@/components/TopNav'
import AdminDictionary from '@/components/admin/AdminDictionary'
import CourseEditor from '@/components/admin/CourseEditor'
import TrainerStudentList from '@/components/admin/TrainerStudentList'
import IntegrityLog from '@/components/admin/IntegrityLog'
import TrainerPayroll from '@/components/admin/TrainerPayroll'
import UserManagement from '@/components/admin/UserManagement'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopNav />
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Trainer Command Center</h1>
            <p className="text-slate-500 font-medium">Managing Cobel AI Engine & Security Integrity</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[10px] text-slate-400 font-bold uppercase">System Status</p>
            <p className="text-green-500 font-bold flex items-center gap-2"> AI Engine Active</p>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Column: Operations & Students */}
          <div className="xl:col-span-2 space-y-8">
            <TrainerStudentList />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <UserManagement />
                <TrainerPayroll />
            </div>
            <CourseEditor />
          </div>

          {/* Sidebar: Security & Technical Mapping */}
          <div className="space-y-8">
            <IntegrityLog />
            <AdminDictionary />
          </div>
        </div>
      </main>
    </div>
  )
}