'use client';
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseDB';

export default function NavigationController() {
  const router = useRouter();
  const pathname = usePathname();
  const [role, setRole] = useState('student');
  const [queueCount, setQueueCount] = useState(0);

  useEffect(() => {
    // 1. Determine Role
    if ((pathname.startsWith('/admin') || pathname.startsWith('/enrollment'))) {
      setRole('trainer');
      // 2. If Trainer, check for pending diagnostics
      const checkQueue = async () => {
        const { count, error } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true })
          .eq('diagnostic_status', 'pending');
        
        if (!error) setQueueCount(count || 0);
      };
      checkQueue();
      const interval = setInterval(checkQueue, 30000); // Check every 30s
      return () => clearInterval(interval);
    }
  }, [pathname]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 bg-white/95 backdrop-blur-2xl p-3 rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-slate-200">
      <button onClick={() => router.back()} className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-[#003366] font-black text-[10px] uppercase rounded-full transition-all"></button>

      <div className="relative">
        <button 
          onClick={() => window.location.href = role === 'student' ? '/student/dashboard' : '/admin'}
          className={`px-10 py-3 font-black text-[10px] uppercase rounded-full transition-all shadow-lg ${
            role === 'trainer' ? 'bg-[#003366] text-white' : 'bg-[#E91E63] text-white'
          }`}
        >
          {role === 'trainer' ? 'Admin Console' : 'Student Home'}
        </button>
        
        {/* LIVE STATUS LIGHT (Visible to Trainers Only) */}
        {role === 'trainer' && queueCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 text-[10px] text-white items-center justify-center font-black">
              {queueCount}
            </span>
          </span>
        )}
      </div>

      <button onClick={() => window.history.forward()} className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-[#003366] font-black text-[10px] uppercase rounded-full transition-all"></button>
    </div>
  );
}




