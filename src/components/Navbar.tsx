"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-slate-800">
        CBTC LMS
      </h1>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/courses" className="hover:text-blue-600">Courses</Link>
        <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>
      </div>
    </nav>
  );
}

