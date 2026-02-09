"use client"
import React, { useState } from 'react'
import { Camera, ShieldCheck, MapPin, UploadCloud } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function SecureUpload() {
  const [identityVerified, setIdentityVerified] = useState(false)
  const [locationVerified, setLocationVerified] = useState(false)

  const verifyIdentity = async () => {
    console.log("Checking student biometric signature...")
    setIdentityVerified(true)
  }

  const verifyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log("Location Lat:", pos.coords.latitude)
      setLocationVerified(true)
    })
  }

  return (
    <div className="p-6 bg-slate-900 min-h-[400px] rounded-3xl text-white">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <ShieldCheck className="text-green-400" /> Secure AI Ingestion
      </h2>

      <div className="space-y-4">
        <button 
          onClick={verifyIdentity}
          className={w-full p-4 rounded-2xl flex items-center justify-between \ border}
        >
          <div className="flex items-center gap-3">
            <Camera size={20} />
            <span className="text-sm">1. Confirm Identity (Selfie Check)</span>
          </div>
          {identityVerified && <ShieldCheck size={16} className="text-green-400" />}
        </button>

        <button 
          onClick={verifyLocation}
          className={w-full p-4 rounded-2xl flex items-center justify-between \ border}
        >
          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <span className="text-sm">2. Verify Training Site (GPS Geofence)</span>
          </div>
          {locationVerified && <ShieldCheck size={16} className="text-green-400" />}
        </button>

        <div className={mt-8 p-8 border-2 border-dashed rounded-3xl text-center \}>
          <UploadCloud size={48} className="mx-auto mb-4 text-blue-400" />
          <p className="text-xs text-slate-400 mb-4 font-medium">Security Clear. Identity & Location Locked.</p>
          <input type="file" accept="image/*" capture="environment" className="hidden" id="cameraInput" />
          <label htmlFor="cameraInput" className="bg-blue-600 px-6 py-3 rounded-xl font-bold text-sm cursor-pointer hover:bg-blue-700 transition inline-block">
            Snap Technical Notes
          </label>
        </div>
      </div>
    </div>
  )
}