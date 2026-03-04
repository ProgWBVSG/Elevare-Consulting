import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_KEY!;

// Solo servidor — nunca importar esto en componentes cliente
export const supabaseAdmin = createClient(supabaseUrl, serviceKey);
