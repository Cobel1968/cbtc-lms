"use client"
import React, { useState } from 'react'
import { Receipt, CreditCard, Download } from 'lucide-react'

export default function BillingModule() {
  const [activeTab, setActiveTab] = useState('invoice')
  
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mt-8 overflow-hidden">
      <div className="flex border-b">
        <button onClick={() => setActiveTab('invoice')} className={lex-1 py-4 text-sm font-bold }>Current Billing</button>
        <button onClick={() => setActiveTab('history')} className={lex-1 py-4 text-sm font-bold }>Receipt History</button>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase">Amount Due</p>
            <p className="text-3xl font-black text-slate-800">,500.00</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm">Pay Now</button>
        </div>
      </div>
    </div>
  )
}