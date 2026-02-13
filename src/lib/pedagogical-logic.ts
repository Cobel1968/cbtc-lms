export const calculateMilestones = (fluencyScore: number, gapCount: number) => {
  // Base time is 30 days
  // Each technical gap adds 2 days
  // High fluency ( > 80%) reduces time by 20%
  let estimatedDays = 30 + (gapCount * 2);
  if (fluencyScore > 80) estimatedDays *= 0.8;
  
  return {
    completionEstimate: Math.round(estimatedDays),
    density: gapCount > 5 ? 'High' : 'Optimized'
  };
};
