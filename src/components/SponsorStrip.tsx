import type { Sponsor } from "@/lib/data/sponsors";

type SponsorStripProps = {
  sponsors: Sponsor[];
};

export function SponsorStrip({ sponsors }: SponsorStripProps) {
  if (!sponsors.length) {
    return (
      <div className="panel p-6 text-sm text-[#2c6150]">
        Local sponsors coming soon. Interested? Drop us a line on the support
        page.
      </div>
    );
  }

  return (
    <div className="panel p-6">
      <p className="text-xs uppercase tracking-[0.4em] text-[#6dac87]">
        Supported by
      </p>
      <div className="mt-4 flex flex-wrap gap-6">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex flex-col items-center gap-2 text-center text-sm text-[#1c4c3b]"
          >
            <div className="flex h-16 w-32 items-center justify-center rounded-2xl border border-[#cde7d8] bg-[#f2f7f3]">
              {sponsor.logo_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={sponsor.logo_url}
                  alt={sponsor.name}
                  className="max-h-12 max-w-[90%] object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="font-semibold">{sponsor.name}</span>
              )}
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5da37c]">
              {sponsor.tier ?? "Community Partner"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

