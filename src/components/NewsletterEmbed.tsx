type NewsletterEmbedProps = {
  html?: string | null;
};

export function NewsletterEmbed({ html }: NewsletterEmbedProps) {
  if (!html) {
    return (
      <div className="rounded-3xl border border-dashed border-[#bedfcc] bg-white/70 p-6 text-sm text-[#285e4b]">
        Newsletter coming soon!
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

