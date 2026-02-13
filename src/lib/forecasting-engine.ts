/**
 * INNOVATION: Automated Milestone Forecasting (Cobel AI Engine)
 * Logic: Maps Bilingual Fluency to Temporal Optimization.
 * Principle: High technical fluency reduces curriculum density and friction.
 */

export interface MilestoneForecast {
  currentProgress: number;
  predictedCompletionDate: string;
  weeksSaved: number;
  status: 'standard' | 'accelerated' | 'elite';
}

/**
 * @param startDate - Date de début de formation
 * @param baseWeeks - Durée standard du cours (basée sur les ECTS injectés)
 * @param fluencyScore - Score d'analyse bilingue (0.0 à 1.0) issu de la Feature 4
 */
export const getMilestoneForecast = (
  startDate: Date,
  baseWeeks: number,
  fluencyScore: number
): MilestoneForecast => {
  // Logic: 1.0 fluency = 30% reduction in time. 0.5 fluency = 0% reduction.
  // Formula: R = max(0, (F - 0.5) * 0.6)
  const timeReductionFactor = Math.max(0, (fluencyScore - 0.5) * 0.6); 
  const optimizedWeeks = Math.ceil(baseWeeks * (1 - timeReductionFactor));
  const weeksSaved = baseWeeks - optimizedWeeks;

  const completionDate = new Date(startDate);
  completionDate.setDate(startDate.getDate() + (optimizedWeeks * 7));

  // Détermination du statut de trajectoire
  let status: 'standard' | 'accelerated' | 'elite' = 'standard';
  if (fluencyScore > 0.85) status = 'elite';
  else if (fluencyScore > 0.7) status = 'accelerated';

  return {
    currentProgress: Math.round(fluencyScore * 100),
    // Standardisation de la date pour éviter les erreurs d'hydratation Next.js
    predictedCompletionDate: completionDate.toLocaleDateString('fr-FR', {
      day: 'numeric', 
      month: 'short', 
      year: 'numeric'
    }),
    weeksSaved,
    status
  };
};