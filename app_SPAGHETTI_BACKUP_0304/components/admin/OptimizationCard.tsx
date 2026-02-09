import React from 'react';

interface StudentInsight {
  student_id: string;
  full_name: string;
  status: string;
  density: number;
  technical_fluency_score: string;
  friction_events: {
    detected_en: string[];
    detected_fr: string[];
  };
}

export const OptimizationCard = ({ data }: { data: StudentInsight }) => {
  const timeSavedPercent = Math.round((1 - data.density) * 100);
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500 my-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{data.full_name}</h3>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {data.status}
        </span>
      </div>
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span>Curriculum Density (Optimization)</span>
          <span className="font-mono">{data.density * 100}%</span>
        </div>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div className="bg-blue-600 h-full" style={{ width: (data.density * 100) + '%' }} />
        </div>
        <p className="mt-2 text-sm text-blue-700 font-semibold italic">
          AI Impact: Path accelerated by {timeSavedPercent}%.
        </p>
      </div>
    </div>
  );
};
