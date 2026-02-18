"use client";

import Link from "next/link";
import { LayoutDashboard, ClipboardCheck, BookOpen } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm min-h-screen p-6 hidden md:block">
      <h2 className="text-lg font-black text-slate-900 uppercase mb-8">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-6 text-sm font-medium">
        <Link
          href="/admin"
          className="flex items-center gap-3 text-slate-700 hover:text-blue-600"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/admin/audit/readiness"
          className="flex items-center gap-3 text-slate-700 hover:text-blue-600"
        >
          <ClipboardCheck size={18} />
          Readiness Audit
        </Link>

        <Link
          href="/courses"
          className="flex items-center gap-3 text-slate-700 hover:text-blue-600"
        >
          <BookOpen size={18} />
          Courses
        </Link>
      </nav>
    </aside>
  );
}

