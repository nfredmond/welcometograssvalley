export const revalidate = 86400;

export default function PrivacyPage() {
  return (
    <article className="panel space-y-6 p-8">
      <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
        Policies
      </p>
      <h1 className="text-4xl text-[#0f2e24]">
        Privacy Policy & Disclaimers
      </h1>
      <section className="space-y-3 text-sm text-[#1f4e3c]">
        <h2 className="text-2xl text-[#0f2e24]">Privacy</h2>
        <p>
          Welcome to Grass Valley (“we,” “us,” “our”) collects the minimum
          amount of personal information needed to operate the podcast and
          related community offerings.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Contact, guest, and sponsor forms store submissions securely in
            Supabase with Row-Level Security enforced. Only administrators with
            service credentials can view submissions.
          </li>
          <li>
            Newsletter signups route through the provider embedded on the
            Support page. Refer to that provider’s policy for more information.
          </li>
          <li>
            We do not sell personal data, and analytics are limited to aggregate
            podcast platform metrics.
          </li>
        </ul>
      </section>
      <section className="space-y-3 text-sm text-[#1f4e3c]">
        <h2 className="text-2xl text-[#0f2e24]">Content warning</h2>
        <p>
          Episodes often address addiction, recovery, mental health challenges,
          violence, and other sensitive topics. Listener discretion is advised.
        </p>
        <p>
          If you or someone you know is in crisis, call 988 (Suicide & Crisis
          Lifeline), 911, or the Nevada County Crisis Stabilization Unit at
          (530) 265-5811.
        </p>
      </section>
      <section className="space-y-3 text-sm text-[#1f4e3c]">
        <h2 className="text-2xl text-[#0f2e24]">Recovery disclaimer</h2>
        <p>
          Podcast conversations are personal experiences, not medical or legal
          advice. Always consult licensed clinicians for diagnosis, treatment,
          or therapy. Mention of specific programs, medications, or modalities
          does not equal endorsement.
        </p>
      </section>
      <section className="space-y-3 text-sm text-[#1f4e3c]">
        <h2 className="text-2xl text-[#0f2e24]">Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a
            href="mailto:privacy@welcometograssvalley.com"
            className="underline decoration-[#acd8c7]"
          >
            privacy@welcometograssvalley.com
          </a>
          .
        </p>
      </section>
    </article>
  );
}

