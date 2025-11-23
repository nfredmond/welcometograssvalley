import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.warn(
    "Supabase URL or anon key missing. Pages needing data will fail until env vars are set."
  );
}

export function createServerSupabaseClient() {
  if (!url || !anonKey) {
    throw new Error("Missing Supabase env vars.");
  }

  return createClient<Database>(url, anonKey, {
    auth: {
      persistSession: false,
    },
    global: {
      fetch,
    },
  });
}

