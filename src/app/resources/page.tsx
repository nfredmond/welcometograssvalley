import { getResources } from "@/lib/data/resources";
import { ResourceGroups } from "@/components/resources/ResourceGroups";

export const revalidate = 300;

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
          Community lifeline
        </p>
        <h1 className="mt-2 text-4xl text-[#0f2e24]">Resources & support</h1>
        <p className="mt-4 text-sm text-[#2c6150]">
          These listings are crowd-sourced. They are not medical advice. Always
          consult licensed professionals for treatment.
        </p>
      </section>

      <ResourceGroups resources={resources} />

      <div className="rounded-3xl border border-dashed border-[#cfe3d3] bg-white/80 p-6 text-sm text-[#2c6150]">
        <strong className="block text-[#0f2e24]">
          Recovery / mental health disclaimer
        </strong>
        <p className="mt-2">
          The podcast shares personal stories that may reference substance use,
          recovery, or trauma. Seek immediate help if you or someone you know is
          in crisis: 988 (Suicide & Crisis Lifeline), 911, or the Nevada County
          Crisis Stabilization Unit at (530) 265-5811.
        </p>
      </div>
    </div>
  );
}

