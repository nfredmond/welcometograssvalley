import Link from "next/link";
import { LogoSign } from "@/components/LogoSign";

const SUPPORT_URL = "https://www.buzzsprout.com/2559461/support";

const links = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/guests", label: "Guests" },
  { href: "/resources", label: "Resources" },
  { href: "/support", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="screen-edge">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-center">
        <LogoSign />
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
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1f4a3a] px-4 py-1.5 text-[#e5f4ec] transition hover:bg-[#184739]"
          >
            Donate
          </a>
        </nav>
      </div>
    </header>
  );
}

