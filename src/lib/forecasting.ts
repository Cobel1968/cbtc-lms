export const calculateMilestone = (currentDensity: number, remainingHours: number) => {
  // Standard logic: hours / 1.0
  // Cobel Logic: hours / density
  const optimizedHours = remainingHours / currentDensity;
  const savings = remainingHours - optimizedHours;

  return {
    completionHours: Math.round(optimizedHours),
    hoursSaved: Math.round(savings),
    status: currentDensity > 1 ? 'Accelerated' : 'Standard'
  };
};
