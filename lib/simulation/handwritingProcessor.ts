export const simulateOCR = (baseScore: number) => {
  // Feature 4: Contextual Extraction Logic
  // Identifying bilingual terms: "Inverter", "Photovoltaic", "Onduleur"
  const bilingualBonus = 5; 
  const totalFluency = Math.min(baseScore + bilingualBonus, 100);
  
  return {
    detectedLanguage: "Bilingual (FR/EN)",
    technicalFluency: totalFluency,
    extractedTerms: ["Inverter", "Onduleur", "Circuit", "Charge Controller"],
    recommendation: totalFluency > 85 ? "Accelerate Pathway" : "Maintain Speed"
  };
};
