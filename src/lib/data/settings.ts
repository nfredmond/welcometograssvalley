import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase/serverClient";
import type { Database, TablesRow } from "@/types/database";

export type SiteSettings = TablesRow<Database["public"]["Tables"]["site_settings"]>;

export const getSiteSettings = cache(async (): Promise<SiteSettings | null> => {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch site settings", error.message);
    return null;
  }

  return (data as SiteSettings | null) ?? null;
});

