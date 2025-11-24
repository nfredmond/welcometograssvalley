const highlights = [
  {
    title: "Ridge scan",
    description: "Service news + fire season briefings in under five minutes.",
  },
  {
    title: "Yuba flows",
    description: "River safety, cleanup crews, and water releases each week.",
  },
  {
    title: "Recovery net",
    description: "Meeting roll calls, sober housing leads, and mentors on deck.",
  },
];

export function CommunityStrip() {
  return (
    <div className="panel flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
          Quick sweeps
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[#c9dfcf] bg-[#f3faf6] p-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e6751]">
              {item.title}
            </p>
            <p className="mt-2 text-sm text-[#1f4e3c]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

