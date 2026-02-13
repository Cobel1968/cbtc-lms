'use client';
import { useEffect, useState } from 'react';
import { ShieldCheck, Download, Home, LayoutDashboard, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { QRCodeSVG } from 'qrcode.react';

export default function CertificatePage() {
  const [verificationUrl, setVerificationUrl] = useState('');

  useEffect(() => {
    // URL dynamique basée sur le domaine actuel pour le QR Code
    if (typeof window !== 'undefined') {
      const baseUrl = window.location.origin;
      setVerificationUrl(\/transcript); 
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* BARRE DE NAVIGATION UNIFIÉE */}
      <nav className="bg-white border-b px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <Link href="/menu" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </Link>
          <Logo className="h-8 w-auto text-slate-800" />
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/menu" className="p-2 hover:bg-slate-100 rounded-lg text-slate-600" title="Accueil">
            <Home className="w-5 h-5" />
          </Link>
          <Link href="/dashboard" className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        {/* LE DIPLÔME OFFICIEL */}
        <div className="max-w-4xl w-full bg-white border-[16px] border-slate-900 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          <Logo className="absolute -bottom-16 -right-16 h-80 w-80 opacity-[0.03] -rotate-12" />
          
          <div className="border-2 border-slate-100 p-6 md:p-10 text-center relative">
            <Logo className="h-12 w-auto mx-auto mb-8 text-slate-900" />
            
            <h1 className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
              Certificat de Compétence Professionnelle
            </h1>
            
            <div className="mb-10">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Abel C.</h2>
              <div className="h-1.5 w-32 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <p className="text-slate-500 max-w-lg mx-auto text-base italic font-serif mb-12">
              A validé avec succès l'ensemble des modules bilingues via le moteur d'apprentissage adaptatif Cobel AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mt-16">
              <div className="text-left border-t border-slate-200 pt-4">
                <p className="text-[9px] uppercase font-black text-slate-400 tracking-widest">Délivré le</p>
                <p className="text-sm font-bold text-slate-800">12 Fév 2026</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white p-1.5 border border-slate-200 rounded-lg shadow-sm">
                  {verificationUrl && (
                    <QRCodeSVG value={verificationUrl} size={85} level="H" />
                  )}
                </div>
                <p className="text-[8px] uppercase font-bold text-slate-400 mt-3">Verify Authenticity</p>
              </div>

              <div className="text-right border-t border-slate-200 pt-4">
                <p className="text-[9px] uppercase font-black text-slate-400 tracking-widest">ID Unique</p>
                <p className="text-sm font-mono font-bold text-slate-800">CBTC-70MOD-99</p>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-8 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-2xl font-bold flex items-center space-x-2 hover:bg-slate-50 transition-all shadow-sm">
          <Download className="w-5 h-5 text-blue-600" />
          <span>Exporter en PDF</span>
        </button>
      </main>
    </div>
  );
}
