"use client"
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import TopNav from '@/components/TopNav'
import { Upload, CheckCircle2, BookOpen, AlertTriangle, Settings, FileSearch } from 'lucide-react'

export default function FundamentalsModule() {
  const [status, setStatus] = useState('idle')
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setStatus('uploading')
      setTimeout(() => { setStatus('complete') }, 4000)
    }
  }

  const lessons = [
    { title: "Industrial Sensors", desc: "Understanding PNP vs NPN logic in automated systems.", icon: <Settings size={20}/> },
    { title: "Bilingual Safety", desc: "EN: 'Emergency Stop' | FR: 'Arrêt d'Urgence'.", icon: <AlertTriangle size={20} className="text-amber-500"/> },
    { title: "Circuit Schematics", desc: "Reading fundamental electrical vocational blueprints.", icon: <BookOpen size={20} className="text-blue-500"/> }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <TopNav />
      
      <main className="max-w-6xl mx-auto py-12 px-6">
        <header className="mb-10">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900 leading-none">Lesson 01:<br/>Technical Fundamentals</h1>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-4">Module Core: Vocational Ingestion</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Lesson Blocks */}
          <div className="lg:col-span-2 space-y-4">
            {lessons.map((lesson, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:border-blue-200 transition-all flex items-start gap-6">
                <div className="bg-slate-50 p-4 rounded-2xl">{lesson.icon}</div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-tight">{lesson.title}</h4>
                  <p className="text-slate-500 text-sm mt-1">{lesson.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: The Assessment Bridge */}
          <div className="bg-white p-10 rounded-[40px] border-2 border-dashed border-slate-200 text-center sticky top-28 h-fit shadow-xl shadow-blue-900/5">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
            
            {status === 'complete' ? (
              <div className="animate-in zoom-in duration-500">
                <CheckCircle2 className="text-green-500 mx-auto mb-6" size={64} />
                <h3 className="font-black text-xl mb-2 uppercase">Assessment Verified</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase mb-8">Fast-Track Triggered: -2 Days</p>
                <Link href="/curriculum" className="block w-full bg-green-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition">Continue Path</Link>
              </div>
            ) : (
              <>
                <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center ${status === 'uploading' ? 'bg-blue-50 animate-pulse' : 'bg-slate-50'}`}>
                   {status === 'uploading' ? <FileSearch className="text-blue-600" /> : <Upload className="text-slate-300" />}
                </div>
                <h3 className="font-black text-lg uppercase mb-2">Final Step</h3>
                <p className="text-slate-400 text-xs mb-8">Upload your handwritten mechanical diagnostic to verify mastery.</p>
                <button 
                  onClick={() => fileInputRef.current.click()}
                  disabled={status === 'uploading'}
                  className="w-full bg-[#003366] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition"
                >
                  {status === 'uploading' ? "AI SCANNING..." : "UPLOAD PHOTO"}
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}