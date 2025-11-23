## Welcome to Grass Valley Podcast

Modern, mobile-first Next.js + Supabase stack for the “Welcome to Grass Valley” podcast. Hosts Nathaniel Redmond & Ryan Doty mix respectful recovery conversations, local news, comedy, and interviews with diverse Sierra Nevada neighbors.

### Tech stack

- Next.js App Router (TypeScript) + Tailwind v4
- Supabase (Postgres, Storage, Edge Functions, Cron)
- Buzzsprout RSS ingestion via Supabase Edge Function
- Vercel hosting + ISR (revalidate every 60s on content-heavy routes)

## Quickstart

```bash
cp env.example .env.local
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_ANON_KEY` | Public anon key used by server components (read-only) |
| `SUPABASE_SERVICE_ROLE_KEY` | Service key used inside API routes and Edge Function |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used for metadata/sitemap) |
| `BUZZSPROUT_RSS_URL` | Buzzsprout RSS feed used by the `sync_episodes_from_rss` function |

Never expose the service role key in the browser—only set it in serverless/Vercel env vars and Supabase functions.

## Database & storage setup

1. Log into Supabase and create a new project.
2. Run the migration:

   ```bash
   npx supabase login
   npx supabase link --project-ref <project_ref>
   npx supabase migration up
   ```

   This creates:

   - `episodes`, `guests`, `episode_guests`, `resources`, `sponsors`
   - Forms tables (`forms_contact`, `forms_guest_submissions`, `forms_sponsor_inquiries`)
   - `site_settings` for hero text, manifesto, socials, newsletter HTML
   - Public storage buckets (`guest-photos`, `episode-artwork`)
   - Row-Level Security (public read on content tables, anonymous insert-only on form tables, service-role writes for everything else)

3. Seed `site_settings` with at least one row for tagline/social links to avoid layout fallbacks.

## RSS sync Edge Function

1. Set required env values inside Supabase dashboard for the function (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `BUZZSPROUT_RSS_URL`).
2. Deploy & test:

   ```bash
   npx supabase functions serve --env-file .env.local
   # in another terminal
   curl http://localhost:54321/functions/v1/sync_episodes_from_rss
   ```

3. Deploy to Supabase:

   ```bash
   npx supabase functions deploy sync_episodes_from_rss --project-ref <project_ref>
   ```

4. A cron entry (`supabase/config.toml`) runs the function hourly. In the Supabase dashboard, enable the scheduled trigger (or adjust cadence as needed).

## Forms & APIs

- `/api/contact`, `/api/guest-submission`, `/api/sponsor-inquiry`
  - Validate payloads with Zod
  - Honeypot `trailhead` field for basic spam protection
  - Inserts use service-role Supabase client

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Create a new Vercel project using the repository root (Next.js app now lives there).
3. Set the env vars listed above in the Vercel dashboard.
4. Add Supabase URL/keys and Buzzsprout RSS in the Supabase Edge Function settings as well.
5. After deploy, trigger the RSS sync once (`supabase functions invoke sync_episodes_from_rss --project-ref <ref>`).

## Local content management

- Site copies (tagline, manifesto, socials, newsletter embed) live in the `site_settings` table.
- Episode & guest artwork should be uploaded to the `episode-artwork` or `guest-photos` buckets; store the public URLs in the respective table rows.
- Pages revalidate every 60 seconds, so updates propagate quickly without manual cache clears.

## Testing checklist

- `npm run lint` (Next.js + ESLint)
- `npm run dev` and smoke test key routes: `/`, `/episodes`, `/episodes/[slug]`, `/about`, `/guests`, `/resources`, `/support`, `/contact`, `/privacy`
- Submit each form to confirm Supabase inserts succeed (watch Supabase dashboard or logs)

## Future enhancements

- Add authenticated admin tools for editing resources/sponsors.
- Wire up newsletter provider SDK instead of embed HTML.
- Expand testing (Playwright) and monitoring via Supabase logs/Vercel analytics.
