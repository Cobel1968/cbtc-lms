"use client"
import React, { useState } from 'react'
import { Banknote, Send, Download } from 'lucide-react'

export default function TrainerPayroll() {
  // Mock Data: In production, this would sum the 'hours' from the 'courses' table assigned to this trainer
  const trainers = [
    { name: 'Dr. Smith', rate: 55, hoursDispensed: 12, total: 660 },
    { name: 'Prof. Jallow', rate: 45, hoursDispensed: 20, total: 900 }
  ]

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-8">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
        <Banknote className="text-green-600" /> Pro-Rata Payroll (Trainers)
      </h2>
      
      <div className="space-y-4">
        {trainers.map((t, i) => (
          <div key={i} className="flex justify-between items-center p-4 border border-slate-100 rounded-xl">
            <div>
              <p className="font-bold">{t.name}</p>
              <p className="text-xs text-slate-500">\/hr  {t.hoursDispensed} hrs</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-black text-lg text-slate-800">\</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2">
                <Send size={14} /> Send Payslip
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}