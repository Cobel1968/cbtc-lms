'use client';
import { CobelDB } from '@/lib/db-service';
import React, { useEffect, useState } from 'react';

export default function TrainerPortal() {
  const [scans, setScans] = useState([]);
  useEffect(() => { const load = async () => setScans(await CobelDB.getVault()); load(); }, []);
  return (
    <div className="p-10 bg-white min-h-screen text-[#003366]">
      <h1 className="text-3xl font-black italic uppercase">Lead Trainer: Abel C.</h1>
      <p className="text-xs font-bold opacity-50 mb-10">Sign-off Authority for {scans.length} Artifacts</p>
      {/* Logic to approve/sign scans here */}
    </div>
  );
}
