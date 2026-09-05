import type { CapabilityGroup } from "@/types/content";

export const capabilityGroups: CapabilityGroup[] = [
  {
    category: { es: "Project Controls", en: "Project Controls" },
    items: [
      "Planning & Scheduling",
      "Primavera P6",
      "CPM",
      "Critical Path",
      "Total Float",
      "Forecast",
      "S-Curves",
      "PPC",
      "3WLA",
      "Progress Measurement",
    ],
  },
  {
    category: { es: "Contratos", en: "Contracts" },
    items: [
      "NEC",
      "Time Impact Analysis",
      "Compensation Events",
      "Delay Analysis",
      "Contract Support",
    ],
  },
  {
    category: { es: "Datos", en: "Data" },
    items: ["Power BI", "Excel", "Databases", "Data Analysis"],
  },
  {
    category: { es: "Tecnología", en: "Technology" },
    items: ["AI", "Claude", "Python", "Automation", "AI Agents"],
  },
  {
    category: { es: "Construcción", en: "Construction" },
    items: ["Civil", "Infrastructure", "Electromechanical", "Hydraulic", "Construction Planning"],
  },
];
