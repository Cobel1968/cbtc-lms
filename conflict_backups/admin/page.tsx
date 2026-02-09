'use client';
import MasterConsole from './master-console/page';

// This ensures that visiting /admin always shows the full Command Center
export default function AdminRoot() {
  return <MasterConsole />;
}
