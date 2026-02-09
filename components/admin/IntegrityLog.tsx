"use client"
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { ShieldCheck, Map, AlertTriangle, UserCheck } from 'lucide-react'

export default function IntegrityLog() {
  const [logs, setLogs] = useState<any[]>([])

  useEffect(() => {
    const fetchLogs = async () => {
      const { data } = await supabase
        .from('integrity_logs')
        .select('*, profiles(full_name)')
        .order('timestamp', { ascending: false })
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
        {logs.length === 0 ? (
          <p className="text-slate-400 text-sm italic">No security events recorded yet.</p>
        ) : (
          logs.map(log => (
            <div key={log.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className={p-2 rounded-lg \}>
                  {log.verification_type === 'Biometric' ? <UserCheck size={20} /> : <Map size={20} />}
                </div>
                <div>
                  <p className="font-bold text-slate-800 font-mono text-sm">\</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide">\ Check  \</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-mono mb-1">
                  {new Date(log.timestamp).toLocaleString()}
                </p>
                {log.status === 'Failed' && (
                  <span className="flex items-center gap-1 text-red-500 text-[10px] font-bold">
                    <AlertTriangle size={10} /> FLAG TRIGGERED
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}