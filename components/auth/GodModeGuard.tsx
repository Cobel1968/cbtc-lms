"use client"
import React, { useState } from 'react'

export default function GodModeGuard({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [pin, setPin] = useState("")

  const verify = () => {
    if (pin === "2026") setIsAuthorized(true)
  }

  if (!isAuthorized) {
    return (
      <div className="p-20 text-center bg-slate-900 min-h-screen text-white">
        <h2 className="text-2xl font-bold mb-4">SECURITY CHALLENGE</h2>
        <input 
          type="password" 
          value={pin} 
          onChange={(e) => setPin(e.target.value)}
          className="bg-black p-4 rounded border border-white/20 mb-4 block mx-auto text-center"
        />
        <button onClick={verify} className="bg-blue-600 px-8 py-2 rounded font-bold">UNLOCK ENGINE</button>
      </div>
    )
  }

  return <>{children}</>
}