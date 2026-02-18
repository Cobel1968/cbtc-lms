'use client';
import Link from 'next/link';
import { Shield, Activity, Globe } from 'lucide-react';

export default function TopNav() {
  return (
    <nav className="w-full bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-slate-800 tracking-tight">COBEL ENGINE</span>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
        <Link href="/menu" className="hover:text-blue-600 transition-colors">Hub</Link>
        <Link href="/dashboard" className="hover:text-blue-600 transition-colors">Analytics</Link>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-100">
          <Activity className="w-3.5 h-3.5" />
          <span className="text-xs uppercase font-bold">AI Engine Active</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <Globe className="w-4 h-4" />
          <span className="text-xs">FR | EN</span>
        </div>
      </div>
    </nav>
  );
}
