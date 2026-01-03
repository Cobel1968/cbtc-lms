'use client'

import { useState, useRef } from 'react'
import { 
  FolderOpen, PenTool, ClipboardCheck, FileText, 
  Send, MessageSquare, Download, Eye, ChevronRight,
  User, LayoutDashboard, Settings, LogOut, Search,
  Zap, Clock, Languages
} from 'lucide-react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import ReportTemplate from '@/app/components/dashboard/ReportTemplate'

// Mock Data for the 2026 Innovation Demo
const MOCK_STUDENTS = [
  { id: '1', name: 'Koffi Aruna', track: 'Solar Technology', speed: '1.4x', saved: '12h', status: 'In Workshop' },
  { id: '2', name: 'Soro Aminata', track: 'Electrical Systems', speed: '0.9x', saved: '0h', status: 'Reviewing' },
  { id: '3', name: 'Yao Kouadio', track: 'Solar Technology', speed: '2.1x', saved: '28h', status: 'Fast-Track' },
]

export default function TrainerDashboard() {
  const [activeTab, setActiveTab] = useState<'roster' | 'folders' | 'reports'>('roster')
  const [selectedStudent, setSelectedStudent] = useState<any>(null)
  const reportRef = useRef<HTMLDivElement>(null)

  // PDF Generation Logic - Branded for Cobel Business Training Center
  const handleDownloadReport = async (student: any) => {
    setSelectedStudent(student)
    // Small delay to ensure the hidden template is populated
    setTimeout(async () => {
      const element = reportRef.current
      if (!element) return

      const canvas = await html2canvas(element, { scale: 2 })
      const data = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      })

      pdf.addImage(data, 'PNG', 0, 0, canvas.width, canvas.height)
      pdf.save(`Cobel_Report_${student.name.replace(/\s+/g, '_')}.pdf`)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar Navigation - Fixed for Desktop */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col">
        <div className="p-8">
          <h2 className="text-xl font-black text-indigo-900 tracking-tighter">COBEL AI ENGINE</h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Instructor Portal</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Overview" active={activeTab === 'roster'} onClick={() => setActiveTab('roster')} />
          <NavItem icon={<User size={20}/>} label="Student Folders" active={activeTab === 'folders'} onClick={() => setActiveTab('folders')} />
          <NavItem icon={<FileText size={20}/>} label="Verification Reports" active={activeTab === 'reports'} onClick={() => setActiveTab('reports')} />
          <NavItem icon={<Languages size={20}/>} label="Bilingual Mapping" />
        </nav>

        <div className="p-6 border-t">
          <button className="flex items-center gap-3 text-slate-400 font-bold text-sm hover:text-red-500 transition-colors w-full">
            <LogOut size={20}/> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto relative">
        {/* Innovation Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Training Management</h1>
            <p className="text-slate-500 font-medium italic">Powered by Computer-Implemented Pedagogical Logic</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-xs font-bold border border-emerald-100 flex items-center gap-2">
              <Zap size={14} fill="currentColor"/> +42h optimized this week
            </div>
          </div>
        </header>

        {/* Navigation Tabs (Mobile & Desktop) */}
        <div className="flex gap-8 mb-8 border-b border-slate-200 overflow-x-auto">
          {['roster', 'folders', 'reports'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-4 text-sm font-bold tracking-tight whitespace-nowrap capitalize transition-all ${activeTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400'}`}
            >
              {tab === 'roster' ? 'Cohort Roster' : tab === 'folders' ? 'Student Work' : 'AI Reports'}
            </button>
          ))}
        </div>

        {/* Tab Content: ROSTER */}
        {activeTab === 'roster' && (
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-x-auto animate-in fade-in duration-500">
            <table className="w-full text-left min-w-[600px]">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Student</th>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Track</th>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">AI Speed Index</th>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MOCK_STUDENTS.map(student => (
                  <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-bold text-slate-800">{student.name}</td>
                    <td className="p-6 text-sm text-slate-500 font-medium">{student.track}</td>
                    <td className="p-6">
                      <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 w-fit">
                        <Zap size={10} fill="currentColor" /> {student.speed}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <button onClick={() => {setSelectedStudent(student); setActiveTab('folders')}} className="text-indigo-600 font-bold text-xs hover:underline">View Portfolio</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab Content: FOLDERS (Analog-to-Digital Hub) */}
        {activeTab === 'folders' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="lg:col-span-1 space-y-4">
              <h3 className="font-bold text-slate-800 mb-4">Select Portfolio</h3>
              {MOCK_STUDENTS.map(s => (
                <div 
                  key={s.id} 
                  onClick={() => setSelectedStudent(s)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${selectedStudent?.id === s.id ? 'bg-indigo-50 border-indigo-200 shadow-sm' : 'bg-white border-slate-100 hover:border-indigo-100'}`}
                >
                  <div className="flex items-center gap-3">
                    <FolderOpen size={20} className={selectedStudent?.id === s.id ? 'text-indigo-600' : 'text-slate-400'} />
                    <span className="text-sm font-bold">{s.name}</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-300" />
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              {selectedStudent ? (
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b bg-slate-50/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                       <User size={18} className="text-indigo-600" />
                       Work Portfolio: {selectedStudent.name}
                    </h4>
                    <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-1 rounded font-black uppercase tracking-widest">{selectedStudent.track}</span>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ingested Submissions</p>
                      <SubmissionItem title="Solar Panel Wiring Diagram.pdf" date="Oct 12, 2025" type="Analog Scan" />
                      <SubmissionItem title="Workshop Safety Quiz.docx" date="Oct 10, 2025" type="Digital" isMarked />
                    </div>
                    <div className="pt-6 border-t border-slate-100">
                      <h5 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <PenTool size={18} className="text-indigo-600" /> Analog-to-Digital Bridge
                      </h5>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase">Technical Score</label>
                          <input type="number" placeholder="88" className="p-3 bg-slate-50 border rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-600/20" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase">Bilingual Level</label>
                          <select className="p-3 bg-slate-50 border rounded-xl text-sm font-bold">
                            <option>Intermediate (B1)</option>
                            <option>Advanced (C1)</option>
                          </select>
                        </div>
                      </div>
                      <textarea placeholder="Instructor feedback for the Cobel Engine..." className="w-full p-4 bg-slate-50 border rounded-2xl min-h-[100px] text-sm mb-4 outline-none focus:ring-2 focus:ring-indigo-600/20" />
                      <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all">
                        <ClipboardCheck size={18} /> Update Student Milestones
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[400px] flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-3xl">
                  <Eye size={48} className="mb-4 opacity-10" />
                  <p className="font-medium">Select a student portfolio to process assessments</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab Content: REPORTS (Temporal Optimization View) */}
        {activeTab === 'reports' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {MOCK_STUDENTS.map(student => (
              <div key={student.id} className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-black text-slate-900 leading-tight">{student.name}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{student.track}</p>
                  </div>
                  <div className="bg-indigo-600 text-white text-[10px] px-2 py-1 rounded font-bold">{student.speed}</div>
                </div>
                <div className="space-y-2 mb-6 border-y border-slate-50 py-4">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-400">Time Optimized:</span>
                    <span className="text-emerald-600">+{student.saved}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-400">Competency:</span>
                    <span className="text-slate-700">Verified</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleDownloadReport(student)}
                  className="w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors"
                >
                  <Download size={14} /> Sync Verification PDF
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Floating Mobile Action Button for Handwriting Scans */}
        <button className="fixed bottom-8 right-8 lg:hidden bg-indigo-600 text-white p-5 rounded-full shadow-2xl border-4 border-white active:scale-90 transition-transform z-50">
          <PenTool size={32} />
        </button>

        {/* HIDDEN REPORT TEMPLATE (Off-screen capture) */}
        <div className="absolute left-[-9999px] top-0 pointer-events-none">
          <div ref={reportRef}>
            <ReportTemplate 
              studentName={selectedStudent?.name || "Candidate Name"}
              track={selectedStudent?.track || "Technical Track"}
              hoursSaved={parseInt(selectedStudent?.saved) || 0}
              technicalMastery={88}
              bilingualLevel="Intermediate (B1)"
              completionDate="Dec 12, 2026"
              skills={["Solar Wiring", "Bilingual Safety", "Voltage Mapping"]}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

function NavItem({ icon, label, active = false, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}
    >
      {icon}
      <span className="text-sm font-bold tracking-tight">{label}</span>
    </div>
  )
}

function SubmissionItem({ title, date, type, isMarked = false }: any) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50/50 border border-slate-100 rounded-xl group">
      <div className="flex items-center gap-3">
        <FileText size={18} className="text-slate-400" />
        <div>
          <p className="text-xs font-bold text-slate-800">{title}</p>
          <p className="text-[10px] text-slate-400 uppercase font-medium">{type} • {date}</p>
        </div>
      </div>
      <button className="text-slate-300 hover:text-indigo-600 transition-colors"><Eye size={16} /></button>
    </div>
  )
}