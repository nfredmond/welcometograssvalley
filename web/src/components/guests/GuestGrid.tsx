import type { Guest } from "@/lib/data/guests";
import Link from "next/link";

type GuestGridProps = {
  guests: Guest[];
};

export function GuestGrid({ guests }: GuestGridProps) {
  if (!guests.length) {
    return (
      <div className="panel p-6 text-sm text-[#5a4d44]">
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
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f4eadc] text-xl font-semibold text-[#5b3b2e]">
                {guest.name.charAt(0)}
              </div>
            )}
            <div>
              <p className="text-lg font-semibold text-[#2d241d]">
                {guest.name}
              </p>
              <p className="text-sm text-[#5a4d44]">{guest.role}</p>
            </div>
          </div>
          <p className="text-sm text-[#4f4137]">{guest.bio}</p>
          <Link
            href={`/episodes?guest=${guest.slug}`}
            className="text-sm font-semibold text-[#6f4b33] underline decoration-[#d3b08c] underline-offset-4"
          >
            Hear episodes
          </Link>
        </article>
      ))}
    </div>
  );
}

