"use client"
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Plus, Trash2, BookOpen } from 'lucide-react'

export default function AdminDictionary() {
  const [terms, setTerms] = useState<any[]>([])
  const [newTerm, setNewTerm] = useState({ term_en: '', term_fr: '', module_association: '' })

  useEffect(() => {
    fetchTerms()
  }, [])

  const fetchTerms = async () => {
    const { data } = await supabase.from('vocational_dictionary').select('*').order('created_at', { ascending: false })
    if (data) setTerms(data)
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.from('vocational_dictionary').insert([newTerm])
    if (!error) {
      setNewTerm({ term_en: '', term_fr: '', module_association: '' })
      fetchTerms()
    }
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center gap-2 mb-6 text-slate-800">
        <BookOpen className="text-blue-600" />
        <h2 className="text-xl font-bold">Bilingual Technical Mapping</h2>
      </div>

      <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <input className="p-2 border rounded-lg" placeholder="English Term" value={newTerm.term_en} onChange={e => setNewTerm({...newTerm, term_en: e.target.value})} required />
        <input className="p-2 border rounded-lg" placeholder="French Term" value={newTerm.term_fr} onChange={e => setNewTerm({...newTerm, term_fr: e.target.value})} required />
        <input className="p-2 border rounded-lg" placeholder="Module Association" value={newTerm.module_association} onChange={e => setNewTerm({...newTerm, module_association: e.target.value})} required />
        <button className="bg-blue-600 text-white p-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700">
          <Plus size={18} /> Add Term
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-slate-400 text-sm">
              <th className="pb-3">English (EN)</th>
              <th className="pb-3">French (FR)</th>
              <th className="pb-3">Module Affected</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {terms.map(term => (
              <tr key={term.id} className="border-b last:border-0">
                <td className="py-4 font-medium">{term.term_en}</td>
                <td className="py-4 italic">{term.term_fr}</td>
                <td className="py-4"><span className="bg-slate-100 px-2 py-1 rounded text-xs">{term.module_association}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}