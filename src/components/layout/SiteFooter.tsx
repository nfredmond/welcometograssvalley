type SocialLinks = Record<string, string> | null | undefined;

type SiteFooterProps = {
  socialLinks?: SocialLinks;
};

export function SiteFooter({ socialLinks }: SiteFooterProps) {
  const links = socialLinks ? Object.entries(socialLinks) : [];

  return (
    <footer className="screen-edge">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-[2.5rem] border border-[#cfe3d3] bg-[#0f2e24] p-8 text-[#edf6f1]">
        <p className="text-xl font-semibold uppercase tracking-[0.4em]">
          Welcome to Grass Valley
        </p>
        <p className="text-sm text-[#d7efe1]"></p>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#d7efe1]">
          {links.length
            ? links.map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#2b5e4b] px-4 py-2 transition hover:bg-white/10"
                >
                  {key}
                </a>
              ))
            : null}
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-[#6dac87]">
          © {new Date().getFullYear()} Nathaniel Redmond & Ryan Doty
        </p>
      </div>
    </footer>
  );
}

