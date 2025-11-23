import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

const url = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function createServiceSupabaseClient() {
  if (!url || !serviceRoleKey) {
    throw new Error("Missing Supabase service role configuration.");
  }

  return createClient<Database>(url, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
    global: {
      fetch,
    },
  });
}

