const platforms = [
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/",
  },
];

export function PlatformButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {platforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#cfe3d3] px-5 py-2 text-sm font-semibold text-[#1c4c3b] transition hover:bg-[#e3f3ec]"
        >
          {platform.name}
        </a>
      ))}
    </div>
  );
}

