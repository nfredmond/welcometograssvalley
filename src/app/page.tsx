import { getLatestEpisode } from "@/lib/data/episodes";
import { getSiteSettings } from "@/lib/data/settings";
import { getActiveSponsors } from "@/lib/data/sponsors";
import { AudioPlayer } from "@/components/AudioPlayer";
import { PlatformButtons } from "@/components/PlatformButtons";
import { CommunityStrip } from "@/components/CommunityStrip";
import { SponsorStrip } from "@/components/SponsorStrip";
import { formatDate } from "@/lib/formatters";

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
            Field reports from Grass Valley
          </p>
          <h1 className="text-4xl leading-tight text-[#0f2e24] lg:text-5xl">
            {settings?.hero_subtitle ??
              "Fast hits on recovery, service, and creativity in the Sierra foothills."}
          </h1>
          <div className="flex flex-wrap gap-2 text-sm font-semibold text-[#1f4e3c]">
            {["Recovery check-ins", "County voices", "Art + river humor"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#cfe3d3] bg-white/60 px-4 py-2 uppercase tracking-[0.2em]"
              >
                {item}
              </span>
            ))}
          </div>
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
            Latest drop
          </p>
          {latestEpisode ? (
            <>
              <div>
                <p className="text-sm text-[#2c6150]">
                  {formatDate(latestEpisode.published_at)}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#0f2e24]">
                  {latestEpisode.title}
                </h2>
                <p className="text-sm text-[#1f4e3c]">
                  {latestEpisode.guest_summary ??
                    latestEpisode.description?.slice(0, 160)}
                </p>
              </div>
              <AudioPlayer
                title={latestEpisode.title}
                audioUrl={latestEpisode.audio_url}
              />
              <div className="flex flex-wrap gap-2 text-xs text-[#3a7359]">
                {latestEpisode.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#cfe3d3] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <p className="text-sm text-[#1f4e3c]">
              Episodes will appear here after you run the RSS sync function.
            </p>
          )}
        </div>
      </section>

      <section className="panel p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
              Field notes
            </p>
            <h2 className="text-3xl text-[#0f2e24]">Keep Grass Valley lifted</h2>
          </div>
          <p className="text-sm text-[#2c6150]">
            {settings?.manifesto ?? "Short pulses that keep the foothills informed and hopeful."}
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            "Weekly sobriety resources & check-ins.",
            "Service updates from sheriffs, nurses, and crews.",
            "Stories from trailheads, downtown stages, and the Yuba.",
          ].map((line) => (
            <div
              key={line}
              className="rounded-2xl border border-[#c9dfcf] bg-white/80 p-4 text-sm text-[#1f4e3c]"
            >
              {line}
            </div>
          ))}
        </div>
      </section>

      <CommunityStrip />

      <SponsorStrip sponsors={sponsors} />
    </div>
  );
}
