import Link from "next/link";
import { LogoSign } from "@/components/LogoSign";

const links = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/guests", label: "Guests" },
  { href: "/resources", label: "Resources" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

type SiteHeaderProps = {
  tagline?: string | null;
};

export function SiteHeader({ tagline }: SiteHeaderProps) {
  return (
    <header className="screen-edge">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-center">
        <LogoSign tagline={tagline} />
        <nav className="flex flex-wrap items-center justify-center gap-4 rounded-full border border-[#cfe3d3] bg-[#f2f7f3]/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#1f4a3a] shadow-[0_15px_25px_rgba(50,38,31,0.12)] backdrop-blur">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#6dac87]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

