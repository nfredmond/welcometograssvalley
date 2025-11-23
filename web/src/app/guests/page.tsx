import { getGuests } from "@/lib/data/guests";
import { GuestGrid } from "@/components/guests/GuestGrid";
import { GuestForm } from "@/components/forms/GuestForm";

export const revalidate = 300;

export default async function GuestsPage() {
  const guests = await getGuests();

  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a27955]">
          Our community
        </p>
        <h1 className="mt-2 text-4xl text-[#2d241d]">Voices of Grass Valley</h1>
        <p className="mt-4 text-sm text-[#5a4d44]">
          Sheriffs, probation officers, nurses, musicians, city leaders,
          historians—we ask everyone to bring their real stories.
        </p>
      </section>

      <GuestGrid guests={guests} />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-6">
          <h2 className="text-2xl text-[#2d241d]">Be a guest</h2>
          <p className="mt-4 text-sm text-[#5a4d44]">
            Suggest yourself or a neighbor who&apos;s making Grass Valley
            better. We welcome people in recovery, public servants, artists, and
            anyone with a hopeful story.
          </p>
        </div>
        <GuestForm />
      </section>
    </div>
  );
}

