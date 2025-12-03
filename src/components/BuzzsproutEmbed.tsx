"use client";

import { useEffect, useRef } from "react";

type BuzzsproutEmbedProps = {
  episodeId: string;
  title?: string;
};

/**
 * Embeds a Buzzsprout player for a specific episode.
 * Uses the "small" player variant from Buzzsprout.
 */
export function BuzzsproutEmbed({ episodeId, title }: BuzzsproutEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerId = `buzzsprout-player-${episodeId}`;

  useEffect(() => {
    // Clear any existing content first
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // Create and append the script
    const script = document.createElement("script");
    script.src = `https://www.buzzsprout.com/2559461/episodes/${episodeId}.js?container_id=${containerId}&player=small`;
    script.async = true;
    
    // Append to document body
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [episodeId, containerId]);

  return (
    <div className="flex flex-col gap-2">
      {title && (
        <p className="text-sm font-medium text-[#184739]">{title}</p>
      )}
      <div ref={containerRef} id={containerId} className="min-h-[52px]" />
    </div>
  );
}

