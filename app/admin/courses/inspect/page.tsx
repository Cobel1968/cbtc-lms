import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';

export default function pagePage() {
  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-4">Admin: page</h1>
      </div>
    </div>
  );
}
