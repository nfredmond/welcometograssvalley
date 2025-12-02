import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

export function createServiceSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    console.error("Missing Supabase env vars:", { 
      hasUrl: !!url, 
      hasKey: !!serviceRoleKey,
      url: url ? url.substring(0, 30) + "..." : "undefined"
    });
    throw new Error("Missing Supabase service role configuration.");
  }

  return createClient<Database>(url, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
  });
}

