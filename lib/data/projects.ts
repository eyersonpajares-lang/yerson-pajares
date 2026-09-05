import type { ProjectCaseStudy, SelectedWorkCard } from "@/types/content";

export const selectedWork: SelectedWorkCard[] = [
  {
    slug: "project-control-ia",
    index: "01",
    kicker: "AI · Project Controls · Construction Tech",
    title: { es: "PROJECT CONTROL IA", en: "PROJECT CONTROL IA" },
    description: {
      es: "Sistema en desarrollo para estructurar información diaria de obra y transformar reportes de campo, restricciones, recursos y avances en información útil para Project Controls.",
      en: "A system in development to structure daily site information and turn field reports, restrictions, resources and progress into useful data for Project Controls.",
    },
    tags: ["AI", "Python", "Automation", "Project Controls", "Data"],
    href: "/projects/project-control-ia",
  },
  {
    slug: "planning-scheduling",
    index: "02",
    kicker: "Project Controls",
    title: { es: "PLANNING & SCHEDULING", en: "PLANNING & SCHEDULING" },
    description: {
      es: "Planeamiento y control de proyectos utilizando Primavera P6, CPM, curvas S, Forecast, Lookahead Planning y análisis de restricciones.",
      en: "Planning and project controls using Primavera P6, CPM, S-Curves, Forecast, Lookahead Planning and restrictions analysis.",
    },
    tags: ["Primavera P6", "CPM", "S-Curve", "Forecast"],
  },
  {
    slug: "construction-infrastructure",
    index: "03",
    kicker: "Construction",
    title: { es: "CONSTRUCTION & INFRASTRUCTURE", en: "CONSTRUCTION & INFRASTRUCTURE" },
    description: {
      es: "Experiencia en proyectos civiles, hidráulicos, electromecánicos e infraestructura desarrollando planificación, seguimiento y control.",
      en: "Experience in civil, hydraulic, electromechanical and infrastructure projects developing planning, monitoring and control.",
    },
    tags: ["Civil", "Hydraulic", "Electromechanical", "Infrastructure"],
  },
  {
    slug: "contracts-delay-analysis",
    index: "04",
    kicker: "Contracts",
    title: { es: "CONTRACTS & DELAY ANALYSIS", en: "CONTRACTS & DELAY ANALYSIS" },
    description: {
      es: "Aplicación de planificación contractual, análisis de impactos, Compensation Events, Critical Path y Time Impact Analysis.",
      en: "Application of contractual planning, impact analysis, Compensation Events, Critical Path and Time Impact Analysis.",
    },
    tags: ["NEC", "Delay Analysis", "Compensation Events", "Critical Path"],
  },
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "project-control-ia",
    title: "PROJECT CONTROL IA",
    subtitle: { es: "AI × Construcción × Project Controls", en: "AI × Construction × Project Controls" },
    category: "AI · Project Controls · Construction Tech",
    year: "2026",
    status: { es: "En desarrollo", en: "In development" },
    role: { es: "Creador / Desarrollador", en: "Creator / Developer" },
    intro: {
      es: "En proyectos grandes, múltiples frentes y disciplinas generan información continuamente. Cuando los reportes se realizan mediante mensajes no estructurados, parte de esa información puede perderse, duplicarse o resultar difícil de analizar.",
      en: "In large projects, multiple fronts and disciplines generate information continuously. When reporting happens through unstructured messages, part of that information can be lost, duplicated, or hard to analyze.",
    },
    problem: {
      es: "Información distribuida entre WhatsApp, fotografías, Excel, reportes, mensajes y documentos.",
      en: "Information scattered across WhatsApp, photographs, Excel, reports, messages and documents.",
    },
    problemPoints: ["WhatsApp", "Photographs", "Excel", "Reports", "Messages", "Documents"],
    idea: {
      es: ["Datos de campo", "Datos estructurados", "Información del proyecto", "Decisiones"],
      en: ["Field data", "Structured data", "Project information", "Decisions"],
    },
    tech: ["Python", "Database", "AI", "Automation", "Project Controls"],
    exploring: [
      "Structured daily reports",
      "AI extraction",
      "Restrictions",
      "Progress",
      "Primavera P6 integration",
      "Automated reporting",
    ],
    tags: ["AI", "Python", "Automation", "Project Controls", "Data"],
    featured: true,
    published: true,
  },
];
