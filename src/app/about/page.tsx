import { getSiteSettings } from "@/lib/data/settings";

export const revalidate = 300;

export default async function AboutPage() {
  const settings = await getSiteSettings();

  const hosts = [
    {
      name: "Nathaniel Redmond",
      role: "Co-host · Neighbor on Manion Canyon Rd.",
      bio: "Nathaniel is a long-time Grass Valley resident, father, and recovery mentor who believes storytelling can heal entire towns.",
    },
    {
      name: "Ryan Doty",
      role: "Co-host · Neighbor on Manion Canyon Rd.",
      bio: "Ryan is a local creative and volunteer firefighter connecting artists, service workers, and public servants across Nevada County.",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a27955]">
          About the show
        </p>
        <h1 className="mt-2 text-4xl text-[#2d241d]">
          Neighbors with open mics
        </h1>
        <p className="mt-4 text-lg text-[#4f4137]">
          {settings?.tagline ??
            "Real, unfiltered, respectful, hopeful, and funny conversations about life in a small Sierra Nevada town."}
        </p>
        <p className="mt-4 text-sm text-[#5a4d44]">
          We record from a converted garage studio on Manion Canyon Rd., just up
          the hill from downtown Grass Valley, CA. Our goal is to be a community
          lifeline—lifting people up, talking about what no one else will, and
          leaving listeners hungry for the next episode.
        </p>
      </section>

      <section className="panel p-8">
        <h2 className="text-3xl text-[#2d241d]">Meet your hosts</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {hosts.map((host) => (
            <article
              key={host.name}
              className="rounded-3xl border border-[#e4d3c2] bg-white/80 p-6"
            >
              <p className="text-2xl font-semibold text-[#2d241d]">
                {host.name}
              </p>
              <p className="text-sm uppercase tracking-[0.3em] text-[#a27955]">
                {host.role}
              </p>
              <p className="mt-4 text-sm text-[#4f4137]">{host.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel p-8">
        <h2 className="text-3xl text-[#2d241d]">Values we live by</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Respect over spectacle—honest conversations that still leave room for hope.",
            "Recovery belongs everywhere—sobriety resources embedded into everyday life.",
            "We invite every neighbor, from sheriffs to historians, to the same table.",
            "Grass Valley deserves laughter; comedy gives us courage to face the hard news.",
          ].map((value) => (
            <div
              key={value}
              className="rounded-2xl border border-[#e4d3c2] bg-white/80 p-4 text-sm text-[#4f4137]"
            >
              {value}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

