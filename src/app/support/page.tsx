import { getActiveSponsors } from "@/lib/data/sponsors";
import { SponsorForm } from "@/components/forms/SponsorForm";
import { SponsorStrip } from "@/components/SponsorStrip";
import { NewsletterEmbed } from "@/components/NewsletterEmbed";
import { getSiteSettings } from "@/lib/data/settings";

export const revalidate = 300;

export default async function SupportPage() {
  const [sponsors, settings] = await Promise.all([
    getActiveSponsors(),
    getSiteSettings(),
  ]);

  const supportOptions = [
    {
      title: "Support the show",
      description: "Monthly support keeps transcripts, captions, and helplines live.",
      action: "Donate on Buzzsprout",
      url: "https://www.buzzsprout.com/2559461/support",
      external: true,
    },
    {
      title: "Send a recovery scholarship",
      description: "Cover therapy, child care, or sober housing for a featured guest.",
      action: "Email the producers",
      url: "mailto:hello@welcometograssvalley.com",
      external: true,
    },
    {
      title: "Sponsor a season",
      description: "Align your local business with hopeful storytelling. Tiered placements available.",
      action: "Use the inquiry form",
      url: "#sponsor-form",
      external: false,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
          Support & sponsors
        </p>
        <h1 className="mt-2 text-4xl text-[#0f2e24]">
          Keep the signal strong
        </h1>
        <p className="mt-4 text-sm text-[#2c6150]">
          Every partnership funds recovery resources, transcripts, and foothill service coverage.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {supportOptions.map((option) => (
          <a
            key={option.title}
            href={option.url}
            target={option.external ? "_blank" : undefined}
            rel={option.external ? "noopener noreferrer" : undefined}
            className="panel flex flex-col gap-3 p-6 transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
              {option.title}
            </p>
            <p className="text-sm text-[#1f4e3c]">{option.description}</p>
            <span className="text-sm font-semibold text-[#1d7157]">
              {option.action} →
            </span>
          </a>
        ))}
      </div>

      <SponsorStrip sponsors={sponsors} />

      <section id="sponsor-form" className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-8">
          <h2 className="text-3xl text-[#0f2e24]">Sponsor inquiry</h2>
          <p className="mt-4 text-sm text-[#2c6150]">
            Share your organization, why you&apos;re excited about the podcast,
            and your ideal timeline. We offer tiers for title sponsors, segment
            partners, and community backers.
          </p>
        </div>
        <SponsorForm />
      </section>

      <section className="panel p-8">
        <h2 className="text-3xl text-[#0f2e24]">Newsletter</h2>
        <p className="text-sm text-[#2c6150]">
          Get episode drops, resource round-ups, and behind-the-scenes dispatches
          in your inbox.
        </p>
        <div className="mt-4">
          <NewsletterEmbed html={settings?.newsletter_embed_html} />
        </div>
      </section>
    </div>
  );
}

