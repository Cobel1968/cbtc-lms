'use client';
import { CobelDB } from '@/lib/db-service';
import React, { useEffect, useState } from 'react';

export default function StudentRecord() {
  const [data, setData] = useState({ allScans: [] });
  useEffect(() => { 
    const raw = localStorage.getItem('COBEL_V1_DATA');
    if (raw) setData(JSON.parse(raw));
  }, []);
  
  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <h2 className="text-2xl font-black uppercase tracking-tighter text-[#003366]">Student: Mr. Soro</h2>
      <div className="mt-6 p-6 bg-white border border-slate-200 rounded-3xl">
        <p className="text-[10px] font-black uppercase text-slate-400">Total Validated Evidence</p>
        <p className="text-4xl font-black">{data.allScans?.length || 0} Documents</p>
      </div>
    </div>
  );
}
