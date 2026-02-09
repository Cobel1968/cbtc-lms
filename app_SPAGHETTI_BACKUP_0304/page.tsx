import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white font-sans">
      <div className="max-w-4xl text-center space-y-12 p-6">
        <div className="space-y-4">
          <h1 className="text-8xl font-black tracking-tighter uppercase italic">
            Cobel <span className="text-amber-500">LMS</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-sm">
            Adaptive Learning Algorithm // Vocational Excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          <Link href="/student" className="group p-8 border border-slate-800 rounded-3xl hover:border-amber-500 transition-all bg-slate-900/50">
            <h3 className="text-amber-500 font-black uppercase mb-2">Student</h3>
            <p className="text-xs text-slate-500 group-hover:text-slate-300 italic">Access Adaptive Path</p>
          </Link>

          <Link href="/trainer" className="group p-8 border border-slate-800 rounded-3xl hover:border-amber-500 transition-all bg-slate-900/50">
            <h3 className="text-amber-500 font-black uppercase mb-2">Trainer</h3>
            <p className="text-xs text-slate-500 group-hover:text-slate-300 italic">Audit Assessments</p>
          </Link>

          <Link href="/admin" className="group p-8 border border-slate-800 rounded-3xl hover:border-slate-400 transition-all bg-slate-900/50">
            <h3 className="text-slate-400 font-black uppercase mb-2">Admin</h3>
            <p className="text-xs text-slate-500 group-hover:text-slate-300 italic">System Optimization</p>
          </Link>
        </div>

        <div className="pt-20 border-t border-slate-900">
           <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
             Project: Cobel Business Training Center (LMS)
           </p>
        </div>
      </div>
    </div>
  );
}