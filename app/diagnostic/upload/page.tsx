"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { FileText, Mic, Upload, CheckCircle2, AlertCircle, Loader2, Music } from 'lucide-react'

export default function IntegratedIngestion() {
  const [status, setStatus] = useState('idle') // idle, uploading, processing, complete
  const [fileType, setFileType] = useState(null)

  const handleUpload = (type) => {
    setFileType(type)
    setStatus('uploading')
    setTimeout(() => setStatus('processing'), 1500)
    setTimeout(() => setStatus('complete'), 4000)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <TopNav />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-2">Ingestion Phase</h2>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">Analog & Auditory Bridge</h1>
        </div>

        {status === 'idle' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* HANDWRITING COMPONENT */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3 text-slate-900">Handwriting Ingestion</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                Upload physical technical assessments for OCR term extraction and bilingual mapping.
              </p>
              <button 
                onClick={() => handleUpload('handwriting')}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
              >
                <Upload size={16} /> Select Photo
              </button>
            </div>

            {/* AUDIO COMPONENT */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Mic size={28} />
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3 text-slate-900">Audio Fluency Audit</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                Upload or record technical explanations to assess EN/FR linguistic friction.
              </p>
              <button 
                onClick={() => handleUpload('audio')}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 hover:bg-purple-600 transition-all"
              >
                <Music size={16} /> Upload Audio File
              </button>
            </div>
          </div>
        ) : (
          /* PROCESSING VIEW */
          <div className="bg-white rounded-[4rem] p-16 border border-slate-100 shadow-2xl text-center space-y-8">
            {status === 'uploading' && (
              <div className="animate-in zoom-in duration-300">
                <Loader2 className="mx-auto text-blue-600 animate-spin mb-6" size={48} />
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Uploading {fileType}...</h3>
              </div>
            )}

            {status === 'processing' && (
              <div className="animate-in fade-in duration-500">
                <div className="flex justify-center gap-1 h-12 mb-6 items-center">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s`, height: '100%' }} />
                  ))}
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">AI Engine: Extracting Technical Terms</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Bilingual Mapping & Temporal Prediction Update in Progress</p>
              </div>
            )}

            {status === 'complete' && (
              <div className="animate-in slide-in-from-bottom-8 duration-500 space-y-6">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border-4 border-green-100">
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">Ingestion Complete</h3>
                  <div className="flex justify-center gap-4 mt-4">
                    <span className="bg-slate-100 px-4 py-2 rounded-full text-[9px] font-black uppercase">OCR Terms: 42</span>
                    <span className="bg-slate-100 px-4 py-2 rounded-full text-[9px] font-black uppercase text-orange-600">Gaps Detected: 2</span>
                  </div>
                </div>
                <button 
                  onClick={() => window.location.href='/student/dashboard'}
                  className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-sm hover:bg-slate-900 transition-all"
                >
                  View Optimized Path
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}