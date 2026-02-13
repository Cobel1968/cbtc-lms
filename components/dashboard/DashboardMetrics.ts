'use client';
import React, { useEffect, useState } from 'react';
import { BarChart, Clock, BookOpen, Activity } from 'lucide-react';

export default function DashboardMetrics() {
    const [metrics, setMetrics] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/dashboard-metrics')
            .then(res => res.json())
            .then(data => {
                setMetrics(data.curriculum_metrics);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-8 text-center animate-pulse">Initialisation du Cobel AI Engine...</div>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">Cobel AI Optimization Hub</h1>
                <p className="text-slate-500">Temporal Optimization & Curriculum Density Analytics</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(metrics).map(([course, data]: any) => (
                    <div key={course} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-slate-700 w-2/3">{course}</h3>
                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                                {data.module_count} Modules
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center text-slate-600">
                                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                                <span className="text-sm">Charge horaire : <strong>{data.total_hours}h</strong></span>
                            </div>
                            
                            <div className="flex items-center text-slate-600">
                                <BarChart className="w-4 h-4 mr-2 text-green-500" />
                                <span className="text-sm">Densité ECTS : <strong>{data.total_ects}</strong></span>
                            </div>

                            {/* Barre de progression visuelle pour la Densité */}
                            <div className="mt-4">
                                <div className="flex justify-between text-xs mb-1 text-slate-400">
                                    <span>Densité du Curriculum</span>
                                    <span>{Math.round((data.total_ects / 60) * 100)}%</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div 
                                        className="bg-blue-500 h-full transition-all duration-1000" 
                                        style={{ width: `${Math.min((data.total_ects / 60) * 100, 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <footer className="mt-12 p-4 bg-slate-800 text-white rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-green-400" />
                    <span className="text-sm font-mono">Bilingual Engine Status: Operational</span>
                </div>
                <span className="text-xs opacity-50">© 2026 Cobel Business Training Center</span>
            </footer>
        </div>
    );
}