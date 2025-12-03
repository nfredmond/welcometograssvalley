import { GuestForm } from "@/components/forms/GuestForm";

export const revalidate = 300;

const guestList = [
  { name: "Gary Pate", episode: 3, status: "complete", note: "Released Dec. 1st, 2025" },
  { name: 'Tyler Ullom aka "Ty-Stick"', episode: 4, status: "complete", note: "Releasing Dec. 3rd, 2025" },
  { name: "Marc Bowden", episode: 5, status: "upcoming" },
  { name: "James Maple", episode: 6, status: "upcoming" },
  { name: "Nick Doty", episode: 7, status: "upcoming" },
  { name: "Neil Daly", episode: 8, status: "upcoming" },
  { name: "Eric and Ian Oliver", episode: 9, status: "upcoming" },
  { name: "Chelsea Harris", episode: 10, status: "upcoming" },
  { name: "Ashley Gaughan", episode: 11, status: "upcoming" },
  { name: "Ryan Duram", episode: 12, status: "upcoming", note: "Big Daddy Salsa" },
  { name: "Clayton Lahr and Smartsville Pod", episode: 13, status: "upcoming" },
  { name: "Ryan Jenson", episode: 14, status: "upcoming" },
  { name: "James Bratt", episode: 15, status: "upcoming" },
];

export default async function GuestsPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
          Voices
        </p>
        <h1 className="mt-2 text-4xl text-[#0f2e24]">Podcast Guest List</h1>
        <p className="mt-4 text-sm text-[#2c6150]">
          Meet the people sharing their stories on Welcome to Grass Valley.
        </p>
      </section>

      <section className="panel p-6">
        <h2 className="text-2xl text-[#0f2e24] mb-6">Upcoming & Past Guests</h2>
        <ul className="space-y-3">
          {guestList.map((guest) => (
            <li
              key={guest.episode}
              className="flex items-center gap-3 py-2 border-b border-[#cfe3d3] last:border-0"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f4a3a] text-white text-xs font-bold flex items-center justify-center">
                {guest.episode}
              </span>
              <span className="font-medium text-[#0f2e24]">{guest.name}</span>
              {guest.note && (
                <span className="text-xs text-[#5da37c]">— {guest.note}</span>
              )}
              {guest.status === "complete" && (
                <span className="ml-auto text-[#2f6b4e] text-lg">✓</span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-[#5da37c] italic">
          ...so far and counting
        </p>
      </section>

      <section className="panel p-6 bg-[#e3f3ec] border-l-4 border-[#5da37c]">
        <p className="text-sm text-[#1f4a3a] font-medium">
          💡 We need elderly guests! They are always the best and have lived longer than us!
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-6">
          <h2 className="text-2xl text-[#0f2e24]">Suggest a Guest</h2>
          <p className="mt-4 text-sm text-[#2c6150]">
            Know someone with a great story? Let us know!
          </p>
        </div>
        <GuestForm />
      </section>
    </div>
  );
}

