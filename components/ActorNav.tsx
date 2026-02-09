"use client";
import Link from 'next/link';

export default function ActorNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 p-4 rounded-full z-50">
      <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
        <Link href="/" className="hover:text-amber-500">Home</Link>
        <Link href="/trainer" className="hover:text-amber-500">Trainer</Link>
        <Link href="/student" className="hover:text-amber-500">Student</Link>
      </div>
    </nav>
  );
}