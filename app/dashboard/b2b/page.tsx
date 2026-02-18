"use client"
import React from 'react'
// Fixed: Switched from relative path with escaping error to root-level alias
import TopNav from "@/components/TopNav"

export default function B2BDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="p-20 text-center">
        <h1 className="text-4xl font-black text-[#003366] uppercase tracking-tighter">
          B2B Partner Portal
        </h1>
        <div className="mt-6 inline-block bg-white border border-slate-200 px-6 py-2 rounded-full">
           <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">
             Route: /dashboard/b2b | Cobel AI Integrated
           </p>
        </div>
      </div>
    </div>
  )
}