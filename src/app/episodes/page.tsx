import { getPaginatedEpisodes, getAllEpisodes } from "@/lib/data/episodes";
import { EpisodesBrowser } from "@/components/episodes/EpisodesBrowser";
import { EpisodeCard } from "@/components/EpisodeCard";
import { Pagination } from "@/components/Pagination";
import { BuzzsproutEmbed } from "@/components/BuzzsproutEmbed";

// All available Buzzsprout episode IDs
const BUZZSPROUT_EPISODES = [
  { id: "18283371", title: "Episode 1" },
  { id: "18284043", title: "Episode 2" },
  { id: "18284138", title: "Episode 3" },
];

type EpisodesPageProps = {
  searchParams?: {
    page?: string;
  };
};

export const revalidate = 60;

export default async function EpisodesPage({ searchParams }: EpisodesPageProps) {
  const page = Number(searchParams?.page ?? 1) || 1;
  const [paginated, allEpisodes] = await Promise.all([
    getPaginatedEpisodes(page),
    getAllEpisodes(),
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil((paginated.total ?? 0) / paginated.pageSize)
  );

  return (
    <div className="flex flex-col gap-10">
      {/* Featured Buzzsprout Players */}
      <section className="panel p-8">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
            Listen now
          </p>
          <h1 className="text-4xl text-[#0f2e24]">Latest Episodes</h1>
          <p className="text-sm text-[#2c6150]">
            Stream directly or subscribe on your favorite podcast platform.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          {BUZZSPROUT_EPISODES.map((ep) => (
            <BuzzsproutEmbed key={ep.id} episodeId={ep.id} title={ep.title} />
          ))}
        </div>
      </section>

      {/* Searchable archive */}
      <section className="panel p-8">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
            Episode archive
          </p>
          <h2 className="text-3xl text-[#0f2e24]">Search &amp; Filter</h2>
          <p className="text-sm text-[#2c6150]">
            Search by keyword or filter by tag to find the right episode.
          </p>
        </div>
        <div className="mt-6">
          <EpisodesBrowser episodes={allEpisodes} />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-[#0f2e24]">Chronological feed</h2>
          <p className="text-sm text-[#2c6150]">
            Page {paginated.page} of {totalPages}. Updates every hour from the
            Buzzsprout RSS sync.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {paginated.data.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
        <Pagination page={paginated.page} totalPages={totalPages} />
      </section>
    </div>
  );
}

