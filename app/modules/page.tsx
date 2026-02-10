import React from 'react'
import TopNav from '@/components/TopNav'

export default function ModulePage() {
  return (
    <div className='p-20 bg-slate-50 min-h-screen'>
      <TopNav />
      <div className='max-w-4xl mx-auto mt-10 bg-white p-10 rounded-[40px] shadow-sm border border-slate-100'>
        <h1 className='text-2xl font-black uppercase tracking-tighter'>Module Active</h1>
        <p className='text-slate-500 mt-2 font-medium'>Initializing Bilingual Technical Mapping & Temporal Optimization...</p>
        <div className='mt-8 p-4 bg-blue-50 text-blue-700 rounded-2xl text-xs font-bold uppercase tracking-widest'>
          Cobel AI Engine: Scanning Handwriting Data
        </div>
      </div>
    </div>
  )
}