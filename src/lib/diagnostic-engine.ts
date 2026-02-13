export interface DiagnosticResult {
  score: number;
  frictionIndex: number; // 0 to 1 (1 being high friction)
  recommendedDensity: number; // For Feature 3
  focusDomain: string;
}

export function calculateDiagnostic(answers: any[], totalQuestions: number): DiagnosticResult {
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const score = (correctAnswers / totalQuestions) * 100;
  
  // Feature 2 Logic: Calculate Friction based on language toggles recorded during the session
  const totalToggles = answers.reduce((acc, curr) => acc + (curr.languageToggles || 0), 0);
  const frictionIndex = Math.min(totalToggles / (totalQuestions * 2), 1);

  // Feature 3 Logic: Adjust Curriculum Density
  // If score is high (>85%) and friction is low (<0.2), we increase density (save time)
  let recommendedDensity = 1.0;
  if (score > 85 && frictionIndex < 0.2) {
    recommendedDensity = 0.7; // Student is fast/fluent, compress the path
  } else if (score < 60) {
    recommendedDensity = 1.3; // Student needs more support, expand the path
  }

  return {
    score,
    frictionIndex,
    recommendedDensity,
    focusDomain: "Hydraulics" // Default for Module 1
  };
}