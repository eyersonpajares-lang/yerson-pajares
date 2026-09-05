-- Yerson Pajares personal site — initial schema
-- Run this once in Supabase Dashboard → SQL Editor → New query → Run.
-- Safe to re-run: every statement is idempotent (create if not exists / drop+create policy).

create extension if not exists pgcrypto;

-- ============================================================
-- SITE SETTINGS (single row: hero copy, contact, SEO defaults)
-- ============================================================
create table if not exists site_settings (
  id uuid primary key default gen_random_uuid(),
  full_name text,
  display_name text,
  role_es text,
  role_en text,
  positioning text,
  email text,
  linkedin_url text,
  hero_headline_es text,
  hero_headline_en text,
  hero_description_es text,
  hero_description_en text,
  contact_text_es text,
  contact_text_en text,
  vision_es text,
  vision_en text,
  beyond_es text,
  beyond_en text,
  seo_title text,
  seo_description text,
  updated_at timestamptz not null default now()
);

-- ============================================================
-- EXPERIENCES
-- ============================================================
create table if not exists experiences (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  role_es text,
  role_en text,
  period_es text,
  period_en text,
  project_es text,
  project_en text,
  client text,
  location text,
  sector text,
  context_es text,
  context_en text,
  highlight_es text,
  highlight_en text,
  work_es jsonb not null default '[]',
  work_en jsonb not null default '[]',
  tags jsonb not null default '[]',
  tools jsonb not null default '[]',
  metrics jsonb not null default '[]',
  images jsonb not null default '[]',
  featured boolean not null default false,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- PROJECTS (Selected Work / Engineering Lab / Ventures via `type`)
-- ============================================================
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  type text not null check (type in ('selected-work', 'lab', 'venture')),
  categories jsonb not null default '[]',
  title text not null,
  subtitle_es text,
  subtitle_en text,
  category_label text,
  year text,
  status_es text,
  status_en text,
  role_es text,
  role_en text,
  client text,
  cover text,
  gallery jsonb not null default '[]',
  short_description_es text,
  short_description_en text,
  sections jsonb not null default '[]',
  tools jsonb not null default '[]',
  tags jsonb not null default '[]',
  featured boolean not null default false,
  sort_order integer not null default 0,
  has_detail boolean not null default false,
  related_slugs jsonb not null default '[]',
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- IDEAS
-- ============================================================
create table if not exists ideas (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_es text,
  title_en text,
  excerpt_es text,
  excerpt_en text,
  date date not null default current_date,
  category text,
  reading_time integer,
  content_es text,
  content_en text,
  cover text,
  tags jsonb not null default '[]',
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- WORK LOG
-- ============================================================
create table if not exists work_log (
  id uuid primary key default gen_random_uuid(),
  date date not null default current_date,
  text_es text,
  text_en text,
  tags jsonb not null default '[]',
  link text,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

-- ============================================================
-- NOW ITEMS ("Currently building")
-- ============================================================
create table if not exists now_items (
  id uuid primary key default gen_random_uuid(),
  text_es text,
  text_en text,
  sort_order integer not null default 0,
  published boolean not null default true,
  updated_at timestamptz not null default now()
);

-- ============================================================
-- LINKEDIN POSTS
-- ============================================================
create table if not exists linkedin_posts (
  id uuid primary key default gen_random_uuid(),
  post_url text not null,
  date date,
  title_es text,
  title_en text,
  featured boolean not null default false,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- ============================================================
-- EDUCATION
-- ============================================================
create table if not exists education (
  id uuid primary key default gen_random_uuid(),
  institution text not null,
  degree_es text,
  degree_en text,
  status_es text,
  status_en text,
  sort_order integer not null default 0,
  published boolean not null default true
);

-- ============================================================
-- CREDENTIALS / TRAINING
-- ============================================================
create table if not exists credentials (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  issuer text,
  date date,
  url text,
  sort_order integer not null default 0,
  published boolean not null default true
);

-- ============================================================
-- MEDIA (metadata; files live in the `media` Storage bucket)
-- ============================================================
create table if not exists media (
  id uuid primary key default gen_random_uuid(),
  storage_path text not null,
  url text not null,
  kind text,
  alt text,
  created_at timestamptz not null default now()
);

-- ============================================================
-- CV FILES
-- ============================================================
create table if not exists cv_files (
  id uuid primary key default gen_random_uuid(),
  lang text not null check (lang in ('es', 'en')),
  url text not null,
  updated_at timestamptz not null default now()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- Public (anon) can only read published rows.
-- Any authenticated user (only you, since public sign-up is
-- disabled in Auth settings) has full read/write.
-- ============================================================
alter table site_settings enable row level security;
alter table experiences enable row level security;
alter table projects enable row level security;
alter table ideas enable row level security;
alter table work_log enable row level security;
alter table now_items enable row level security;
alter table linkedin_posts enable row level security;
alter table education enable row level security;
alter table credentials enable row level security;
alter table media enable row level security;
alter table cv_files enable row level security;

drop policy if exists "public read" on site_settings;
create policy "public read" on site_settings for select using (true);
drop policy if exists "admin write" on site_settings;
create policy "admin write" on site_settings for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "public read published" on experiences;
create policy "public read published" on experiences for select using (published = true);
drop policy if exists "admin write" on experiences;
create policy "admin write" on experiences for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "public read published" on projects;
create policy "public read published" on projects for select using (published = true);
drop policy if exists "admin write" on projects;
create policy "admin write" on projects for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "public read published" on ideas;
create policy "public read published" on ideas for select using (published = true);
drop policy if exists "admin write" on ideas;
create policy "admin write" on ideas for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "public read published" on work_log;
create policy "public read published" on work_log for select using (published = true);
drop policy if exists "admin write" on work_log;
create policy "admin write" on work_log for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "public read published" on now_items;
create policy "public read published" on now_items for select using (published = true);
drop policy if exists "admin write" on now_items;
create policy "admin write" on now_items for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "public read published" on linkedin_posts;
create policy "public read published" on linkedin_posts for select using (published = true);
drop policy if exists "admin write" on linkedin_posts;
create policy "admin write" on linkedin_posts for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "public read published" on education;
create policy "public read published" on education for select using (published = true);
drop policy if exists "admin write" on education;
create policy "admin write" on education for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "public read published" on credentials;
create policy "public read published" on credentials for select using (published = true);
drop policy if exists "admin write" on credentials;
create policy "admin write" on credentials for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "public read" on media;
create policy "public read" on media for select using (true);
drop policy if exists "admin write" on media;
create policy "admin write" on media for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "public read" on cv_files;
create policy "public read" on cv_files for select using (true);
drop policy if exists "admin write" on cv_files;
create policy "admin write" on cv_files for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- ============================================================
-- STORAGE: public bucket for uploaded photos, screenshots, PDFs
-- ============================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "public read media bucket" on storage.objects;
create policy "public read media bucket" on storage.objects
  for select using (bucket_id = 'media');

drop policy if exists "admin write media bucket" on storage.objects;
create policy "admin write media bucket" on storage.objects
  for all using (bucket_id = 'media' and auth.role() = 'authenticated')
  with check (bucket_id = 'media' and auth.role() = 'authenticated');
