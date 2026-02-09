"use client"
import React from 'react'
import { BarChart3 } from 'lucide-react'

export default function PortalDashboard({ studentData }) {
  const timeSaved = studentData?.timeSaved ?? 0;
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><BarChart3 size={24} /></div>
        <div>
          <p className="text-sm text-slate-500 uppercase font-semibold">Temporal Optimization</p>
          <h2 className="text-xl font-bold text-slate-900">{timeSaved} Hours Saved</h2>
        </div>
      </div>
    </div>
  );
}