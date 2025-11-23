import { createServerSupabaseClient } from "@/lib/supabase/serverClient";
import type { Database, TablesRow } from "@/types/database";

export type Sponsor = TablesRow<Database["public"]["Tables"]["sponsors"]>;

export async function getActiveSponsors(
  referenceDate = new Date()
): Promise<Sponsor[]> {
  const supabase = createServerSupabaseClient();
  const today = referenceDate.toISOString();
  const { data, error } = await supabase
    .from("sponsors")
    .select("*")
    .lte("starts_at", today)
    .or(`ends_at.gte.${today},ends_at.is.null`)
    .order("tier", { ascending: true });

  if (error) {
    console.error("Failed to fetch sponsors", error.message);
    return [] as Sponsor[];
  }

  return (data as Sponsor[]) ?? [];
}

