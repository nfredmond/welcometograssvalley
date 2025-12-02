"use client";

import Script from "next/script";

type BuzzsproutEmbedProps = {
  episodeId: string;
  title?: string;
};

/**
 * Embeds a Buzzsprout player for a specific episode.
 * Uses the "small" player variant from Buzzsprout.
 */
export function BuzzsproutEmbed({ episodeId, title }: BuzzsproutEmbedProps) {
  const containerId = `buzzsprout-player-${episodeId}`;
  const scriptSrc = `https://www.buzzsprout.com/2559461/episodes/${episodeId}.js?container_id=${containerId}&player=small`;

  return (
    <div className="flex flex-col gap-2">
      {title && (
        <p className="text-sm font-medium text-[#184739]">{title}</p>
      )}
      <div id={containerId} className="min-h-[52px]" />
      <Script src={scriptSrc} strategy="lazyOnload" />
    </div>
  );
}

