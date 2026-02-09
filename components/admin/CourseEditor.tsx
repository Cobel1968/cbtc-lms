"use client"
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Edit3, Plus, Save, Trash2, Layout } from 'lucide-react'

export default function CourseEditor() {
  const [courses, setCourses] = useState<any[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({ title: '', category: '', total_hours: 5 })

  useEffect(() => { fetchCourses() }, [])

  const fetchCourses = async () => {
    const { data } = await supabase.from('courses').select('*').order('created_at', { ascending: false })
    if (data) setCourses(data)
  }

  const handleSave = async () => {
    if (editingId) {
      await supabase.from('courses').update(formData).eq('id', editingId)
    } else {
      await supabase.from('courses').insert([formData])
    }
    setEditingId(null)
    setFormData({ title: '', category: '', total_hours: 5 })
    fetchCourses()
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-8">
      <div className="flex items-center gap-2 mb-6 text-slate-800">
        <Layout className="text-blue-600" />
        <h2 className="text-xl font-bold">Course Content Manager</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8 bg-slate-50 p-4 rounded-xl">
        <input className="p-2 border rounded-lg" placeholder="Course Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
        <input className="p-2 border rounded-lg" placeholder="Category" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
        <input className="p-2 border rounded-lg" type="number" placeholder="Hours" value={formData.total_hours} onChange={e => setFormData({...formData, total_hours: parseInt(e.target.value)})} />
        <button onClick={handleSave} className="bg-green-600 text-white p-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-700">
          {editingId ? <Save size={18} /> : <Plus size={18} />} {editingId ? 'Update' : 'Add Course'}
        </button>
      </div>

      <div className="space-y-3">
        {courses.map(course => (
          <div key={course.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-slate-50 transition">
            <div>
              <h4 className="font-bold text-slate-800">{course.title}</h4>
              <p className="text-xs text-slate-500">{course.category}  {course.total_hours} Hours</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => { setEditingId(course.id); setFormData(course); }} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit3 size={18} /></button>
              <button onClick={async () => { await supabase.from('courses').delete().eq('id', course.id); fetchCourses(); }} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}