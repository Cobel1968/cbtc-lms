"use client"
import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Upload, FileText, CheckCircle } from 'lucide-react'

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

      // 1. Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('assessments')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      // 2. Register the scan in the database for the AI Engine
      const { error: dbError } = await supabase
        .from('handwriting_assessments')
        .insert({
          student_id: studentId,
          image_url: fileName
        })

      if (dbError) throw dbError
      setStatus('Success! AI Engine is analyzing technical terms...')
    } catch (error: any) {
      setStatus('Error: ' + error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="mt-8 p-6 bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl">
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
          <Upload size={32} />
        </div>
        <h3 className="text-lg font-bold text-blue-900">Analog-to-Digital Bridge</h3>
        <p className="text-sm text-blue-700 mb-4">Upload your handwritten assessment to update your Technical Fluency profile.</p>
        
        <label className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          {uploading ? 'Processing...' : 'Scan Assessment'}
          <input type="file" className="hidden" onChange={handleUpload} disabled={uploading} accept="image/*" />
        </label>
        {status && <p className="mt-3 text-xs font-medium text-blue-800 flex items-center gap-1"><CheckCircle size={14} /> {status}</p>}
      </div>
    </div>
  )
}