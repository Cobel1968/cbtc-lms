import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Geometric "C" for Cobel */}
      <path d="M40 15C30 15 20 23 20 33C20 43 30 51 40 51H45V43H40C35 43 30 39 30 33C30 27 35 23 40 23H45V15H40Z" fill="currentColor"/>
      
      {/* The "Adaptive Bridge" Icon */}
      <rect x="52" y="20" width="8" height="26" rx="2" fill="#f59e0b" />
      <rect x="64" y="15" width="8" height="36" rx="2" fill="#94a3b8" />
      
      {/* COBEL Text - Industrial Font Style */}
      <text x="85" y="42" fill="currentColor" style={{ font: 'bold 28px sans-serif', letterSpacing: '2px' }}>COBEL</text>
    </svg>
  );
};

export default Logo;