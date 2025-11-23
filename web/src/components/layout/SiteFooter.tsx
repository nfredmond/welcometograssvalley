type SocialLinks = Record<string, string> | null | undefined;

type SiteFooterProps = {
  socialLinks?: SocialLinks;
};

export function SiteFooter({ socialLinks }: SiteFooterProps) {
  const links = socialLinks ? Object.entries(socialLinks) : [];

  return (
    <footer className="screen-edge">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-[2.5rem] border border-[#d9c6b3] bg-[#2d241d] p-8 text-[#f7f2ea]">
        <p className="text-xl font-semibold uppercase tracking-[0.4em]">
          Welcome to Grass Valley
        </p>
        <p className="text-sm text-[#d9c9be]">
          Recorded on Manion Canyon Rd. in the Sierra Nevada foothills. Real,
          unfiltered, hopeful conversations for our community lifeline.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#f1d9c1]">
          {links.length
            ? links.map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#6c5444] px-4 py-2 transition hover:bg-white/10"
                >
                  {key}
                </a>
              ))
            : "Add social links in Supabase site_settings > social_links JSON"}
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-[#b88658]">
          © {new Date().getFullYear()} Nathaniel Redmond & Ryan Doty
        </p>
      </div>
    </footer>
  );
}

