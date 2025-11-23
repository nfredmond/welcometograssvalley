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
          <p className="text-xs uppercase tracking-[0.4em] text-[#b88658]">
            Real talk from Manion Canyon Rd.
          </p>
          <h1 className="text-4xl leading-tight text-[#2d241d] lg:text-5xl">
            {settings?.hero_subtitle ??
              "Neighbors Nathaniel Redmond & Ryan Doty host hopeful, funny conversations about life in Grass Valley."}
          </h1>
          <p className="text-lg text-[#4f4137]">
            Local news. Recovery and sobriety support. Comedy. Raw interviews
            with sheriffs, probation officers, nurses, artists, and everyone who
            keeps the Sierra Nevada beating.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={latestEpisode ? `/episodes/${latestEpisode.slug}` : "/episodes"}
              className="rounded-full bg-[#5b3b2e] px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-[#f5e6d4] transition hover:bg-[#3d2a22]"
            >
              Listen Now
            </a>
            <a
              href="#subscribe"
              className="rounded-full border border-[#d9c6b3] px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-[#5b3b2e]"
            >
              Subscribe
            </a>
          </div>
          <div id="subscribe">
            <PlatformButtons />
          </div>
        </div>
        <div className="flex-1 space-y-4 rounded-[2.5rem] border border-[#e4d3c2] bg-[#fbf7f2]/80 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#a27955]">
            Latest drop
          </p>
          {latestEpisode ? (
            <>
              <div>
                <p className="text-sm text-[#5a4d44]">
                  {formatDate(latestEpisode.published_at)}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#2d241d]">
                  {latestEpisode.title}
                </h2>
                <p className="text-sm text-[#4f4137]">
                  {latestEpisode.guest_summary ??
                    latestEpisode.description?.slice(0, 160)}
                </p>
              </div>
              <AudioPlayer
                title={latestEpisode.title}
                audioUrl={latestEpisode.audio_url}
              />
              <div className="flex flex-wrap gap-2 text-xs text-[#85624a]">
                {latestEpisode.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d9c6b3] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <p className="text-sm text-[#4f4137]">
              Episodes will appear here after you run the RSS sync function.
            </p>
          )}
        </div>
      </section>

      <section className="panel p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#a27955]">
              Manifesto
            </p>
            <h2 className="text-3xl text-[#2d241d]">Community lifeline</h2>
          </div>
          <p className="text-sm text-[#5a4d44]">
            {settings?.manifesto ??
              "We lift people up, talk about what no one else will, and leave listeners hungry for the next episode."}
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            "Hopeful recovery support & mental health check-ins.",
            "Local news without the sensationalism—just neighbors showing up.",
            "Laughs, honesty, and accountability to keep Grass Valley thriving.",
          ].map((line) => (
            <div
              key={line}
              className="rounded-2xl border border-[#e4d3c2] bg-white/80 p-4 text-sm text-[#4f4137]"
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
