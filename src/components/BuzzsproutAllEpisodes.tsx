"use client";

import { useEffect, useRef } from "react";

/**
 * Embeds the Buzzsprout "large" player that shows all episodes.
 * This is a unified player that includes all podcast episodes.
 */
export function BuzzsproutAllEpisodes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerId = "buzzsprout-large-player";

  useEffect(() => {
    // Clear any existing content first
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // Create and append the script
    const script = document.createElement("script");
    script.src = `https://www.buzzsprout.com/2559461.js?container_id=${containerId}&player=large`;
    script.async = true;
    script.charset = "utf-8";
    
    // Append to document body
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={containerRef} id={containerId} className="min-h-[200px]" />
  );
}

