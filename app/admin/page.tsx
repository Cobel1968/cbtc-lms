"use client"
import React from 'react'
import AdminDashboard from '@/components/dashboard/admindashboard'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-black uppercase italic tracking-tighter text-[#1E293B]">Institutional Oversight</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Cobel AI Engine: Global Performance Metrics</p>
          </div>
          <AdminDashboard />
        </div>
      </div>
    </div>
  )
}
