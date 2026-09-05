import type { IdeaArticle } from "@/types/content";

export const ideas: IdeaArticle[] = [
  {
    slug: "whatsapp-como-reporte-diario",
    title: {
      es: "El problema de utilizar WhatsApp como reporte diario de obra",
      en: "The problem with using WhatsApp as a daily site report",
    },
    excerpt: {
      es: "Los mensajes de WhatsApp son rápidos de enviar, pero difíciles de estructurar, buscar y convertir en información útil para Project Controls.",
      en: "WhatsApp messages are quick to send, but hard to structure, search, and turn into information Project Controls can actually use.",
    },
    date: "2026-08-18",
    category: "Project Controls",
    readingTime: 4,
    content: {
      es: "En muchos proyectos, el reporte diario de obra termina viviendo en un chat de WhatsApp: fotos, notas de voz, mensajes sueltos de distintos frentes. Es rápido para el supervisor, pero costoso para Project Controls, que necesita reconstruir manualmente qué avanzó, qué se restringió y qué recursos se usaron.\n\nEl costo no es solo tiempo. Es información que se pierde, se duplica o queda ambigua. Un reporte estructurado — con campos definidos para actividades, restricciones, recursos y avance — no elimina la velocidad de WhatsApp, pero sí la convierte en datos que se pueden analizar, cruzar con Primavera P6 y llevar a un dashboard.",
      en: "In many projects, the daily site report ends up living inside a WhatsApp chat: photos, voice notes, loose messages from different fronts. It's fast for the supervisor, but expensive for Project Controls, who has to manually reconstruct what progressed, what was restricted, and what resources were used.\n\nThe cost isn't just time — it's information that gets lost, duplicated, or left ambiguous. A structured report, with defined fields for activities, restrictions, resources and progress, doesn't remove the speed of WhatsApp, but it does turn it into data that can be analyzed, cross-checked against Primavera P6, and pushed into a dashboard.",
    },
    tags: ["Project Controls", "Construction Tech", "AI"],
    published: true,
  },
  {
    slug: "power-bi-vs-ai-dashboards",
    title: {
      es: "Power BI vs AI-generated dashboards: ¿cómo cambiará Project Controls?",
      en: "Power BI vs AI-generated dashboards: how will Project Controls change?",
    },
    excerpt: {
      es: "Los dashboards siguen siendo tan buenos como los datos que los alimentan. La pregunta no es la herramienta, sino qué tan estructurada llega la información de campo.",
      en: "Dashboards are only ever as good as the data behind them. The real question isn't the tool — it's how structured the field data is by the time it gets there.",
    },
    date: "2026-07-30",
    category: "Data",
    readingTime: 5,
    content: {
      es: "Power BI seguirá siendo una herramienta central para Project Controls, pero la conversación está cambiando: ya no se trata solo de construir el dashboard correcto, sino de automatizar cómo llegan los datos a él.\n\nUn modelo de AI puede ayudar a estructurar reportes de campo, detectar restricciones recurrentes o resumir avances, pero no reemplaza el criterio del ingeniero de Project Controls para interpretar esos datos dentro del contexto del proyecto.",
      en: "Power BI will keep being a central tool for Project Controls, but the conversation is shifting: it's no longer just about building the right dashboard, but about automating how the data gets there in the first place.\n\nAn AI model can help structure field reports, flag recurring restrictions, or summarize progress, but it doesn't replace the judgment of a Project Controls engineer interpreting that data within the project's context.",
    },
    tags: ["Power BI", "AI", "Data"],
    published: true,
  },
  {
    slug: "wba-linea-de-transmision",
    title: {
      es: "Cómo estructuro una WBS para una línea de transmisión",
      en: "How I structure a WBS for a transmission line",
    },
    excerpt: {
      es: "Una WBS por tramo, torre y actividad tipo permite que el cronograma refleje cómo realmente avanza la construcción en campo.",
      en: "A WBS organized by section, tower and activity type lets the schedule actually reflect how construction progresses in the field.",
    },
    date: "2026-06-12",
    category: "Planning & Scheduling",
    readingTime: 4,
    content: {
      es: "Para líneas de transmisión, prefiero una WBS jerárquica: tramo → torre → tipo de actividad (cimentación, montaje, tendido, pruebas). Esto permite generar curvas S por tramo, identificar cuellos de botella por frente y facilitar el 3WLA sin perder trazabilidad hacia el cronograma maestro.\n\nEl error común es construir la WBS solo por disciplina, lo que dificulta ver el avance físico real de cada torre.",
      en: "For transmission lines, I prefer a hierarchical WBS: section → tower → activity type (foundation, assembly, stringing, testing). This makes it possible to generate S-Curves per section, spot bottlenecks per front, and run 3WLA without losing traceability to the master schedule.\n\nThe common mistake is building the WBS only by discipline, which makes it harder to see the real physical progress of each tower.",
    },
    tags: ["WBS", "Planning", "Infrastructure"],
    published: true,
  },
];
