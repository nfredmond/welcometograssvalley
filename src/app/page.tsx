import { getLatestEpisode } from "@/lib/data/episodes";
import { getSiteSettings } from "@/lib/data/settings";
import { getActiveSponsors } from "@/lib/data/sponsors";
import { BuzzsproutEmbed } from "@/components/BuzzsproutEmbed";
import { PlatformButtons } from "@/components/PlatformButtons";
import { SponsorStrip } from "@/components/SponsorStrip";
import { formatDate } from "@/lib/formatters";

// Buzzsprout episode ID for the latest episode (Episode 1)
const LATEST_BUZZSPROUT_ID = "18283371";

export const revalidate = 60;

export default async function Home() {
  const [latestEpisode, settings, sponsors] = await Promise.all([
    getLatestEpisode(),
    getSiteSettings(),
    getActiveSponsors(),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <section className="panel flex flex-col gap-8 p-8 lg:flex-row">
        <div className="flex-1 space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#6dac87]">
            Welcome to Grass Valley Podcast
          </p>
          <h1 className="text-4xl leading-tight text-[#0f2e24] lg:text-5xl">
            {settings?.hero_subtitle ??
              "Honest conversations that make Grass Valley smarter, more hopeful, and more connected."}
          </h1>
          <p className="text-base text-[#1f4e3c]">
            Weekly drops featuring recovery mentors, county staff, health teams, and artists.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={latestEpisode ? `/episodes/${latestEpisode.slug}` : "/episodes"}
              className="rounded-full bg-[#1f4a3a] px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-[#e5f4ec] transition hover:bg-[#184739]"
            >
              Listen Now
            </a>
            <a
              href="#subscribe"
              className="rounded-full border border-[#cfe3d3] px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-[#1f4a3a]"
            >
              Subscribe
            </a>
          </div>
          <div id="subscribe">
            <PlatformButtons />
          </div>
        </div>
        <div className="flex-1 space-y-4 rounded-[2.5rem] border border-[#c9dfcf] bg-[#f2f7f3]/80 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
            Latest drops
          </p>
          <p className="text-sm text-[#1f4e3c]">
            Our first three episodes are live!
          </p>
          <BuzzsproutEmbed
            episodeId={LATEST_BUZZSPROUT_ID}
            title="Episode 1"
          />
          <div className="flex flex-col gap-2 pt-2">
            <a
              href="/episodes"
              className="flex items-center justify-between rounded-xl border border-[#cfe3d3] bg-white/60 px-4 py-3 text-sm font-medium text-[#1f4a3a] transition hover:bg-[#e3f3ec]"
            >
              <span>Episode 2</span>
              <span className="text-xs text-[#5da37c]">Listen →</span>
            </a>
            <a
              href="/episodes"
              className="flex items-center justify-between rounded-xl border border-[#cfe3d3] bg-white/60 px-4 py-3 text-sm font-medium text-[#1f4a3a] transition hover:bg-[#e3f3ec]"
            >
              <span>Episode 3 — Gary Pate</span>
              <span className="text-xs text-[#5da37c]">Listen →</span>
            </a>
          </div>
        </div>
      </section>

      <SponsorStrip sponsors={sponsors} />
    </div>
  );
}
