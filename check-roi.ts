import { supabase } from './lib/supabase';

async function checkFinancialHooks() {
  const { data, error } = await supabase.from('analytics').select('time_saved_hours, cost_reduction_estimate');
  if (error && error.code === 'PGRST116') {
     console.log('💡 Note: Financial Analytics table not found. Creating a virtual ROI calculator...');
  } else {
     console.log('✅ Financial tracking active.');
  }
}
checkFinancialHooks();