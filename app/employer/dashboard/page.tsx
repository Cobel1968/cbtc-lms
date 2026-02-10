"use client"
import React, { useEffect, useState } from 'react'
import TopNav from '@/components/TopNav'
import { supabase } from '@/lib/supabase'
import { Users, Clock, Book, Plus, X, BrainCircuit } from 'lucide-react'

export default function EmployerDashboard() {
  const [students, setStudents] = useState([])
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [showEnrol, setShowEnrol] = useState(false)
  const [newStudent, setNewStudent] = useState({ name: '', course_id: '' })

  useEffect(() => {
    async function loadData() {
      try {
        const { data: stdData } = await supabase.from('employer_student_view').select('*')
        const { data: crsData } = await supabase.from('courses').select('*')
        
        if (stdData) setStudents(stdData)
        if (crsData) {
          setCourses(crsData)
          setNewStudent(prev => ({ ...prev, course_id: crsData[0]?.id || '' }))
        }
      } catch (err) {
        console.error("Data Load Error:", err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const handleEnrol = async (e) => {
    e.preventDefault()
    if (!newStudent.name || !newStudent.course_id) return alert("Please fill all fields")

    const { error } = await supabase.from('user_progress').insert([{ 
      milestone_name: newStudent.name,
      course_id: newStudent.course_id,
      original_days: 14,
      optimized_days: 14
    }])

    if (!error) {
      setShowEnrol(false)
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <TopNav />
      <main className="max-w-7xl mx-auto py-12 px-8">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter text-[#003366]">Partner Portal</h1>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2">Cobel AI Engine</p>
          </div>
          <div className="flex gap-4">
             <button 
              onClick={() => {
                if (courses?.length > 0) window.location.href = `/courses/${courses[0].id}/analysis`
                else alert("Curriculum still loading...")
              }}
              className="bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2"
            >
              <BrainCircuit size={14} /> Preview Engine
            </button>
            <button onClick={() => setShowEnrol(true)} className="bg-[#003366] text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-blue-100">
              <Plus size={14} /> Enrol Student
            </button>
          </div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-50 p-10 rounded-[40px]">
            <Users className="text-blue-600 mb-4" size={24} />
            <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Total Workforce</h3>
            <p className="text-5xl font-black mt-2">{loading ? "..." : students.length}</p>
          </div>
          <div className="bg-slate-50 p-10 rounded-[40px]">
            <Clock className="text-green-600 mb-4" size={24} />
            <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Temporal Optimization</h3>
            <p className="text-5xl font-black mt-2">Active</p>
          </div>
        </div>

        {/* Student Table */}
        <div className="overflow-hidden bg-white border border-slate-100 rounded-[40px]">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-6 font-black text-[10px] uppercase tracking-widest text-slate-400">Student</th>
                <th className="px-8 py-6 font-black text-[10px] uppercase tracking-widest text-slate-400">Curriculum Path</th>
                <th className="px-8 py-6 font-black text-[10px] uppercase tracking-widest text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {students.map((s, i) => (
                <tr key={i}>
                  <td className="px-8 py-6 font-bold">{s.student_name}</td>
                  <td className="px-8 py-6">
                    <span className="text-blue-600 font-bold text-xs">{s.course_title || 'General Path'}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-blue-50 text-blue-600 text-[9px] font-black uppercase px-3 py-1 rounded-full">In Training</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Enrolment Modal */}
        {showEnrol && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <form onSubmit={handleEnrol} className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 text-[#003366]">New Enrolment</h2>
              <input 
                type="text" placeholder="Student Name" required
                className="w-full p-4 bg-slate-50 rounded-2xl mb-4 font-bold"
                onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
              />
              <select 
                className="w-full p-4 bg-slate-50 rounded-2xl mb-6 font-bold"
                onChange={(e) => setNewStudent({...newStudent, course_id: e.target.value})}
              >
                {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
              </select>
              <div className="flex gap-3">
                <button type="button" onClick={() => setShowEnrol(false)} className="flex-1 py-4 font-bold text-slate-400">Cancel</button>
                <button type="submit" className="flex-[2] bg-[#003366] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest">Confirm</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}
