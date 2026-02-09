"use client"
import dynamic from 'next/dynamic'
import TopNav from '@/components/TopNav'
import CourseSidebar from "@/components/CourseSidebar"

const PortalDashboard = dynamic(() => import('@/components/portal/PortalDashboard'), { 
  ssr: false, 
  loading: () => <div className="p-8 bg-slate-100 animate-pulse rounded-xl">Optimizing Curriculum Density...</div>
})

export default function StudentPortal() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="flex">
        <CourseSidebar />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6 text-slate-800">Student Portal</h1>
          <PortalDashboard studentData={null} />
        </main>
      </div>
    </div>
  )
}