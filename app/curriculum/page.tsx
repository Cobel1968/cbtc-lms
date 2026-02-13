'use client';
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function CurriculumPage() {
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchModules() {
            const { data, error } = await supabase
                .from('modules')
                .select('*')
                .order('title_en', { ascending: true });
            
            if (!error && data) setModules(data);
            setLoading(false);
        }
        fetchModules();
    }, []);

    if (loading) return <div className="p-8 text-center">Initialisation de Cobel AI...</div>;

    return (
        <div className="p-8 font-sans">
            <h1 className="text-3xl font-bold mb-4">Adaptive Curriculum</h1>
            <p className="mb-6 text-gray-600">
                Core Engine: {modules.length} Modules chargés par Temporal Optimization
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {modules.map(mod => (
                    <div key={mod.id} className="border p-4 rounded shadow-sm bg-white hover:border-blue-500 transition-colors">
                        <h2 className="text-lg font-semibold">{mod.title_en}</h2>
                        <p className="text-sm text-blue-600 italic">{mod.title_fr}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="px-2 py-1 bg-gray-100 text-xs rounded uppercase font-bold text-gray-500">
                                Vocational
                            </span>
                            <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-800">
                                ANALYSER
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
