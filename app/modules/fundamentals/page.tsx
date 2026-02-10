"use client"
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import TopNav from '@/components/TopNav'
import { supabase } from '@/lib/supabase'
import { Upload, CheckCircle2, FileSearch, RefreshCcw } from 'lucide-react'

export default function FundamentalsModule() {
  const [status, setStatus] = useState('idle')
  const fileInputRef = useRef(null)

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setStatus('uploading');
      
      // Simulate AI Extraction time
      setTimeout(async () => {
        // ACTUAL SUPABASE DATA INSERT
        const { data, error } = await supabase
          .from('user_progress')
          .insert([
            { 
              milestone_name: 'Technical Fundamentals', 
              original_days: 14, 
              optimized_days: 12, 
              is_fast_tracked: true 
            }
          ])
          .select();

        if (error) {
          console.error("Supabase Write Error:", error.message);
        } else {
          console.log("Optimization Logged:", data);
        }
        
        setStatus('complete');
      }, 3500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopNav />
      <main className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-black mb-2 uppercase text-[#003366]">Analog-to-Digital Bridge</h3>
            <p className="text-slate-500 text-sm italic">Status: Connected to Supabase Instance</p>
            <p className="text-slate-500 text-sm mt-4">Upload your handwritten mechanical diagnostic to verify mastery and trigger path optimization.</p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[40px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />

          {status === 'idle' && (
            <button onClick={() => fileInputRef.current.click()} className="w-full bg-[#003366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition shadow-xl">
              UPLOAD ASSESSMENT
            </button>
          )}

          {status === 'uploading' && (
            <div className="flex flex-col items-center">
              <RefreshCcw className="text-blue-600 animate-spin mb-4" size={40} />
              <h3 className="font-black text-xl text-[#003366]">WRITING TO DATABASE...</h3>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Updating Path Density</p>
            </div>
          )}

          {status === 'complete' && (
            <div className="animate-in zoom-in">
              <CheckCircle2 className="text-green-500 mx-auto mb-6" size={64} />
              <h3 className="font-black text-xl mb-2">Sync Successful</h3>
              <p className="text-slate-500 text-[10px] mb-8 uppercase font-bold tracking-widest">Time saved: 2 Days</p>
              <Link href="/certification" className="bg-green-500 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase hover:bg-green-600 transition">View Certification</Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}