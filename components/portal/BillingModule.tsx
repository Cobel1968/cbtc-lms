"use client"
import React, { useState } from 'react'
import { Receipt, CreditCard } from 'lucide-react'

export default function BillingModule() {
  const [activeTab, setActiveTab] = useState('invoice')
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mt-8 overflow-hidden">
      <div className="flex border-b">
        <button onClick={() => setActiveTab('invoice')} className={`flex-1 py-4 text-sm font-bold ${activeTab === 'invoice' ? 'bg-slate-50 text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'}`}>Current Billing</button>
        <button onClick={() => setActiveTab('history')} className={`flex-1 py-4 text-sm font-bold ${activeTab === 'history' ? 'bg-slate-50 text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'}`}>Receipt History</button>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center text-slate-800">
          <div><p className="text-xs text-slate-400 font-bold uppercase">Amount Due</p><p className="text-3xl font-black">$1,500.00</p></div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm">Pay Now</button>
        </div>
      </div>
    </div>
  )
}