"use client"
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import TopNav from '@/components/TopNav'
import { Upload, CheckCircle2, Languages, FileSearch } from 'lucide-react'

export default function FundamentalsModule() {
  const [status, setStatus] = useState('idle')
  const fileInputRef = useRef(null)

  const handleButtonClick = () => {
    // This physically opens the file explorer or camera
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setStatus('uploading')
      // Simulate the AI Engine processing the specific file uploaded
      setTimeout(() => { setStatus('complete') }, 3500)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopNav />
      <main className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-black mb-2 uppercase text-slate-900">Module 01: Core Logic</h3>
            <p className="text-slate-500 text-sm">Upload handwritten technical assessments to calculate your optimized timeframe.</p>
          </div>
          <div className="bg-blue-600 p-10 rounded-[40px] text-white shadow-xl shadow-blue-900/10">
            <Languages className="mb-4 opacity-50" size={32} />
            <h3 className="text-lg font-bold mb-2 uppercase">Bilingual Fluency</h3>
            <p className="text-blue-100 text-xs">Scanning technical terms in EN/FR for curriculum density adjustment.</p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[40px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
          {/* HIDDEN FILE INPUT - The "Engine" Room */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*,.pdf"
          />

          {status === 'complete' ? (
            <div className="animate-in zoom-in duration-500">
              <CheckCircle2 className="text-green-500 mx-auto mb-6" size={64} />
              <h3 className="font-black text-xl mb-2">Ingestion Success</h3>
              <p className="text-slate-500 text-[10px] mb-8 uppercase font-bold tracking-widest">Temporal path optimized: -2 days</p>
              <Link href="/curriculum" className="bg-green-500 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase hover:bg-green-600 transition">
                Return to Path
              </Link>
            </div>
          ) : (
            <>
              <div className={`bg-slate-50 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 ${status === 'uploading' ? 'animate-pulse' : ''}`}>
                {status === 'uploading' ? <FileSearch className="text-blue-600" size={40} /> : <Upload className="text-slate-300" size={40} />}
              </div>
              
              <button 
                onClick={handleButtonClick}
                disabled={status === 'uploading'}
                className="w-full bg-[#003366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition shadow-xl"
              >
                {status === 'uploading' ? "AI ENGINE SCANNING..." : "SELECT ASSESSMENT / PHOTO"}
              </button>
              
              <p className="mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Accepted: JPG, PNG, PDF
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  )
}