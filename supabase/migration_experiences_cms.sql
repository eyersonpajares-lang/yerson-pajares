-- Adds the fields the public /experience pages already use (key takeaway,
-- "useful for similar projects", related idea) and seeds the 6 experiences
-- that were hardcoded in lib/data/experiences.ts, so /admin/experience has
-- real data instead of an empty table.
-- Run once in Supabase Dashboard → SQL Editor → New query → Run. Safe to re-run.

alter table experiences add column if not exists key_takeaway_es text;
alter table experiences add column if not exists key_takeaway_en text;
alter table experiences add column if not exists useful_for_es jsonb not null default '[]';
alter table experiences add column if not exists useful_for_en jsonb not null default '[]';
alter table experiences add column if not exists related_idea_slug text;

-- Only seed once — if the table already has rows (from the admin panel
-- or a previous run of this script), nothing more gets inserted.
insert into experiences (
  company, role_es, role_en, period_es, period_en, project_es, project_en,
  client, context_es, context_en, highlight_es, highlight_en,
  work_es, work_en, tags, featured, sort_order,
  key_takeaway_es, key_takeaway_en, useful_for_es, useful_for_en, related_idea_slug
)
select * from (values
(
  'Projects & Commissioning Consultants — PCC',
  'Ingeniero de Project Controls', 'Project Controls Engineer',
  'Feb 2026 — May 2026', 'Feb 2026 — May 2026',
  'Servicio de Instalación de Sistemas de Bombeo para WTP Zona Oeste',
  'Installation Service of Pumping Systems for WTP West Zone',
  'Minera Yanacocha', null, null, null, null,
  '["Primavera P6","Monitoreo de cronograma","Curva S","Forecast","PPC","Restricciones","3WLA","Power BI","CPM","Total Float","Planificación semanal de mano de obra","Soporte en administración de contratos"]'::jsonb,
  '["Primavera P6","Schedule monitoring","S-Curve","Forecast","PPC","Restrictions","3WLA","Power BI","CPM","Total Float","Weekly manpower planning","Contract administration support"]'::jsonb,
  '["Primavera P6","Project Controls","Electromechanical","Power BI"]'::jsonb,
  true, 1,
  null, null, '[]'::jsonb, '[]'::jsonb, 'power-bi-vs-ai-dashboards'
),
(
  'DEYFOR', 'Planner', 'Planner',
  'Oct 2025 — Feb 2026', 'Oct 2025 — Feb 2026',
  'Integridad Estructural 2025 — UM Yanacocha', 'Structural Integrity 2025 — UM Yanacocha',
  null,
  'Mantenimiento, reemplazo y reforzamiento de estructuras metálicas.',
  'Maintenance, replacement and reinforcement of metallic structures.',
  null, null,
  '["Primavera P6","Curva S","Forecast","PPC","Restricciones","3WLA","Power BI","CPM","Total Float","Planificación semanal","Soporte en administración de contratos"]'::jsonb,
  '["Primavera P6","S-Curve","Forecast","PPC","Restrictions","3WLA","Power BI","CPM","Total Float","Weekly planning","Contract administration support"]'::jsonb,
  '["Primavera P6","Structural","3WLA","Power BI"]'::jsonb,
  false, 2,
  null, null, '[]'::jsonb, '[]'::jsonb, null
),
(
  'BESALCO–STRACON', 'Ingeniero de Planeamiento', 'Planning Engineer',
  'Nov 2024 — Ago 2025', 'Nov 2024 — Aug 2025',
  'Defensas Ribereñas Río Tumbes — Paquete 02', 'Tumbes River Flood Defenses — Package 02',
  null,
  'Área de Interferencias.', 'Interfaces area.',
  'Planificación, contratos, interferencias e infraestructura en un mismo proyecto.',
  'Planning, contracts, interfaces and infrastructure in a single project.',
  '["Planeamiento de subcontratistas","Primavera P6","Curva S","Forecast","PPC","3WLA","Restricciones","Planificación de reubicación de redes eléctricas","Reubicación de redes de agua y desagüe","NEC Tipo F","Compensation Events","Reportes gerenciales","Monitoreo de diseño Fast Track"]'::jsonb,
  '["Subcontractor planning","Primavera P6","S-Curve","Forecast","PPC","3WLA","Restrictions","Electrical network relocation planning","Water and sewer relocations","NEC Type F","Compensation Events","Management reporting","Fast Track design monitoring"]'::jsonb,
  '["NEC","Primavera P6","Planning","Interfaces","Infrastructure","Compensation Events"]'::jsonb,
  true, 3,
  'Los proyectos con muchas interferencias necesitan que el cronograma trackee explícitamente las dependencias de terceros, no solo las actividades internas.',
  'Interface-heavy projects need their schedule to explicitly track third-party dependencies, not just internal activities.',
  '["Estructurar el cronograma alrededor de hitos de interferencia, no solo actividades internas","Trackear Compensation Events junto con el avance, no como un ejercicio aparte","Monitorear un diseño Fast Track frente a un frente de construcción en movimiento"]'::jsonb,
  '["Structuring a schedule around interface milestones, not just internal activities","Tracking Compensation Events alongside progress, not as a separate exercise","Monitoring a Fast Track design against a moving construction front"]'::jsonb,
  null
),
(
  'JRTV', 'Ingeniero de Planeamiento', 'Planning Engineer',
  'Ago 2023 — Sep 2024', 'Aug 2023 — Sep 2024',
  'Construcción de Reservorio, Línea de Impulsión y Estación de Bombeo de Agua',
  'Construction of Water Reservoir, Pumping Main and Pump Station',
  null, null, null, null, null,
  '["Primavera P6","Monitoreo de cronograma","Curva S","Forecast","Planeamiento de subcontratistas","PPC","Restricciones","3WLA","Reportes de avance"]'::jsonb,
  '["Primavera P6","Schedule monitoring","S-Curve","Forecast","Subcontractor planning","PPC","Restrictions","3WLA","Progress reporting"]'::jsonb,
  '["Hydraulic","Primavera P6","Planning","Infrastructure"]'::jsonb,
  false, 4,
  null, null, '[]'::jsonb, '[]'::jsonb, null
),
(
  'UGEL Celendín', 'Jefe de Planeamiento', 'Head of Planning',
  'May 2021 — Dic 2022', 'May 2021 — Dec 2022',
  null, null, null, null, null,
  '550+ locales educativos', '550+ educational facilities',
  '["Planeamiento","Infraestructura","Sistemas de agua","Sistemas eléctricos","Gestión de materiales","Movimiento de tierras","Concreto","Acero de refuerzo","Primavera P6"]'::jsonb,
  '["Planning","Infrastructure","Water systems","Electrical systems","Material management","Earthworks","Concrete","Reinforcement","Primavera P6"]'::jsonb,
  '["Public Infrastructure","Primavera P6","Planning","Education"]'::jsonb,
  false, 5,
  null, null, '[]'::jsonb, '[]'::jsonb, null
),
(
  'UGEL Celendín', 'Planificador de Mantenimiento', 'Maintenance Planner',
  'Ene 2020 — Dic 2020', 'Jan 2020 — Dec 2020',
  null, null, null, null, null,
  'El punto de partida hacia Jefe de Planeamiento.', 'The starting point toward Head of Planning.',
  '["Evaluación de infraestructura","Sistemas de agua","Sistemas eléctricos","Planeamiento de compras","Requerimiento de materiales","Inventario","Órdenes de servicio","Órdenes de compra"]'::jsonb,
  '["Infrastructure assessment","Water systems","Electrical systems","Procurement planning","Material requirements","Inventory","Service orders","Purchase orders"]'::jsonb,
  '["Maintenance","Procurement","Public Infrastructure"]'::jsonb,
  false, 6,
  null, null, '[]'::jsonb, '[]'::jsonb, null
)
) as v (
  company, role_es, role_en, period_es, period_en, project_es, project_en,
  client, context_es, context_en, highlight_es, highlight_en,
  work_es, work_en, tags, featured, sort_order,
  key_takeaway_es, key_takeaway_en, useful_for_es, useful_for_en, related_idea_slug
)
where not exists (select 1 from experiences);
