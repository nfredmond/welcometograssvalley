type NewsletterEmbedProps = {
  html?: string | null;
};

export function NewsletterEmbed({ html }: NewsletterEmbedProps) {
  if (!html) {
    return (
      <div className="rounded-3xl border border-dashed border-[#d2b799] bg-white/70 p-6 text-sm text-[#5d4a3e]">
        Newsletter embed coming soon. Add your provider’s HTML snippet to the
        `site_settings` table to display it here.
      </div>
    );
  }

  return (
    <div
      className="newsletter-embed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

