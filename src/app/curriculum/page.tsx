import Link from 'next/link';

async function getCourses() {
  try {
    const res = await fetch(\/api/courses, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    return [];
  }
}

export default async function CurriculumPage() {
  const courses = await getCourses();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Vocational Curriculum</h1>
      <p className="text-gray-600 mb-8">Select your trade to begin the Multi-Dimensional Diagnostic.</p>
      
      <div className="grid gap-4">
        {courses.length === 0 ? (
          <p className="text-red-500">No courses found. Check Supabase connection.</p>
        ) : (
          courses.map((course: any) => (
            <div key={course.id} className="border p-4 rounded-lg flex justify-between items-center hover:bg-slate-50 transition shadow-sm">
              <div>
                <h2 className="font-semibold text-lg">{course.title}</h2>
                <p className="text-sm text-gray-500">{course.category} | Bilingual Mapping Active</p>
              </div>
              <Link 
                href={/diagnostic/ingestion?courseId=\}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Start Diagnostic
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
