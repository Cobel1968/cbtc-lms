"use client"
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { ShieldCheck, Map, AlertTriangle, UserCheck } from 'lucide-react'

export default function IntegrityLog() {
  const [logs, setLogs] = useState([])
  useEffect(() => {
    const fetchLogs = async () => {
      const { data } = await supabase.from('integrity_logs').select('*, profiles(full_name)').order('timestamp', { ascending: false })
      if (data) setLogs(data)
    }
    fetchLogs()
  }, [])
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-8">
      <div className="flex items-center gap-2 mb-6">
        <ShieldCheck className="text-blue-600" />
        <h2 className="text-xl font-bold text-slate-800">Security & Integrity Audit</h2>
      </div>
      <div className="space-y-3">
        {logs.map((log: any) => (
          <div key={log.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg ${log.status === 'Success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {log.verification_type === 'Biometric' ? <UserCheck size={20} /> : <Map size={20} />}
              </div>
              <div>
                <p className="font-bold text-slate-800 font-mono text-sm">{log.profiles?.full_name || 'System'}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">{log.verification_type} Check  {log.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}