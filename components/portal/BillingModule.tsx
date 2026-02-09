"use client"
import React, { useState } from 'react'
import { CreditCard, Receipt, Calendar, CheckCircle, Download } from 'lucide-react'

export default function BillingModule() {
  const [activeTab, setActiveTab] = useState<'invoice' | 'history'>('invoice')

  const mockInvoice = { id: 'INV-001', amount: 1200.00, due: '2026-03-15', status: 'Pending' }
  const mockHistory = [
    { id: 'PAY-88', date: '2026-01-10', amount: 500.00, method: 'Visa' },
    { id: 'PAY-42', date: '2025-12-01', amount: 500.00, method: 'Transfer' }
  ]

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mt-8 overflow-hidden">
      <div className="flex border-b">
        <button onClick={() => setActiveTab('invoice')} className={lex-1 py-4 text-sm font-bold \}>Current Billing</button>
        <button onClick={() => setActiveTab('history')} className={lex-1 py-4 text-sm font-bold \}>Receipt History</button>
      </div>

      <div className="p-6">
        {activeTab === 'invoice' ? (
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-2xl font-black text-slate-800">$\.00</h4>
                <p className="text-sm text-slate-500">Balance for Q1 Vocational Training</p>
              </div>
              <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase">Due: \</span>
            </div>

            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg text-sm">
                    <Calendar size={16} className="text-blue-600" />
                    <span>Next Scheduled Payment: **April 1st, 2026**</span>
                </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              <CreditCard size={18} /> Pay Fees Now
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {mockHistory.map(pay => (
              <div key={pay.id} className="flex justify-between items-center p-4 border rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg"><Receipt size={20} /></div>
                  <div>
                    <p className="font-bold text-slate-800">Receipt \</p>
                    <p className="text-xs text-slate-500">\  \</p>
                  </div>
                </div>
                <div className="text-right">
                    <p className="font-bold text-slate-800">$\.00</p>
                    <button className="text-blue-600 text-xs flex items-center gap-1 mt-1 hover:underline"><Download size={12} /> PDF</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}