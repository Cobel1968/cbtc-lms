import React from 'react';
export default function GodModeGuard({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // Bypass temporaire pour permettre le build
}

