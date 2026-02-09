import React from 'react';

// This matches the verified JSON structure from your API
interface StudentInsight {
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
    <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{data.full_name}</h3>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {data.status}
        </span>
      </div>

      {/* Feature 3: Temporal Optimization Visual */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span>Curriculum Density</span>
          <span className="font-mono">{data.density * 100}%</span>
        </div>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full transition-all duration-500" 
            style={{ width: `${data.density * 100}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-blue-700 font-semibold">
          🚀 Engine Impact: {timeSavedPercent}% faster training path achieved.
        </p>
      </div>

      {/* Feature 1: Bilingual Technical Terms */}
      <div className="bg-gray-50 p-4 rounded-md">
        <h4 className="text-sm font-bold uppercase text-gray-500 mb-2">Bilingual Fluency Detected</h4>
        <div className="flex flex-wrap gap-2">
          {data.friction_events.detected_fr.map((term) => (
            <span key={term} className="px-2 py-1 bg-gray-200 rounded text-xs">🇫🇷 {term}</span>
          ))}
          {data.friction_events.detected_en.map((term) => (
            <span key={term} className="px-2 py-1 bg-gray-200 rounded text-xs">🇬🇧 {term}</span>
          ))}
        </div>
      </div>
    </div>
  );
};