import { vocationalCourses } from './courseData';

export const triggerInjection = (courseId: string, failedTerm: string) => {
  const course = vocationalCourses.find(c => c.id === courseId);
  const termData = course?.terms.find(t => t.en === failedTerm);

  if (termData?.critical) {
    return {
      type: "ADAPTIVE_INJECTION",
      payload: {
        message: Critical Failure in \. Injecting Bilingual Remedial Module.,
        content: Refresher: \ (EN) / \ (FR),
        style: "urgent-orange"
      }
    };
  }
  return null;
};