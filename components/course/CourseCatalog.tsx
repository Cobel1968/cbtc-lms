"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { coursesData, getCoursesByCategory } from '@/lib/coursesData';

export default function CourseCatalog() {
  const [filter, setFilter] = useState('Vocational');
  const courses = getCoursesByCategory(filter);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Vocational Tracks</h1>
          <p className="text-slate-500 font-medium">Select a module to begin your adaptive learning journey.</p>
        </div>
        <div className="flex gap-2">
          {['Vocational', 'Language', 'all'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${
                filter === cat ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id} className="group">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-amber-500/50 transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-slate-800 text-amber-500 text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest">
                  {course.id}
                </span>
                <span className="text-slate-600 text-[10px] font-bold uppercase italic">
                  {course.level}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                {course.name_en}
              </h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
                {course.description_en}
              </p>

              <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Duration</p>
                  <p className="text-white font-bold text-sm">{course.duration_weeks} Weeks</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Tuition</p>
                  <p className="text-amber-500 font-black text-sm">{course.price.toLocaleString()} {course.currency}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}