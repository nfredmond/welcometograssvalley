import { MetadataRoute } from "next";
import { getAllEpisodes } from "@/lib/data/episodes";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://welcome-to-grass-valley.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const episodes = await getAllEpisodes();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/episodes",
    "/about",
    "/guests",
    "/resources",
    "/support",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const episodeRoutes: MetadataRoute.Sitemap = episodes.map((episode) => ({
    url: `${siteUrl}/episodes/${episode.slug}`,
    lastModified: episode.updated_at ? new Date(episode.updated_at) : undefined,
  }));

  return [...staticRoutes, ...episodeRoutes];
}

