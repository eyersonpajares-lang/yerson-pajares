import type { EducationItem } from "@/types/content";

export const education: EducationItem[] = [
  {
    institution: "Universidad Nacional de Ingeniería",
    degree: {
      es: "Maestría en Ciencias con mención en Proyectos de Inversión",
      en: "M.Sc. in Investment Projects",
    },
    status: { es: "Egresado", en: "Graduate studies completed" },
  },
  {
    institution: "Universidad Nacional de Cajamarca",
    degree: { es: "Ingeniería Civil", en: "Civil Engineering" },
  },
];

export const training: string[] = [
  "EPC Planning Engineer Training with Oracle Primavera",
  "Construction Planner Certification",
  "Primavera P6 Advanced",
  "Contract / NEC Training",
];
