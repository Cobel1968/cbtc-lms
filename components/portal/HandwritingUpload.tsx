"use client"
import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function HandwritingUpload() {
  const [status, setStatus] = useState('')
  const handleUpload = async (event: any) => {
    const file = event.target.files[0]
    if (!file) return
    setStatus('Ingesting physical assessment...')
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const { error: uploadError } = await supabase.storage.from('assessments').upload(fileName, file)
    if (!uploadError) setStatus('AI Engine: Success')
  }
  return (
    <div className="p-4 border-2 border-dashed rounded-xl">
      <p className="text-sm mb-2">{status}</p>
      <input type="file" onChange={handleUpload} className="text-xs" />
    </div>
  )
}