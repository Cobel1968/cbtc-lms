UPDATE public.student_curriculum 
SET status = 'Completed', completion_date = CURRENT_TIMESTAMP
WHERE student_id = (SELECT id FROM public.users WHERE email = 'diallo@cbtc.com')
AND lesson_name IN ('Preventive Maintenance', 'Check-out Procedures');

UPDATE public.student_curriculum 
SET status = 'High Priority', sequence_order = 1
WHERE student_id = (SELECT id FROM public.users WHERE email = 'diallo@cbtc.com')
AND lesson_name IN ('Asset Lifecycle', 'Bilingual Trade Documentation');
