import { createServerSupabaseClient } from "@/lib/supabase/serverClient";
import type { Database, TablesRow } from "@/types/database";

export type Guest = TablesRow<Database["public"]["Tables"]["guests"]>;

export async function getGuests(): Promise<Guest[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Failed to fetch guests", error.message);
    return [] as Guest[];
  }

  return (data as Guest[]) ?? [];
}

type Episode = TablesRow<Database["public"]["Tables"]["episodes"]>;

export async function getEpisodesForGuest(guestId: string): Promise<Episode[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("episode_guests")
    .select("episodes:episode_id(*)")
    .eq("guest_id", guestId);

  if (error) {
    console.error("Failed to fetch guest episodes", error.message);
    return [] as Episode[];
  }

  type EpisodeLink = {
    episodes: Episode | null;
  };

  const links = (data as EpisodeLink[] | null) ?? [];

  return links
    .map((record) => record.episodes)
    .filter((episode): episode is Episode => Boolean(episode));
}

