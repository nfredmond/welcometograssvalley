"use client";

import { useEffect, useId, useRef } from "react";

/**
 * Embeds the Buzzsprout "large" player that shows all episodes.
 * This is a unified player that includes all podcast episodes.
 */
export function BuzzsproutAllEpisodes() {
  const uniqueId = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const containerId = `buzzsprout-player-${uniqueId}`;

  useEffect(() => {
    // Clear any existing content first
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Create and append the script
      const script = document.createElement("script");
      script.src = `https://www.buzzsprout.com/2559461.js?container_id=${containerId}&player=large`;
      script.async = true;
      script.charset = "utf-8";
      script.id = `buzzsprout-script-${uniqueId}`;
      
      // Append to document body
      document.body.appendChild(script);
    }, 100);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      const script = document.getElementById(`buzzsprout-script-${uniqueId}`);
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [containerId, uniqueId]);

  return (
    <div ref={containerRef} id={containerId} className="min-h-[200px]" />
  );
}
