import React from 'react';
import HandwritingSummary from './HandwritingSummary';

export default function AdminDashboard({ loading, studentData }: { loading: boolean, studentData: any }) {
  if (loading) {
    return <div className="p-10 font-mono text-center">LOADING COBEL ANALYTICS...</div>;
  }

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Cobel AI Engine Analytics</h1>
      </div>
      <HandwritingSummary studentData={studentData} />
    </div>
  );
}
