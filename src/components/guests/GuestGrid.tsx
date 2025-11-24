import type { Guest } from "@/lib/data/guests";
import Link from "next/link";

type GuestGridProps = {
  guests: Guest[];
};

export function GuestGrid({ guests }: GuestGridProps) {
  if (!guests.length) {
    return (
      <div className="panel p-6 text-sm text-[#2c6150]">
        We’re still building our guest list. Check back soon.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {guests.map((guest) => (
        <article key={guest.id} className="panel flex flex-col gap-4 p-5">
          <div className="flex items-center gap-4">
            {guest.photo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={guest.photo_url}
                alt={guest.name}
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e0f1e6] text-xl font-semibold text-[#1f4a3a]">
                {guest.name.charAt(0)}
              </div>
            )}
            <div>
              <p className="text-lg font-semibold text-[#0f2e24]">
                {guest.name}
              </p>
              <p className="text-sm text-[#2c6150]">{guest.role}</p>
            </div>
          </div>
          <p className="text-sm text-[#1f4e3c]">{guest.bio}</p>
          <Link
            href={`/episodes?guest=${guest.slug}`}
            className="text-sm font-semibold text-[#1d7157] underline decoration-[#acd8c7] underline-offset-4"
          >
            Hear episodes
          </Link>
        </article>
      ))}
    </div>
  );
}

