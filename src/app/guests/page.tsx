import { getGuests } from "@/lib/data/guests";
import { GuestGrid } from "@/components/guests/GuestGrid";
import { GuestForm } from "@/components/forms/GuestForm";

export const revalidate = 300;

export default async function GuestsPage() {
  const guests = await getGuests();

  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
          Voices
        </p>
        <h1 className="mt-2 text-4xl text-[#0f2e24]">Grass Valley roster</h1>
        <p className="mt-4 text-sm text-[#2c6150]">
          Sheriffs, nurses, medics, historians, growers, artists—short bursts from each.
        </p>
      </section>

      <GuestGrid guests={guests} />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-6">
          <h2 className="text-2xl text-[#0f2e24]">Pitch a segment</h2>
          <p className="mt-4 text-sm text-[#2c6150]">
            Drop a name doing the work—recovery, service, music, food, river safety.
          </p>
        </div>
        <GuestForm />
      </section>
    </div>
  );
}

