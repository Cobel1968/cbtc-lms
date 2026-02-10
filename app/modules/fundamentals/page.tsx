"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Upload, FileText, CheckCircle2, ArrowLeft, Zap, Languages } from 'lucide-react'

export default function FundamentalsModule() {
  const [isUploading, setIsUploading] = useState(false)
  const [isProcessed, setIsProcessed] = useState(false)

  const simulateIngestion = () => {
    setIsUploading(true)
    // Simulate Cobel AI Engine processing handwriting
    setTimeout(() => {
      setIsUploading(false)
      setIsProcessed(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b px-8 py-4 flex items-center justify-between">
        <Link href="/curriculum" className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase hover:text-blue-600 transition">
          <ArrowLeft size={16} /> Back to Path
        </Link>
        <div className="text-center">
          <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest">Module 01</span>
          <h2 className="font-black text-slate-900 uppercase">Technical Fundamentals</h2>
        </div>
        <div className="w-20"></div> {/* Spacer */}
      </nav>

      <main className="max-w-4xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left: Module Content */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Active Learning Goal</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                This module establishes the baseline for mechanical and electronic vocational logic. 
                Complete the physical assessment sheet provided by your trainer before uploading.
              </p>
            </div>

            <div className="bg-blue-600 p-8 rounded-[40px] text-white shadow-xl shadow-blue-100">
              <Languages className="mb-4 opacity-50" size={32} />
              <h3 className="text-lg font-bold mb-2 uppercase">Bilingual Mapping</h3>
              <p className="text-blue-100 text-xs leading-relaxed">
                The AI Engine is currently scanning for technical terms in both <strong>English</strong> and <strong>French</strong> to verify your fluency.
              </p>
            </div>
          </div>

          {/* Right: Handwriting Ingestion Module */}
          <div className="bg-white p-10 rounded-[40px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
            {!isProcessed ? (
              <>
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Upload className={isUploading ? "text-blue-600 animate-bounce" : "text-slate-300"} size={32} />
                </div>
                <h3 className="font-black text-xl mb-2">Ingestion Bridge</h3>
                <p className="text-slate-400 text-xs mb-8 uppercase font-bold tracking-widest">Upload Handwritten Assessment</p>
                
                <button 
                  onClick={simulateIngestion}
                  disabled={isUploading}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all"
                >
                  {isUploading ? "AI Engine Processing..." : "Select File / Take Photo"}
                </button>
              </>
            ) : (
              <div className="animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="text-green-500 mx-auto mb-6" size={64} />
                <h3 className="font-black text-xl mb-2 text-slate-900">Ingestion Complete</h3>
                <p className="text-slate-500 text-sm mb-8">
                  Handwriting analyzed. 14 Technical terms identified. <br/>
                  <strong>Temporal path optimized: -2 days.</strong>
                </p>
                <Link href="/curriculum" className="inline-block bg-green-500 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-green-600 transition">
                  View Updated Path
                </Link>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  )
}