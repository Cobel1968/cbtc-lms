"use client"
import React from 'react'
import TopNav from '@/components/TopNav'

export default function B2BDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="p-20 text-center">
        <h1 className="text-4xl font-black text-[#003366] uppercase">B2B Partner Portal</h1>
        <p className="mt-4 text-slate-500 font-bold uppercase tracking-widest text-xs">Route: /dashboard/b2b</p>
      </div>
    </div>
  )
}