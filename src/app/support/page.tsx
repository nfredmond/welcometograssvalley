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
      title: "Join the lifeline club",
      description: "Monthly giving keeps transcripts and free resources online.",
      action: "Support on Patreon",
      url: "https://patreon.com/",
    },
    {
      title: "Send a recovery scholarship",
      description: "Cover therapy, child care, or sober living for neighbors on the show.",
      action: "Email the producers",
      url: "mailto:hello@welcometograssvalley.com",
    },
    {
      title: "Sponsor a season",
      description: "Align your local business with hopeful storytelling. Tiered placements available.",
      action: "Use the inquiry form",
      url: "#sponsor-form",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a27955]">
          Support & sponsors
        </p>
        <h1 className="mt-2 text-4xl text-[#2d241d]">
          Keep the lifeline strong
        </h1>
        <p className="mt-4 text-sm text-[#5a4d44]">
          Every partnership funds recovery resources, transcripts, and
          neighborhood reporting across Grass Valley.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {supportOptions.map((option) => (
          <a
            key={option.title}
            href={option.url}
            className="panel flex flex-col gap-3 p-6 transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#a27955]">
              {option.title}
            </p>
            <p className="text-sm text-[#4f4137]">{option.description}</p>
            <span className="text-sm font-semibold text-[#6f4b33]">
              {option.action} →
            </span>
          </a>
        ))}
      </div>

      <SponsorStrip sponsors={sponsors} />

      <section id="sponsor-form" className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-8">
          <h2 className="text-3xl text-[#2d241d]">Sponsor inquiry</h2>
          <p className="mt-4 text-sm text-[#5a4d44]">
            Share your organization, why you&apos;re excited about the podcast,
            and your ideal timeline. We offer tiers for title sponsors, segment
            partners, and community backers.
          </p>
        </div>
        <SponsorForm />
      </section>

      <section className="panel p-8">
        <h2 className="text-3xl text-[#2d241d]">Newsletter</h2>
        <p className="text-sm text-[#5a4d44]">
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

