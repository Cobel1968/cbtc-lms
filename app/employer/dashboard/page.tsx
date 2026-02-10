"use client"
import React, { useEffect, useState } from 'react'
import TopNav from '@/components/TopNav'
import { supabase } from '@/lib/supabase'
import { Users, Clock, CheckCircle, ArrowUpRight, Plus, Book, X } from 'lucide-react'

export default function EmployerDashboard() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [showEnrol, setShowEnrol] = useState(false)
  const [newStudent, setNewStudent] = useState({ name: '', milestone: 'Mechanical Diagnostic' })

  const fetchStudents = async () => {
    setLoading(true)
    const { data, error } = await supabase.from('user_progress').select('milestone_name, original_days, optimized_days, is_fast_tracked').order('created_at', { ascending: false })
    if (!error && data) setStudents(data)
    setLoading(false)
  }

  useEffect(() => { fetchStudents() }, [])

  const handleEnrol = async (e) => {
    e.preventDefault()
    const { error } = await supabase.from('user_progress').insert([
      { 
        milestone_name: `${newStudent.name} - ${newStudent.milestone}`,
        original_days: 14,
        optimized_days: 14,
        is_fast_tracked: false
      }
    ])
    if (!error) {
      setShowEnrol(false)
      fetchStudents()
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <TopNav />
      
      <main className="max-w-7xl mx-auto py-12 px-8">
        <header className="flex flex-col md:row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter text-[#003366]">Partner Portal</h1>
            <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mt-2">Cobel AI Engine Management</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => window.location.href='/curriculum'} className="bg-slate-100 text-slate-900 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-200 transition">
              <Book size={14} /> View Curriculum
            </button>
            <button onClick={() => setShowEnrol(true)} className="bg-[#003366] text-white px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-xl hover:bg-blue-800 transition">
              <Plus size={14} /> Enrol Student
            </button>
          </div>
        </header>

        {/* Stats and Table from previous version go here... */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
            <Users className="text-blue-600 mb-4" size={24} />
            <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Total Workforce</h3>
            <p className="text-4xl font-black mt-1">{loading ? "..." : students.length}</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
            <Clock className="text-green-600 mb-4" size={24} />
            <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Time Optimized</h3>
            <p className="text-4xl font-black mt-1">{students.reduce((acc, curr) => acc + (curr.original_days - curr.optimized_days), 0)} Days</p>
          </div>
        </div>

        {/* Enrolment Modal Overlay */}
        {showEnrol && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200] flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl relative animate-in zoom-in duration-200">
              <button onClick={() => setShowEnrol(false)} className="absolute right-8 top-8 text-slate-300 hover:text-slate-900"><X size={24}/></button>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">New Enrolment</h2>
              <p className="text-slate-400 text-xs mb-8">Initiate the Analog-to-Digital path for a new student.</p>
              
              <form onSubmit={handleEnrol} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Student Full Name" 
                  required
                  className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none font-bold"
                  onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                />
                <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-500">
                   <option>Mechanical Fundamentals</option>
                   <option>Bilingual Technical Mapping</option>
                </select>
                <button type="submit" className="w-full bg-[#003366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg">Confirm Enrolment</button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
