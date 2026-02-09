"use client"
import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { simulateHandwritingAnalysis } from '@/lib/mockAiEngine'
import { Upload, CheckCircle, Zap } from 'lucide-react'

export default function HandwritingUpload({ studentId }: { studentId: string }) {
  const [uploading, setUploading] = useState(false)
  const [status, setStatus] = useState('')

  const handleUpload = async (event: any) => {
    try {
      setUploading(true)
      setStatus('Ingesting physical assessment...')
      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = \/\.\

      // 1. Upload to Storage
      const { error: uploadError } = await supabase.storage
        .from('assessments')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      // 2. Trigger the Mock AI Analysis
      setStatus('AI Engine: Identifying Bilingual Vocational Terms...')
      const result = await simulateHandwritingAnalysis(studentId)

      setStatus(Success! Detected \ terms. \ hours saved!)
      
      // Refresh the page after a brief delay to show new stats
      setTimeout(() => window.location.reload(), 2000)

    } catch (error: any) {
      setStatus('Error: ' + error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="mt-8 p-6 bg-slate-900 text-white rounded-xl shadow-lg border border-blue-500/30">
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-blue-500/20 text-blue-400 rounded-full mb-4 animate-pulse">
          <Zap size={32} />
        </div>
        <h3 className="text-lg font-bold">Cobel AI Ingestion</h3>
        <p className="text-sm text-slate-400 mb-4">Feature 4: Analog-to-Digital Pedagogical Bridge</p>
        
        <label className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
          {uploading ? 'Analyzing...' : 'Upload Handwritten Assessment'}
          <input type="file" className="hidden" onChange={handleUpload} disabled={uploading} accept="image/*" />
        </label>
        {status && (
          <div className="mt-4 p-3 bg-slate-800 rounded-lg border border-slate-700">
            <p className="text-xs font-mono text-blue-400 flex items-center gap-2">
              <CheckCircle size={14} /> {status}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}