import { createClient } from "https://esm.sh/@supabase/supabase-js@2.48.0";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const rssUrl = Deno.env.get("BUZZSPROUT_RSS_URL")!;

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

type EpisodePayload = {
  rss_guid: string;
  title: string;
  slug: string;
  description: string;
  published_at: string | null;
  audio_url: string | null;
  duration_seconds: number | null;
  image_url: string | null;
  guest_summary: string | null;
  episode_number: number | null;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildSlug(title: string, guid: string) {
  const base = slugify(title);
  const suffix = guid.replace(/[^a-z0-9]/gi, "").slice(-6).toLowerCase();
  return suffix ? `${base}-${suffix}` : base;
}

function parseDuration(raw?: string | null) {
  if (!raw) return null;
  if (raw.includes(":")) {
    const parts = raw.split(":").map((part) => Number(part));
    if (parts.length === 3) {
      const [h, m, s] = parts;
      return h * 3600 + m * 60 + s;
    }
    if (parts.length === 2) {
      const [m, s] = parts;
      return m * 60 + s;
    }
  }
  const seconds = Number(raw);
  return Number.isFinite(seconds) ? seconds : null;
}

function parseEpisode(item: Element): EpisodePayload {
  const title = item.querySelector("title")?.textContent?.trim() ?? "Untitled";
  const guid = item.querySelector("guid")?.textContent?.trim() ?? crypto.randomUUID();
  const description = item.querySelector("description")?.textContent?.trim() ?? "";
  const pubDate = item.querySelector("pubDate")?.textContent?.trim();
  const enclosure = item.querySelector("enclosure")?.getAttribute("url");
  const image =
    item.querySelector("itunes\\:image")?.getAttribute("href") ??
    item.querySelector("image")?.textContent ??
    null;
  const durationRaw = item.querySelector("itunes\\:duration")?.textContent?.trim() ?? null;
  const episodeNumber = item
    .querySelector("itunes\\:episode")
    ?.textContent?.trim();

  return {
    rss_guid: guid,
    title,
    slug: buildSlug(title, guid),
    description,
    published_at: pubDate ? new Date(pubDate).toISOString() : null,
    audio_url: enclosure,
    duration_seconds: parseDuration(durationRaw),
    image_url: image,
    guest_summary: item.querySelector("content\\:encoded")?.textContent ?? "",
    episode_number: episodeNumber ? Number(episodeNumber) : null,
  };
}

async function sync() {
  if (!rssUrl) {
    throw new Error("BUZZSPROUT_RSS_URL is not set");
  }

  const response = await fetch(rssUrl);
  if (!response.ok) {
    throw new Error(`RSS fetch failed: ${response.status}`);
  }

  const xml = await response.text();
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  if (!doc) {
    throw new Error("Failed to parse RSS XML");
  }

  const items = Array.from(doc.querySelectorAll("item"));
  const episodes = items.map(parseEpisode);

  const { error } = await supabase
    .from("episodes")
    .upsert(episodes, { onConflict: "rss_guid" });

  if (error) {
    throw new Error(error.message);
  }

  return { count: episodes.length };
}

Deno.serve(async () => {
  try {
    const result = await sync();
    return new Response(JSON.stringify({ ok: true, ...result }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ ok: false, error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});

