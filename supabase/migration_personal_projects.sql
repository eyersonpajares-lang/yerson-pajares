-- Migration for the "3 sections" redesign (Experience / Personal Projects / Ideas).
-- Run once in Supabase Dashboard → SQL Editor → New query → Run.
-- Safe to re-run.

-- 1. New column for a project's real, public website.
alter table projects add column if not exists website_url text;

-- 2. Consolidate the two AI/reporting entries into one PROJEXA project.
--    "app-de-daily-report" has your own real description + the real URL
--    (reportes-diarios-selin.vercel.app) — that URL becomes website_url.
--    "project-control-ia" is renamed to PROJEXA, slug included (the site
--    is brand new / not indexed yet, so it's safe to clean up the URL).
update projects set
  slug = 'projexa',
  title = 'PROJEXA',
  category_label = 'Construction Tech · Project Controls · AI',
  website_url = 'https://reportes-diarios-selin.vercel.app/login',
  short_description_es = 'Conectando la información de campo con Project Controls.',
  short_description_en = 'Connecting field information with Project Controls.'
where slug = 'project-control-ia';

-- The older duplicate entry is unpublished (not deleted) now that its
-- real content has been merged into PROJEXA above.
update projects set published = false where slug = 'app-de-daily-report';

-- 3. Personal Projects is now just three peer projects: PROJEXA,
--    Solarcytec, San Roque. The old "selected work" / "lab" entries
--    don't fit that model anymore — unpublished, not deleted, in case
--    you want to reuse the content later.
update projects set published = false where slug in (
  'planning-scheduling',
  'construction-infrastructure',
  'contracts-delay-analysis',
  'p6-powerbi-ai-pipeline',
  'planning-ai-agents'
);
