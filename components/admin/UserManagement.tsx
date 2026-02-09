"use client"
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { UserPlus, Shield, Briefcase, FileText } from 'lucide-react'

export default function UserManagement() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => { fetchUsers() }, [])

  const fetchUsers = async () => {
    const { data } = await supabase.from('profiles').select('*')
    if (data) setUsers(data)
  }

  const updateRole = async (userId: string, newRole: string) => {
    await supabase.from('profiles').update({ role: newRole }).eq('id', userId)
    fetchUsers()
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <UserPlus className="text-blue-600" /> User & Role Management
        </h2>
      </div>

      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <p className="font-bold text-slate-800">{user.full_name || 'New Enrollee'}</p>
              <p className="text-xs text-slate-500">{user.id.substring(0,8)}...  {user.role}</p>
            </div>
            <div className="flex gap-2">
              <select 
                className="text-xs border rounded-lg p-1"
                value={user.role} 
                onChange={(e) => updateRole(user.id, e.target.value)}
              >
                <option value="student">Student</option>
                <option value="trainer">Trainer</option>
                <option value="admin">Admin</option>
              </select>
              <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg" title="Send Contract">
                <FileText size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}