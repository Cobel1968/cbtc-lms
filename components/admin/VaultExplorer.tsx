"use client";

import React, { useState } from 'react';
import { ShieldCheck, Download, Search, FileArchive } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function VaultExplorer() {
  const [studentId, setStudentId] = useState('');
  const [files, setFiles] = useState<any[]>([]);

  const fetchVaultFiles = async () => {
    // Admin-only retrieval logic for the Evidence Vault
    const { data, error } = await supabase.storage
      .from('evidence-vault')
      .list(studentId);

    if (!error) setFiles(data || []);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-500/20 rounded-lg">
          <ShieldCheck className="text-amber-500" size={20} />
        </div>
        <h3 className="font-black uppercase tracking-tighter italic">Compliance Evidence Vault</h3>
      </div>

      <div className="flex gap-2 mb-6">
        <input 
          type="text" 
          placeholder="ENTER STUDENT ID (e.g., ABEL-C-001)"
          className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-amber-500"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button 
          onClick={fetchVaultFiles}
          className="bg-amber-500 text-slate-900 px-6 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all"
        >
          Retrieve
        </button>
      </div>

      <div className="space-y-2">
        {files.length === 0 ? (
          <p className="text-[9px] text-slate-500 uppercase font-bold text-center py-8">No compliance records found for this ID</p>
        ) : (
          files.map((file) => (
            <div key={file.id} className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-700 rounded-xl">
              <div className="flex items-center gap-3">
                <FileArchive size={16} className="text-slate-500" />
                <span className="text-[10px] font-bold tracking-tight">{file.name}</span>
              </div>
              <button className="text-amber-500 hover:text-white transition-colors">
                <Download size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}