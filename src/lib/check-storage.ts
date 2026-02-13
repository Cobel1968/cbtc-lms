import { supabase } from './supabase';

export async function checkBucketStatus() {
  const { data: buckets, error } = await supabase.storage.listBuckets();
  
  if (error) {
    console.error("❌ STORAGE CONNECTION FAILED:", error.message);
    return;
  }

  console.log("📦 ACTIVE BUCKETS:");
  buckets.forEach(b => {
    console.log(`- ${b.name} (Public: ${b.public})`);
  });
}