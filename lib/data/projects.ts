import type { Project } from "@/types/content";

/**
 * Single source of truth for everything rendered on /projects: the
 * editorial "Selected Work" composition, small "Engineering Lab"
 * experiments, and "Ventures". `type` decides placement, `categories`
 * drives the filter pills, `order` drives prev/next navigation among
 * projects that have a detail page (`hasDetail`).
 */
export const projects: Project[] = [
  // ---- Selected Work -----------------------------------------------
  {
    slug: "project-control-ia",
    type: "selected-work",
    categories: ["ai-automation", "project-controls", "data"],
    title: "PROJECT CONTROL IA",
    subtitle: {
      es: "AI × Construcción × Project Controls",
      en: "AI × Construction × Project Controls",
    },
    category: "AI · Project Controls · Construction Tech",
    year: "2026",
    status: { es: "En desarrollo", en: "In development" },
    role: { es: "Creador / Desarrollador", en: "Creator / Developer" },
    shortDescription: {
      es: "De reportes de campo no estructurados a información lista para Project Controls.",
      en: "From unstructured field reports to information Project Controls can actually use.",
    },
    sections: [
      {
        key: "overview",
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: "En proyectos grandes, múltiples frentes y disciplinas generan información continuamente. Cuando los reportes se realizan mediante mensajes no estructurados, parte de esa información puede perderse, duplicarse o resultar difícil de analizar.",
          en: "In large projects, multiple fronts and disciplines generate information continuously. When reporting happens through unstructured messages, part of that information can be lost, duplicated, or hard to analyze.",
        },
      },
      {
        key: "problem",
        title: { es: "El problema", en: "The problem" },
        body: {
          es: "Información distribuida entre WhatsApp, fotografías, Excel, reportes, mensajes y documentos.",
          en: "Information scattered across WhatsApp, photographs, Excel, reports, messages and documents.",
        },
        list: ["WhatsApp", "Photographs", "Excel", "Reports", "Messages", "Documents"],
      },
      {
        key: "process",
        title: { es: "El proceso", en: "The process" },
        steps: {
          es: ["Datos de campo", "Datos estructurados", "Información del proyecto", "Decisiones"],
          en: ["Field data", "Structured data", "Project information", "Decisions"],
        },
      },
      {
        key: "tools",
        title: { es: "Herramientas", en: "Tools" },
        list: ["Python", "Database", "AI", "Automation", "Project Controls"],
      },
      {
        key: "nextSteps",
        title: { es: "Explorando ahora", en: "Exploring now" },
        list: [
          "Structured daily reports",
          "AI extraction",
          "Restrictions",
          "Progress",
          "Primavera P6 integration",
          "Automated reporting",
        ],
      },
    ],
    tools: ["Python", "Database", "AI", "Automation", "Project Controls"],
    tags: ["AI", "Python", "Automation", "Project Controls", "Data"],
    featured: true,
    order: 1,
    hasDetail: true,
    published: true,
  },
  {
    slug: "planning-scheduling",
    type: "selected-work",
    categories: ["project-controls", "planning"],
    title: "PLANNING & SCHEDULING",
    category: "Project Controls",
    year: "",
    shortDescription: {
      es: "Planeamiento y control de proyectos con Primavera P6, CPM, curvas S, Forecast, Lookahead Planning y análisis de restricciones.",
      en: "Planning and project controls using Primavera P6, CPM, S-Curves, Forecast, Lookahead Planning and restrictions analysis.",
    },
    sections: [],
    tags: ["Primavera P6", "CPM", "S-Curve", "Forecast"],
    order: 10,
    hasDetail: false,
    published: true,
  },
  {
    slug: "construction-infrastructure",
    type: "selected-work",
    categories: ["construction"],
    title: "CONSTRUCTION & INFRASTRUCTURE",
    category: "Construction",
    year: "",
    shortDescription: {
      es: "Proyectos civiles, hidráulicos y electromecánicos: planificación, seguimiento y control en campo.",
      en: "Civil, hydraulic and electromechanical projects — planning, monitoring and control in the field.",
    },
    sections: [],
    tags: ["Civil", "Hydraulic", "Electromechanical", "Infrastructure"],
    order: 11,
    hasDetail: false,
    published: true,
  },
  {
    slug: "contracts-delay-analysis",
    type: "selected-work",
    categories: ["project-controls"],
    title: "CONTRACTS & DELAY ANALYSIS",
    category: "Contracts",
    year: "",
    shortDescription: {
      es: "Planificación contractual, Compensation Events, Critical Path y Time Impact Analysis.",
      en: "Contractual planning, Compensation Events, Critical Path and Time Impact Analysis.",
    },
    sections: [],
    tags: ["NEC", "Delay Analysis", "Compensation Events", "Critical Path"],
    order: 12,
    hasDetail: false,
    published: true,
  },

  // ---- Engineering Lab -----------------------------------------------
  {
    slug: "daily-report-automation",
    type: "lab",
    categories: ["ai-automation", "project-controls"],
    title: "Daily Report Automation",
    category: "AI & Automation",
    year: "2026",
    status: { es: "Experimentando", en: "Experimenting" },
    shortDescription: {
      es: "Automatización de reportes diarios de obra mediante AI.",
      en: "Automating daily site reports with AI.",
    },
    sections: [],
    tags: ["AI", "Automation"],
    order: 20,
    hasDetail: false,
    published: true,
  },
  {
    slug: "p6-powerbi-ai-pipeline",
    type: "lab",
    categories: ["data", "ai-automation"],
    title: "Primavera P6 → Power BI → AI",
    category: "Data & Automation",
    year: "2026",
    status: { es: "Explorando", en: "Exploring" },
    shortDescription: {
      es: "Un flujo directo entre Primavera P6, Power BI y modelos de AI.",
      en: "A direct pipeline between Primavera P6, Power BI and AI models.",
    },
    sections: [],
    tags: ["Primavera P6", "Power BI", "AI"],
    order: 21,
    hasDetail: false,
    published: true,
  },
  {
    slug: "planning-ai-agents",
    type: "lab",
    categories: ["ai-automation", "planning"],
    title: "Planning AI Agents",
    category: "AI & Automation",
    year: "2026",
    status: { es: "Prototipo temprano", en: "Early prototype" },
    shortDescription: {
      es: "AI Agents aplicados a Planning & Scheduling.",
      en: "AI agents applied to Planning & Scheduling.",
    },
    sections: [],
    tags: ["AI Agents", "Planning"],
    order: 22,
    hasDetail: false,
    published: true,
  },

  // ---- Ventures -----------------------------------------------------
  {
    slug: "solarcytec",
    type: "venture",
    categories: ["ventures"],
    title: "SOLARCYTEC",
    category: "Renewable Energy · Solar Thermal",
    year: "2016 — 2019",
    role: { es: "Co-fundador", en: "Co-founder" },
    shortDescription: {
      es: "Sistemas solares térmicos y energía renovable — más de 700 termotanques instalados.",
      en: "Solar thermal systems and renewable energy — 700+ solar water heaters installed.",
    },
    sections: [
      {
        key: "overview",
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: "Solarcytec fue una iniciativa que co-fundé en 2016, enfocada en energía renovable, principalmente sistemas solares térmicos. Durante ese período instalamos más de 700 termotanques solares.",
          en: "Solarcytec was a venture I co-founded in 2016, focused on renewable energy — primarily solar thermal systems. During that time we installed more than 700 solar water heaters.",
        },
      },
      {
        key: "role",
        title: { es: "Mi participación", en: "What I did" },
        list: ["Solar thermal systems", "Renewable energy", "Operations", "Entrepreneurship", "Execution"],
      },
    ],
    tags: ["Renewable Energy", "Entrepreneurship", "Execution"],
    order: 2,
    hasDetail: true,
    published: true,
  },
  {
    slug: "san-roque",
    type: "venture",
    categories: ["ventures"],
    title: "SAN ROQUE",
    category: "Architecture & Construction",
    year: "2021",
    role: { es: "Jefe de Planeamiento", en: "Head of Planning" },
    shortDescription: {
      es: "Planificación y construcción real: Los Balcones del Valle, Teresa Conga y Puente Miraflores.",
      en: "Real planning and construction: Los Balcones del Valle, Teresa Conga and Puente Miraflores.",
    },
    sections: [
      {
        key: "overview",
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: "En San Roque Arquitectura y Construcción lideré la planificación de tres proyectos entre enero y mayo de 2021: Los Balcones del Valle, Teresa Conga y Puente Miraflores.",
          en: "At San Roque Arquitectura y Construcción I led planning across three projects between January and May 2021: Los Balcones del Valle, Teresa Conga and Puente Miraflores.",
        },
      },
      {
        key: "role",
        title: { es: "Mi participación", en: "What I did" },
        list: [
          "Project planning",
          "Construction",
          "Cost management",
          "S-Curve",
          "Baseline comparison",
          "Productivity analysis",
          "Material planning",
          "Water systems",
        ],
      },
    ],
    tags: ["Construction", "Real Estate", "Cost Management", "Entrepreneurship"],
    order: 3,
    hasDetail: true,
    published: true,
  },
];

export const selectedWorkProjects = () =>
  projects.filter((p) => p.type === "selected-work" && p.published).sort((a, b) => a.order - b.order);

export const labProjects = () =>
  projects.filter((p) => p.type === "lab" && p.published).sort((a, b) => a.order - b.order);

export const ventureProjects = () =>
  projects.filter((p) => p.type === "venture" && p.published).sort((a, b) => a.order - b.order);

export const detailProjects = () =>
  projects
    .filter((p) => p.hasDetail && p.published)
    .sort((a, b) => a.order - b.order);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug && p.published && p.hasDetail);
}

export function getAdjacentProjects(slug: string) {
  const list = detailProjects();
  const index = list.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? list[index - 1] : null;
  const next = index < list.length - 1 ? list[index + 1] : null;
  return { prev, next };
}
