const highlights = [
  {
    title: "Sobriety circles",
    description: "Weekly recovery meetups at the Holbrooke, Thursdays 7p.",
  },
  {
    title: "Trail workdays",
    description: "Volunteers needed on the Empire Mine loop this Saturday.",
  },
  {
    title: "Voices of service",
    description: "Hear from sheriffs, nurses, and counselors on rotating segments.",
  },
];

export function CommunityStrip() {
  return (
    <div className="panel flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a27955]">
          From Around Grass Valley
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[#e4d3c2] bg-[#fefbf6] p-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5f4637]">
              {item.title}
            </p>
            <p className="mt-2 text-sm text-[#4f4137]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

