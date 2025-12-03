import type { Resource } from "@/lib/data/resources";

type ResourceGroupsProps = {
  resources: Resource[];
};

function groupResources(resources: Resource[]) {
  return resources.reduce<Record<string, Resource[]>>((acc, resource) => {
    const key = resource.category ?? "Community";
    acc[key] = acc[key] || [];
    acc[key].push(resource);
    return acc;
  }, {});
}

export function ResourceGroups({ resources }: ResourceGroupsProps) {
  if (!resources.length) {
    return (
      <div className="panel p-6 text-sm text-[#2c6150]">
        Resource links coming soon.
      </div>
    );
  }

  const grouped = groupResources(resources);

  return (
    <div className="flex flex-col gap-6">
      {Object.entries(grouped).map(([category, links]) => (
        <section key={category} className="panel p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#6dac87]">
            {category}
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#c9dfcf] bg-white/80 p-4 transition hover:border-[#6dac87]"
              >
                <p className="text-lg font-semibold text-[#0f2e24]">
                  {link.title}
                </p>
                <p className="text-sm text-[#1f4e3c]">{link.description}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

