import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co";
const serviceKey = process.env.SUPABASE_SERVICE_KEY || "dummy_key";

// Solo servidor — nunca importar esto en componentes cliente
export const supabaseAdmin = createClient(supabaseUrl, serviceKey);
