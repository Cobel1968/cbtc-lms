'use client';
import { useRouter } from 'next/navigation';

interface PortalLinkProps {
  title: string;
  path: string;
  color: string;
}

export default function PortalLink({ title, path, color }: PortalLinkProps) {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push(path)}
      className={`p-6 border-2 border-slate-100 rounded-[2rem] bg-white transition-all shadow-sm flex flex-col items-center justify-center text-center group ${color}`}
    >
      <span className="text-[10px] font-black text-[#003366] uppercase tracking-tighter mb-2 group-hover:text-[#E91E63]">
        {title}
      </span>
      <div className="w-8 h-1 bg-slate-100 group-hover:bg-[#E91E63] transition-all rounded-full"></div>
    </button>
  );
}
