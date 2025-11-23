"use client";

import Link from "next/link";
import type { Episode } from "@/lib/data/episodes";
import { formatDate, formatDuration } from "@/lib/formatters";
import { cn } from "@/lib/utils";

type EpisodeCardProps = {
  episode: Episode;
  className?: string;
};

export function EpisodeCard({ episode, className }: EpisodeCardProps) {
  return (
    <article
      className={cn(
        "panel flex flex-col gap-4 p-6 transition hover:-translate-y-1 hover:shadow-[0_30px_55px_rgba(29,21,16,0.25)]",
        className
      )}
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#a27955]">
        <span>Episode {episode.episode_number ?? "—"}</span>
        <span className="h-px w-8 bg-[#d2b799]" />
        <span>{formatDate(episode.published_at)}</span>
      </div>
      <h3 className="text-2xl font-semibold text-[#2d241d]">{episode.title}</h3>
      <p className="text-sm leading-relaxed text-[#5a4d44]">
        {episode.guest_summary ??
          episode.description?.slice(0, 160) ??
          "Conversation details coming soon."}
      </p>
      <div className="flex flex-wrap items-center gap-3 text-xs text-[#85624a]">
        <span className="rounded-full bg-[#f4eadc] px-3 py-1">
          {formatDuration(episode.duration_seconds)}
        </span>
        {episode.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#e5d4c2] px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4">
        <Link
          href={`/episodes/${episode.slug}`}
          className="text-sm font-semibold text-[#6f4b33] underline decoration-[#d3b08c] underline-offset-4"
        >
          Play episode
        </Link>
        {episode.audio_url && (
          <a
            href={episode.audio_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#6f4b33]"
          >
            Download
          </a>
        )}
      </div>
    </article>
  );
}

