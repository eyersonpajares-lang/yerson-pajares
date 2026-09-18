-- Adds "Actualizar XER Metrado" (a Claude Skill) as a 4th Personal Project,
-- with a direct download link to the .zip shipped in this same deploy
-- (public/downloads/actualizar-xer-metrado.zip).
-- Run once in Supabase Dashboard -> SQL Editor -> New query -> Run. Safe to re-run.

insert into projects (
  slug, type, categories, title, subtitle_es, subtitle_en, category_label, year,
  status_es, status_en, role_es, role_en, website_url,
  short_description_es, short_description_en,
  sections, tools, tags, featured, sort_order, has_detail, published
) values (
  'actualizar-xer-metrado', 'lab',
  '["ai-automation","project-controls"]'::jsonb,
  'Actualizar XER Metrado',
  'Claude Skill para Primavera P6', 'Claude Skill for Primavera P6',
  'AI · Project Controls · Primavera P6', '2026',
  'En uso', 'In active use',
  'Creador / Desarrollador', 'Creator / Developer',
  '/downloads/actualizar-xer-metrado.zip',
  'Skill de Claude que actualiza avance físico, Started/Finished, fechas reales y Remaining Duration en un XER de Primavera P6 a partir de un Excel de metrado, y entrega un informe de project controls: ruta crítica, near-critical, progreso fuera de secuencia y Budgeted/Earned Labor Units.',
  'A Claude Skill that updates physical progress, Started/Finished, actual dates and Remaining Duration in a Primavera P6 XER from a metrado Excel, and delivers a project-controls report: critical path, near-critical, out-of-sequence progress and Budgeted/Earned Labor Units.',
  '[]'::jsonb,
  '["Claude","Primavera P6","Python","Excel"]'::jsonb,
  '["Claude Skill","Primavera P6","XER","Project Controls","AI"]'::jsonb,
  false, 4, true, true
)
on conflict (slug) do update set
  website_url = excluded.website_url,
  short_description_es = excluded.short_description_es,
  short_description_en = excluded.short_description_en,
  published = true;
