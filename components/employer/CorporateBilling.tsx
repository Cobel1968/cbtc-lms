"use client"
import React from 'react'
import { Printer, Download, CreditCard, Receipt } from 'lucide-react'

export default function CorporateBilling() {
  const corporateDetails = {
    name: "Global Tech Solutions Ltd",
    address: "123 Business District, Abidjan",
    totalDue: 4500.00
  }

  const items = [
    { student: "John Doe", course: "Industrial Safety", fee: 1500.00 },
    { student: "Jane Smith", course: "Electrical Theory", fee: 1500.00 },
    { student: "Amadou Diallo", course: "Bilingual Maintenance", fee: 1500.00 }
  ]

  return (
    <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 max-w-4xl mx-auto my-10">
      {/* Header with Corporate Logo */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <div className="text-3xl font-black text-slate-800 tracking-tighter">COBEL</div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600">Business Training Center</p>
          <p className="text-[10px] text-slate-400 mt-2">Certified Vocational Training  Abidjan</p>
        </div>
        <div className="text-right">
          <h1 className="text-2xl font-bold text-slate-900">TAX INVOICE</h1>
          <p className="text-sm text-slate-500">Invoice #: CBTC-2026-0042</p>
          <p className="text-sm text-slate-500">Date: February 9, 2026</p>
        </div>
      </div>

      {/* Bill To */}
      <div className="mb-10">
        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Bill To:</p>
        <p className="font-bold text-slate-800">{corporateDetails.name}</p>
        <p className="text-sm text-slate-500">{corporateDetails.address}</p>
      </div>

      {/* Itemized Table */}
      <table className="w-full text-left mb-10">
        <thead className="border-b-2 border-slate-100">
          <tr className="text-xs font-bold text-slate-400 uppercase">
            <th className="py-3">Student / Service</th>
            <th className="py-3 text-right">Unit Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {items.map((item, i) => (
            <tr key={i} className="text-sm">
              <td className="py-4">
                <span className="font-bold text-slate-800">{item.student}</span>
                <p className="text-xs text-slate-400">{item.course}</p>
              </td>
              <td className="py-4 text-right font-medium text-slate-700">$\.00</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end mb-12">
        <div className="w-64 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Subtotal:</span>
            <span className="font-medium">$\.00</span>
          </div>
          <div className="flex justify-between text-lg font-black text-blue-600 pt-2 border-t">
            <span>Total Due:</span>
            <span>$\.00</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 no-print">
        <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-100">
          <CreditCard size={18} /> Pay Total Now
        </button>
        <button className="px-6 py-4 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition">
          <Printer size={18} />
        </button>
        <button className="px-6 py-4 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition">
          <Download size={18} />
        </button>
      </div>

      <footer className="mt-12 text-center border-t pt-8">
        <p className="text-[10px] text-slate-400">
          Payment Terms: Net 15. Please quote the Invoice Number on all transfers. 
          <br />Managed by <strong>Coulibaly Abel, PGCE, MBA, NEBOSH</strong>
        </p>
      </footer>
    </div>
  )
}