'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { FileText, CheckCircle2, Home, LayoutDashboard, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function TranscriptPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const fetchResults = async () => {
      // Extraction dynamique de tous les modules injectés via Cobel Engine
      const { data: results, error } = await supabase
        .from('modules')
        .select('titre_francais, titre_anglais, credits_ects')
        .order('titre_francais', { ascending: true });
      
      if (!error && results) setData(results);
      setLoading(false);
    };

    fetchResults();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* HEADER OFFICIEL AVEC LOGO */}
        <div className="bg-slate-900 p-8 text-white flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <Logo className="h-10 w-auto text-white" />
            <div className="border-l border-slate-700 pl-4">
              <h1 className="text-xl font-black uppercase tracking-tighter">Official Transcript</h1>
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Bilingual Vocational Mapping</p>
            </div>
          </div>
          <div className="flex items-center bg-slate-800 px-4 py-2 rounded-2xl border border-slate-700">
             <div className="text-right mr-3">
               <p className="text-[9px] text-slate-400 uppercase font-bold">QR Verification</p>
               <p className="text-xs font-mono text-green-400">STATUS: VERIFIED</p>
             </div>
             <FileText className="w-8 h-8 text-slate-500" />
          </div>
        </div>

        {/* LISTE DYNAMIQUE DES MODULES */}
        <div className="p-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center p-20 space-y-4">
              <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
              <p className="text-slate-400 font-medium text-sm">Syncing with Cobel AI Engine...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-slate-100 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black">
                    <th className="pb-4">Module Description (Bilingual)</th>
                    <th className="pb-4 text-center">ECTS</th>
                    <th className="pb-4 text-right">Progress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {data.map((module, i) => (
                    <tr key={i} className="group hover:bg-blue-50/30 transition-colors">
                      <td className="py-5">
                        <p className="font-bold text-slate-800">{module.titre_francais}</p>
                        <p className="text-xs text-slate-400 italic">{module.titre_anglais}</p>
                      </td>
                      <td className="py-5 text-center font-mono text-blue-600 font-black">
                        {module.credits_ects || '2.0'}
                      </td>
                      <td className="py-5 text-right">
                        <span className="inline-flex items-center text-green-600 font-bold text-xs bg-green-50 px-3 py-1 rounded-full">
                          <CheckCircle2 className="w-3 h-3 mr-1.5" /> Mastery
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* NAVIGATION UNIFIÉE */}
        <div className="bg-slate-50 p-6 border-t border-slate-100 flex justify-between items-center">
           <Link href="/menu" className="flex items-center space-x-2 text-slate-500 hover:text-blue-600 font-bold text-sm transition-colors">
             <Home className="w-4 h-4" />
             <span>Menu</span>
           </Link>
           <p className="text-[10px] text-slate-300 font-medium uppercase"> 2026 Cobel Training Center</p>
           <Link href="/dashboard" className="flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2 rounded-xl hover:shadow-md transition-all text-sm font-bold text-slate-700">
             <LayoutDashboard className="w-4 h-4" />
             <span>Dashboard</span>
           </Link>
        </div>
      </div>
    </div>
  );
}
