-- Enable required extensions
create extension if not exists "pgcrypto";

-- Episodes table ------------------------------------------------------------
create table if not exists public.episodes (
  id uuid primary key default gen_random_uuid(),
  rss_guid text unique not null,
  episode_number int,
  title text not null,
  slug text unique not null,
  description text,
  published_at timestamptz,
  audio_url text,
  duration_seconds int,
  image_url text,
  tags text[],
  guest_summary text,
  transcript text,
  created_at timestamptz default timezone('utc', now()),
  updated_at timestamptz default timezone('utc', now())
);

-- Guests -------------------------------------------------------------------
create table if not exists public.guests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  role text,
  bio text,
  photo_url text,
  created_at timestamptz default timezone('utc', now())
);

-- Join table ----------------------------------------------------------------
create table if not exists public.episode_guests (
  episode_id uuid references public.episodes(id) on delete cascade,
  guest_id uuid references public.guests(id) on delete cascade,
  primary key (episode_id, guest_id)
);

-- Resources -----------------------------------------------------------------
create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  url text not null,
  category text,
  created_at timestamptz default timezone('utc', now())
);

-- Sponsors ------------------------------------------------------------------
create table if not exists public.sponsors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  tier text,
  logo_url text,
  website text,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz default timezone('utc', now())
);

-- Site settings -------------------------------------------------------------
create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  tagline text,
  hero_subtitle text,
  manifesto text,
  social_links jsonb,
  newsletter_embed_html text,
  hero_cta_label text,
  created_at timestamptz default timezone('utc', now()),
  updated_at timestamptz default timezone('utc', now())
);

-- Form tables ---------------------------------------------------------------
create table if not exists public.forms_contact (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  message text,
  created_at timestamptz default timezone('utc', now())
);

create table if not exists public.forms_guest_submissions (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  nominee_details text,
  created_at timestamptz default timezone('utc', now())
);

create table if not exists public.forms_sponsor_inquiries (
  id uuid primary key default gen_random_uuid(),
  organization text,
  contact_name text,
  email text,
  message text,
  created_at timestamptz default timezone('utc', now())
);

-- Updated-at trigger --------------------------------------------------------
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_timestamp on public.episodes;
create trigger set_timestamp
before update on public.episodes
for each row execute procedure public.handle_updated_at();

drop trigger if exists set_site_settings_timestamp on public.site_settings;
create trigger set_site_settings_timestamp
before update on public.site_settings
for each row execute procedure public.handle_updated_at();

-- Storage buckets -----------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('guest-photos', 'guest-photos', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('episode-artwork', 'episode-artwork', true)
on conflict (id) do nothing;

-- Row Level Security --------------------------------------------------------
alter table public.episodes enable row level security;
alter table public.guests enable row level security;
alter table public.episode_guests enable row level security;
alter table public.resources enable row level security;
alter table public.sponsors enable row level security;
alter table public.site_settings enable row level security;
alter table public.forms_contact enable row level security;
alter table public.forms_guest_submissions enable row level security;
alter table public.forms_sponsor_inquiries enable row level security;

-- Public read policies
create policy "Public read episodes"
  on public.episodes
  for select
  using (true);

create policy "Public read guests"
  on public.guests
  for select
  using (true);

create policy "Public read resources"
  on public.resources
  for select
  using (true);

create policy "Public read sponsors"
  on public.sponsors
  for select
  using (true);

create policy "Public read site settings"
  on public.site_settings
  for select
  using (true);

-- Service role write policies
create policy "Episodes write via service role"
  on public.episodes
  for all
  using (auth.jwt()->>'role' = 'service_role')
  with check (auth.jwt()->>'role' = 'service_role');

create policy "Guests write via service role"
  on public.guests
  for all
  using (auth.jwt()->>'role' = 'service_role')
  with check (auth.jwt()->>'role' = 'service_role');

create policy "Resources write via service role"
  on public.resources
  for all
  using (auth.jwt()->>'role' = 'service_role')
  with check (auth.jwt()->>'role' = 'service_role');

create policy "Sponsors write via service role"
  on public.sponsors
  for all
  using (auth.jwt()->>'role' = 'service_role')
  with check (auth.jwt()->>'role' = 'service_role');

create policy "Site settings write via service role"
  on public.site_settings
  for all
  using (auth.jwt()->>'role' = 'service_role')
  with check (auth.jwt()->>'role' = 'service_role');

create policy "Episode guest link write via service role"
  on public.episode_guests
  for all
  using (auth.jwt()->>'role' = 'service_role')
  with check (auth.jwt()->>'role' = 'service_role');

-- Form submission inserts
create policy "Anon contact inserts"
  on public.forms_contact
  for insert
  with check (auth.jwt()->>'role' = 'anon');

create policy "Anon guest inserts"
  on public.forms_guest_submissions
  for insert
  with check (auth.jwt()->>'role' = 'anon');

create policy "Anon sponsor inserts"
  on public.forms_sponsor_inquiries
  for insert
  with check (auth.jwt()->>'role' = 'anon');

