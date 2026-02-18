export type DiagnosticLevel = 'BASIC' | 'INTERMEDIATE' | 'ADVANCED';

export const LEVEL_CONFIG = {
  BASIC: { status: 'Basic', timeValue: 0, label: 'Foundation' },
  INTERMEDIATE: { status: 'Intermediate', timeValue: 240, label: 'Technical Systems' },
  ADVANCED: { status: 'Advanced', timeValue: 720, label: 'Diagnostic Mastery' }
};

export const getOptimizationMetrics = (level: DiagnosticLevel) => {
  return LEVEL_CONFIG[level] || LEVEL_CONFIG.BASIC;
};
