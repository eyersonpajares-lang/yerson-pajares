-- Seeds the `projects` table with the 9 projects that were previously
-- hardcoded in lib/data/projects.ts, so the new /admin/projects CMS
-- has real starting data instead of an empty table.
-- Run once in Supabase Dashboard → SQL Editor → New query → Run.
-- Safe to re-run: ON CONFLICT (slug) DO NOTHING skips rows that already exist.

insert into projects (
  slug, type, categories, title, subtitle_es, subtitle_en, category_label, year,
  status_es, status_en, role_es, role_en, short_description_es, short_description_en,
  sections, tools, tags, featured, sort_order, has_detail, published
) values
(
  'project-control-ia', 'selected-work',
  '["ai-automation","project-controls","data"]'::jsonb,
  'PROJECT CONTROL IA',
  'AI × Construcción × Project Controls', 'AI × Construction × Project Controls',
  'AI · Project Controls · Construction Tech', '2026',
  'En desarrollo', 'In development',
  'Creador / Desarrollador', 'Creator / Developer',
  'De reportes de campo no estructurados a información lista para Project Controls.',
  'From unstructured field reports to information Project Controls can actually use.',
  '[
    {"key":"overview","title":{"es":"Resumen","en":"Overview"},
     "body":{"es":"En proyectos grandes, múltiples frentes y disciplinas generan información continuamente. Cuando los reportes se realizan mediante mensajes no estructurados, parte de esa información puede perderse, duplicarse o resultar difícil de analizar.",
             "en":"In large projects, multiple fronts and disciplines generate information continuously. When reporting happens through unstructured messages, part of that information can be lost, duplicated, or hard to analyze."}},
    {"key":"problem","title":{"es":"El problema","en":"The problem"},
     "body":{"es":"Información distribuida entre WhatsApp, fotografías, Excel, reportes, mensajes y documentos.",
             "en":"Information scattered across WhatsApp, photographs, Excel, reports, messages and documents."},
     "list":["WhatsApp","Photographs","Excel","Reports","Messages","Documents"]},
    {"key":"process","title":{"es":"El proceso","en":"The process"},
     "steps":{"es":["Datos de campo","Datos estructurados","Información del proyecto","Decisiones"],
              "en":["Field data","Structured data","Project information","Decisions"]}},
    {"key":"tools","title":{"es":"Herramientas","en":"Tools"},
     "list":["Python","Database","AI","Automation","Project Controls"]},
    {"key":"nextSteps","title":{"es":"Explorando ahora","en":"Exploring now"},
     "list":["Structured daily reports","AI extraction","Restrictions","Progress","Primavera P6 integration","Automated reporting"]}
  ]'::jsonb,
  '["Python","Database","AI","Automation","Project Controls"]'::jsonb,
  '["AI","Python","Automation","Project Controls","Data"]'::jsonb,
  true, 1, true, true
),
(
  'planning-scheduling', 'selected-work',
  '["project-controls","planning"]'::jsonb,
  'PLANNING & SCHEDULING', null, null,
  'Project Controls', '',
  null, null, null, null,
  'Planeamiento y control de proyectos con Primavera P6, CPM, curvas S, Forecast, Lookahead Planning y análisis de restricciones.',
  'Planning and project controls using Primavera P6, CPM, S-Curves, Forecast, Lookahead Planning and restrictions analysis.',
  '[]'::jsonb, '[]'::jsonb,
  '["Primavera P6","CPM","S-Curve","Forecast"]'::jsonb,
  false, 10, false, true
),
(
  'construction-infrastructure', 'selected-work',
  '["construction"]'::jsonb,
  'CONSTRUCTION & INFRASTRUCTURE', null, null,
  'Construction', '',
  null, null, null, null,
  'Proyectos civiles, hidráulicos y electromecánicos: planificación, seguimiento y control en campo.',
  'Civil, hydraulic and electromechanical projects — planning, monitoring and control in the field.',
  '[]'::jsonb, '[]'::jsonb,
  '["Civil","Hydraulic","Electromechanical","Infrastructure"]'::jsonb,
  false, 11, false, true
),
(
  'contracts-delay-analysis', 'selected-work',
  '["project-controls"]'::jsonb,
  'CONTRACTS & DELAY ANALYSIS', null, null,
  'Contracts', '',
  null, null, null, null,
  'Planificación contractual, Compensation Events, Critical Path y Time Impact Analysis.',
  'Contractual planning, Compensation Events, Critical Path and Time Impact Analysis.',
  '[]'::jsonb, '[]'::jsonb,
  '["NEC","Delay Analysis","Compensation Events","Critical Path"]'::jsonb,
  false, 12, false, true
),
(
  'daily-report-automation', 'lab',
  '["ai-automation","project-controls"]'::jsonb,
  'Daily Report Automation', null, null,
  'AI & Automation', '2026',
  'Experimentando', 'Experimenting', null, null,
  'Automatización de reportes diarios de obra mediante AI.',
  'Automating daily site reports with AI.',
  '[]'::jsonb, '[]'::jsonb,
  '["AI","Automation"]'::jsonb,
  false, 20, false, true
),
(
  'p6-powerbi-ai-pipeline', 'lab',
  '["data","ai-automation"]'::jsonb,
  'Primavera P6 → Power BI → AI', null, null,
  'Data & Automation', '2026',
  'Explorando', 'Exploring', null, null,
  'Un flujo directo entre Primavera P6, Power BI y modelos de AI.',
  'A direct pipeline between Primavera P6, Power BI and AI models.',
  '[]'::jsonb, '[]'::jsonb,
  '["Primavera P6","Power BI","AI"]'::jsonb,
  false, 21, false, true
),
(
  'planning-ai-agents', 'lab',
  '["ai-automation","planning"]'::jsonb,
  'Planning AI Agents', null, null,
  'AI & Automation', '2026',
  'Prototipo temprano', 'Early prototype', null, null,
  'AI Agents aplicados a Planning & Scheduling.',
  'AI agents applied to Planning & Scheduling.',
  '[]'::jsonb, '[]'::jsonb,
  '["AI Agents","Planning"]'::jsonb,
  false, 22, false, true
),
(
  'solarcytec', 'venture',
  '["ventures"]'::jsonb,
  'SOLARCYTEC', null, null,
  'Renewable Energy · Solar Thermal', '2016 — 2019',
  null, null,
  'Co-fundador', 'Co-founder',
  'Sistemas solares térmicos y energía renovable — más de 700 termotanques instalados.',
  'Solar thermal systems and renewable energy — 700+ solar water heaters installed.',
  '[
    {"key":"overview","title":{"es":"Resumen","en":"Overview"},
     "body":{"es":"Solarcytec fue una iniciativa que co-fundé en 2016, enfocada en energía renovable, principalmente sistemas solares térmicos. Durante ese período instalamos más de 700 termotanques solares.",
             "en":"Solarcytec was a venture I co-founded in 2016, focused on renewable energy — primarily solar thermal systems. During that time we installed more than 700 solar water heaters."}},
    {"key":"role","title":{"es":"Mi participación","en":"What I did"},
     "list":["Solar thermal systems","Renewable energy","Operations","Entrepreneurship","Execution"]}
  ]'::jsonb,
  '[]'::jsonb,
  '["Renewable Energy","Entrepreneurship","Execution"]'::jsonb,
  false, 2, true, true
),
(
  'san-roque', 'venture',
  '["ventures"]'::jsonb,
  'SAN ROQUE', null, null,
  'Architecture & Construction', '2021',
  null, null,
  'Jefe de Planeamiento', 'Head of Planning',
  'Planificación y construcción real: Los Balcones del Valle, Teresa Conga y Puente Miraflores.',
  'Real planning and construction: Los Balcones del Valle, Teresa Conga and Puente Miraflores.',
  '[
    {"key":"overview","title":{"es":"Resumen","en":"Overview"},
     "body":{"es":"En San Roque Arquitectura y Construcción lideré la planificación de tres proyectos entre enero y mayo de 2021: Los Balcones del Valle, Teresa Conga y Puente Miraflores.",
             "en":"At San Roque Arquitectura y Construcción I led planning across three projects between January and May 2021: Los Balcones del Valle, Teresa Conga and Puente Miraflores."}},
    {"key":"role","title":{"es":"Mi participación","en":"What I did"},
     "list":["Project planning","Construction","Cost management","S-Curve","Baseline comparison","Productivity analysis","Material planning","Water systems"]}
  ]'::jsonb,
  '[]'::jsonb,
  '["Construction","Real Estate","Cost Management","Entrepreneurship"]'::jsonb,
  false, 3, true, true
)
on conflict (slug) do nothing;
