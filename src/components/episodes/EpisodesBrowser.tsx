"use client";

import { useMemo, useState } from "react";
import type { Episode } from "@/lib/data/episodes";
import { EpisodeCard } from "@/components/EpisodeCard";

type EpisodesBrowserProps = {
  episodes: Episode[];
};

export function EpisodesBrowser({ episodes }: EpisodesBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const all = new Set<string>();
    episodes.forEach((episode) => {
      episode.tags?.forEach((tag) => all.add(tag));
    });
    return Array.from(all).sort();
  }, [episodes]);

  const filtered = useMemo(() => {
    return episodes.filter((episode) => {
      const matchesQuery =
        !query ||
        episode.title.toLowerCase().includes(query.toLowerCase()) ||
        episode.description?.toLowerCase().includes(query.toLowerCase()) ||
        episode.guest_summary?.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !activeTag || episode.tags?.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [episodes, query, activeTag]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          type="search"
          placeholder="Search episodes"
          className="w-full rounded-full border border-[#cfe3d3] bg-white/80 px-5 py-3 text-sm text-[#184739] outline-none focus:border-[#4f9c78]"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] ${
              !activeTag
                ? "border-[#1f4a3a] bg-[#1f4a3a] text-white"
                : "border-[#cfe3d3] text-[#1f4a3a]"
            }`}
            onClick={() => setActiveTag(null)}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] ${
                activeTag === tag
                  ? "border-[#1f4a3a] bg-[#1f4a3a] text-white"
                  : "border-[#cfe3d3] text-[#1f4a3a]"
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <p className="text-sm text-[#2c6150]">
        Showing {filtered.length} of {episodes.length} conversations.
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((episode) => (
          <EpisodeCard episode={episode} key={episode.id} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="panel p-6 text-sm text-[#2c6150]">
          Nothing matched that search—try a different keyword or tag.
        </div>
      )}
    </div>
  );
}

