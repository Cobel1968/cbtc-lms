import React from 'react';
import Link from 'next/link';
export default function Sidebar() {
  return (
    <nav className="p-4 bg-slate-800 text-white min-h-screen w-64">
      <h2 className="font-bold border-b border-slate-700 mb-4">Admin Audit</h2>
      <ul className="space-y-2 text-sm">
        <li><Link href="/admin/integrity">System Integrity</Link></li>
        <li><Link href="/admin/audit">Activity Logs</Link></li>
      </ul>
    </nav>
  );
}

