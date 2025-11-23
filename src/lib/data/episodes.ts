import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase/serverClient";
import type { Database, TablesRow } from "@/types/database";
import type { Guest } from "./guests";

export type Episode = TablesRow<Database["public"]["Tables"]["episodes"]>;

export type PaginatedEpisodes = {
  data: Episode[];
  total: number;
  page: number;
  pageSize: number;
};

export const PAGE_SIZE = 12;

export const getLatestEpisode = cache(async (): Promise<Episode | null> => {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("episodes")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(1);

  if (error) {
    console.error("Failed to fetch latest episode", error.message);
    return null;
  }

  return (data?.[0] as Episode | undefined) ?? null;
});

export async function getPaginatedEpisodes(page = 1): Promise<PaginatedEpisodes> {
  const supabase = createServerSupabaseClient();
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, count, error } = await supabase
    .from("episodes")
    .select("*", { count: "exact" })
    .order("published_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Failed to fetch episodes", error.message);
    return { data: [] as Episode[], total: 0, page, pageSize: PAGE_SIZE };
  }

  const episodes = (data as Episode[] | null) ?? [];

  return {
    data: episodes,
    total: count ?? 0,
    page,
    pageSize: PAGE_SIZE,
  };
}

export type EpisodeWithGuests = Episode & { guests: Guest[] };

export async function getEpisodeBySlug(slug: string): Promise<EpisodeWithGuests | null> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("episodes")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(`Failed to fetch episode ${slug}`, error.message);
    return null;
  }

  const episode = data as Episode;

  type GuestLink = {
    guest_id: string;
    guests: Guest | null;
  };

  const { data: guestLinks } = await supabase
    .from("episode_guests")
    .select("guest_id, guests:guest_id(*)")
    .eq("episode_id", episode.id);

  const linkedGuests = (guestLinks as GuestLink[] | null) ?? [];

  const guests = linkedGuests
    .map((item) => item.guests)
    .filter((guest): guest is Guest => Boolean(guest));

  return {
    ...episode,
    guests,
  };
}

export async function getAllEpisodes(): Promise<Episode[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("episodes")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch all episodes", error.message);
    return [] as Episode[];
  }

  return (data as Episode[]) ?? [];
}

