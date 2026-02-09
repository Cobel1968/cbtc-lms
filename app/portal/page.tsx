"use client"
import React from 'react'
import TopNav from '@/components/TopNav'
import MilestoneForecast from '@/components/portal/MilestoneForecast'
import SecureUpload from '@/components/mobile/SecureUpload'

export default function StudentPortal() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        <header>
          <h1 className="text-3xl font-black text-slate-900">Student Learning Portal</h1>
          <p className="text-slate-500">Welcome back to your AI-Optimized vocational track.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MilestoneForecast />
          <SecureUpload />
        </div>
      </main>
    </div>
  )
}