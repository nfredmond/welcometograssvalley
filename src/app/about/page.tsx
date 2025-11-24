import { getSiteSettings } from "@/lib/data/settings";

export const revalidate = 300;

export default async function AboutPage() {
  const settings = await getSiteSettings();

  const hosts = [
    {
      name: "Nathaniel Redmond",
      role: "Signal lead · Recovery coach",
      bio: "Tracks sobriety resources, keeps hotline lists fresh, presses record first.",
    },
    {
      name: "Ryan Doty",
      role: "Field recorder · Creative tech",
      bio: "Runs sound kits by the Yuba, logs art drops, and wrangles county voices.",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
          About the show
        </p>
        <h1 className="mt-2 text-4xl text-[#0f2e24]">
          Foothill studio log
        </h1>
        <p className="mt-4 text-lg text-[#1f4e3c]">
          {settings?.tagline ?? "One feed for recovery, service, and culture in Grass Valley."}
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {["Record in 20-minute sweeps.", "Publish recovery intel first.", "Keep the river + ridges in frame."].map(
            (item) => (
              <span
                key={item}
                className="rounded-2xl border border-[#c9dfcf] bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#2c6150]"
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      <section className="panel p-8">
        <h2 className="text-3xl text-[#0f2e24]">Meet your hosts</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {hosts.map((host) => (
            <article
              key={host.name}
              className="rounded-3xl border border-[#c9dfcf] bg-white/80 p-6"
            >
              <p className="text-2xl font-semibold text-[#0f2e24]">
                {host.name}
              </p>
              <p className="text-sm uppercase tracking-[0.3em] text-[#5da37c]">
                {host.role}
              </p>
              <p className="mt-4 text-sm text-[#1f4e3c]">{host.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel p-8">
        <h2 className="text-3xl text-[#0f2e24]">Operating rules</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Recovery stays on the mic.",
            "Service workers get first pass.",
            "Art + humor keep the feed light.",
            "River + mountain safety every week.",
          ].map((value) => (
            <div
              key={value}
              className="rounded-2xl border border-[#c9dfcf] bg-white/80 p-4 text-sm text-[#1f4e3c]"
            >
              {value}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

