"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function Page() {
  return (
    <div className='min-h-screen bg-slate-50 p-10 font-sans'>
      <div className='max-w-2xl mx-auto bg-white p-12 rounded-[40px] shadow-sm border border-slate-100'>
        <div className='bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-6'>
          Cobel AI Engine: Active Route
        </div>
        <h1 className='text-3xl font-black uppercase tracking-tighter mb-4'>REPORTS</h1>
        <p className='text-slate-500 mb-8'>This section is now synchronized with your Bilingual Technical Mapping profile.</p>
        
        <div className='flex gap-4'>
          <Link href='/curriculum' className='flex items-center gap-2 font-bold text-xs uppercase text-slate-400 hover:text-blue-600'>
            <ArrowLeft size={16} /> Back to Curriculum
          </Link>
        </div>
      </div>
    </div>
  )
}