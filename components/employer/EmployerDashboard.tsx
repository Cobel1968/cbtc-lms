"use client"
import React, { useState } from 'react'
import { CreditCard, Users, FileText, Download } from 'lucide-react'

export default function EmployerDashboard() {
  const [enrolledStudents] = useState([
    { name: 'John Doe', course: 'Industrial Safety', progress: '85%', status: 'Paid' },
    { name: 'Jane Smith', course: 'Electrical Theory', progress: '40%', status: 'Invoice Pending' },
  ])

  return (
    <div className="p-8 bg-white rounded-3xl border shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Corporate Portal</h2>
          <p className="text-sm text-slate-500">Managing sponsored vocational students</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2">
          <CreditCard size={18} /> Settle All Invoices
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs text-slate-400 uppercase tracking-widest border-b">
              <th className="pb-4 px-2">Student Name</th>
              <th className="pb-4 px-2">Assigned Course</th>
              <th className="pb-4 px-2">Training Progress</th>
              <th className="pb-4 px-2 text-right">Records</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((s, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-slate-50 transition">
                <td className="py-4 px-2 font-bold">{s.name}</td>
                <td className="py-4 px-2 text-slate-600 text-sm">{s.course}</td>
                <td className="py-4 px-2">
                  <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full" style={{ width: s.progress }}></div>
                  </div>
                </td>
                <td className="py-4 px-2 text-right">
                  <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"><Download size={18}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}