import React from 'react';

export const AdaptiveInjection = ({ fluency, children }: { fluency: number, children: React.ReactNode }) => {
  // Logic: Decide what to inject alongside the main content
  return (
    <div className="adaptive-container">
      {/* 1. Foundational Injection: Bilingual Support */}
      {fluency < 50 && (
        <div className="bg-amber-50 p-4 mb-4 border-l-4 border-amber-500">
          <p className="text-sm font-bold">Cobel AI Hint (Bilingual Support):</p>
          <p className="text-xs text-amber-700 italic">Hover over technical terms for French translations.</p>
        </div>
      )}

      {/* 2. Primary Content */}
      <div className="main-content">{children}</div>

      {/* 3. Advanced Injection: Troubleshooting Module */}
      {fluency > 80 && (
        <div className="mt-8 p-6 bg-blue-900 text-white rounded-lg shadow-xl">
          <h4 className="text-lg font-bold"> Advanced Lab: Solar Inverter Failure</h4>
          <p className="text-sm opacity-90">Based on your 92% score, we've injected this real-world diagnostic challenge.</p>
          <button className="mt-4 px-4 py-2 bg-white text-blue-900 rounded font-bold">Start Simulation</button>
        </div>
      )}
    </div>
  );
};
