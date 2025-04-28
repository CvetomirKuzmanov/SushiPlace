import { createClient } from '@supabase/supabase-js';


const DB_URL=process.env.NEXT_PUBLIC_SUPABASE_URL
const ANON_KEY=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
            
if (!DB_URL || !ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(DB_URL,ANON_KEY);