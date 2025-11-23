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
      <div className="panel p-6 text-sm text-[#5a4d44]">
        Resource links will appear here once you add them in Supabase.
      </div>
    );
  }

  const grouped = groupResources(resources);

  return (
    <div className="flex flex-col gap-6">
      {Object.entries(grouped).map(([category, links]) => (
        <section key={category} className="panel p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#b88658]">
            {category}
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#e4d3c2] bg-white/80 p-4 transition hover:border-[#b88658]"
              >
                <p className="text-lg font-semibold text-[#2d241d]">
                  {link.title}
                </p>
                <p className="text-sm text-[#4f4137]">{link.description}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

