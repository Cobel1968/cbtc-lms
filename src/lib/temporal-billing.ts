export interface BillingMetrics {
  standardDuration: number; // in hours
  currentPrediction: number; // in hours
  isOvertime: boolean;
  proRataCharge: number;
}

export function calculateTemporalBilling(
  standardDuration: number, 
  predictedDuration: number, 
  totalCourseFee: number
): BillingMetrics {
  const isOvertime = predictedDuration > standardDuration;
  let proRataCharge = 0;

  if (isOvertime) {
    const hourlyRate = totalCourseFee / standardDuration;
    const overtimeHours = predictedDuration - standardDuration;
    // Pro-rata calculation: additional hours * base hourly rate
    proRataCharge = Math.round(overtimeHours * hourlyRate * 100) / 100;
  }

  return {
    standardDuration,
    currentPrediction: predictedDuration,
    isOvertime,
    proRataCharge
  };
}
