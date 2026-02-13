'use client';
import { useState } from 'react';

export default function EmployerRegister() {
  const [company, setCompany] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(Registering \ for Cobel B2B Oversight...);
    // Logic for B2B table insertion goes here next
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Employer Portal</h2>
      <p className="text-sm text-gray-600 mb-6">
        Register your company to track employee vocational gaps and milestone forecasting.
      </p>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input 
            type="text" 
            required 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800 transition"
        >
          Initialize B2B Account
        </button>
      </form>
    </div>
  );
}
