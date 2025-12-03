import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getEpisodeBySlug } from "@/lib/data/episodes";
import { formatDate, formatDuration } from "@/lib/formatters";
import { AudioPlayer } from "@/components/AudioPlayer";
import { BuzzsproutAllEpisodes } from "@/components/BuzzsproutAllEpisodes";
import { PlatformButtons } from "@/components/PlatformButtons";

type EpisodeDetailProps = {
  params: {
    slug: string;
  };
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://welcome-to-grass-valley.vercel.app";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: EpisodeDetailProps): Promise<Metadata> {
  const episode = await getEpisodeBySlug(params.slug);
  if (!episode) {
    return {
      title: "Episode not found",
    };
  }

  const url = `${siteUrl}/episodes/${episode.slug}`;

  return {
    title: episode.title,
    description: episode.description ?? "",
    openGraph: {
      title: episode.title,
      description: episode.description ?? "",
      url,
      type: "article",
      images: episode.image_url
        ? [
            {
              url: episode.image_url,
              width: 1200,
              height: 630,
            },
          ]
        : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function EpisodeDetail({ params }: EpisodeDetailProps) {
  const episodeData = await getEpisodeBySlug(params.slug);

  if (!episodeData) {
    notFound();
  }

  const episode = episodeData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    url: `${siteUrl}/episodes/${episode.slug}`,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Welcome to Grass Valley",
    },
    name: episode.title,
    datePublished: episode.published_at,
    description: episode.description,
    timeRequired: episode.duration_seconds
      ? `PT${Math.floor(episode.duration_seconds / 60)}M`
      : undefined,
  };

  return (
    <article className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
          Episode {episode.episode_number ?? "—"}
        </p>
        <h1 className="mt-2 text-4xl text-[#0f2e24]">{episode.title}</h1>
        <p className="text-sm text-[#2c6150]">
          {formatDate(episode.published_at)} ·{" "}
          {formatDuration(episode.duration_seconds)}
        </p>
        <p className="mt-4 text-lg text-[#1f4e3c]">{episode.guest_summary}</p>
        <div className="mt-6">
          {episode.audio_url ? (
            <AudioPlayer title={episode.title} audioUrl={episode.audio_url} />
          ) : (
            <BuzzsproutAllEpisodes />
          )}
        </div>
        <div className="mt-6">
          <PlatformButtons />
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#3a7359]">
          {episode.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#cfe3d3] px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="panel space-y-4 p-8">
        <h2 className="text-2xl text-[#0f2e24]">Show notes</h2>
        <div className="space-y-4 text-[#1f4e3c]">
          {episode.description ? (
            <div dangerouslySetInnerHTML={{ __html: episode.description }} />
          ) : (
            <p>Detailed show notes will publish soon.</p>
          )}
        </div>
      </section>

      {episode.transcript && (
        <section className="panel p-8">
          <details>
            <summary className="cursor-pointer text-2xl text-[#0f2e24]">
              Read the transcript
            </summary>
            <div className="mt-4 max-h-[500px] space-y-4 overflow-y-auto text-sm leading-relaxed text-[#1f4e3c]">
              {episode.transcript.split("\n").map((line, index) => (
                <p key={`${line}-${index}`}>{line}</p>
              ))}
            </div>
          </details>
        </section>
      )}

      {episode.guests.length ? (
        <section className="panel p-8">
          <h2 className="text-2xl text-[#0f2e24]">Featured guests</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {episode.guests.map((guest) => (
              <div
                key={guest.id}
                className="rounded-2xl border border-[#c9dfcf] bg-white/80 p-4"
              >
                <p className="text-lg font-semibold text-[#0f2e24]">
                  {guest?.name}
                </p>
                <p className="text-sm text-[#2c6150]">{guest?.role}</p>
                <p className="mt-2 text-sm text-[#1f4e3c]">{guest?.bio}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <Script
        id={`episode-jsonld-${episode.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
