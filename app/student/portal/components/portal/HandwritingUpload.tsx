import React from 'react';
export default function HandwritingUpload() {
  return (
    <div className="p-4 border-2 border-dashed border-blue-400 rounded-lg bg-blue-50">
      <h3 className="font-bold text-blue-800">Analog-to-Digital Bridge (OCR)</h3>
      <p className="text-sm">Inscrivez vos notes manuscrites pour mise � jour du profil bilingue.</p>
      <input type="file" className="mt-2 text-sm" />
    </div>
  );
}

