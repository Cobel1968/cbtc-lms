"use client"
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import TopNav from '@/components/TopNav'
import { Upload, CheckCircle2, Languages, FileSearch, RefreshCcw } from 'lucide-react'

export default function FundamentalsModule() {
  const [status, setStatus] = useState('idle')
  const fileInputRef = useRef(null)

  // Force the state change the moment the file is selected
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File detected:", file.name);
      setStatus('uploading');
      
      // Simulate the AI Engine's Analog-to-Digital Bridge logic
      setTimeout(() => {
        setStatus('complete');
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopNav />
      <main className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-black mb-2 uppercase text-[#003366]">Technical Logic</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Once you select your handwritten assessment, the Cobel AI Engine scans for vocational keywords.
            </p>
          </div>
          
          <div className="bg-[#003366] p-10 rounded-[40px] text-white shadow-xl">
            <Languages className="mb-4 opacity-50" size={32} />
            <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Bilingual Mapping</h3>
            <p className="text-blue-100 text-xs">Cross-referencing EN/FR technical terms to optimize curriculum density.</p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[40px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*,.pdf"
          />

          {status === 'idle' && (
            <>
              <div className="bg-slate-50 w-24 h-24 rounded-3xl flex items-center justify-center mb-8">
                <Upload className="text-slate-300" size={40} />
              </div>
              <button 
                onClick={() => fileInputRef.current.click()}
                className="w-full bg-[#003366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition shadow-xl"
              >
                SELECT ASSESSMENT / PHOTO
              </button>
            </>
          )}

          {status === 'uploading' && (
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-8">
                <RefreshCcw className="text-blue-600 animate-spin w-full h-full" size={40} />
                <FileSearch className="absolute inset-0 m-auto text-blue-900" size={24} />
              </div>
              <h3 className="font-black text-xl mb-2 text-[#003366]">AI ENGINE SCANNING...</h3>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em]">Analyzing Handwriting Patterns</p>
            </div>
          )}

          {status === 'complete' && (
            <div className="animate-in zoom-in duration-500">
              <CheckCircle2 className="text-green-500 mx-auto mb-6" size={64} />
              <h3 className="font-black text-xl mb-2">Ingestion Success</h3>
              <p className="text-slate-500 text-[10px] mb-8 uppercase font-bold tracking-widest">Temporal path optimized: -2 days</p>
              <Link href="/curriculum" className="bg-green-500 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase hover:bg-green-600 transition">
                Return to Path
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}