import { createClientComponentClient } from './lib/supabase';
const supabase = createClientComponentClient();

async function checkInflation() {
  const { count, error } = await supabase.from('modules').select('*', { count: 'exact', head: true });
  if (error) console.error(' Database connectivity issues:', error.message);
  else console.log(' Ingestion verified: ' + count + ' courses inflated.');
}
checkInflation();