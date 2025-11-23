import { createServerSupabaseClient } from "@/lib/supabase/serverClient";
import type { Database, TablesRow } from "@/types/database";

export type Resource = TablesRow<Database["public"]["Tables"]["resources"]>;

export async function getResources(): Promise<Resource[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("resources")
    .select("*")
    .order("category", { ascending: true })
    .order("title", { ascending: true });

  if (error) {
    console.error("Failed to fetch resources", error.message);
    return [] as Resource[];
  }

  return (data as Resource[]) ?? [];
}

