"use client";

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  showSubtext?: boolean;
}

export default function CobelLogo({ width = 180, height = 60, showSubtext = true }: LogoProps) {
  return (
    <div className="flex flex-col select-none group">
      {/* Official Corporate Logo from Public Folder */}
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <Image 
          src="/logo.png" 
          alt="Cobel Business Training Center" 
          width={width} 
          height={height}
          priority
          className="object-contain"
        />
      </div>
      
      {showSubtext && (
        <div className="flex items-center gap-2 mt-2 opacity-80">
          <div className="h-[1px] w-6 bg-amber-500" />
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 leading-none">
            Adaptive Learning Algorithm
          </p>
        </div>
      )}
    </div>
  );
}