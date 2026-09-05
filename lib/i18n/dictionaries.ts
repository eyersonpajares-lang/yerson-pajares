import type { Lang } from "@/types/content";

export const dictionaries = {
  es: {
    nav: {
      home: "Inicio",
      work: "Trabajo",
      projects: "Proyectos",
      ideas: "Ideas",
      about: "Sobre mí",
      downloadCv: "Descargar CV",
    },
    hero: {
      headline: "Transformo información de proyectos en decisiones.",
      description:
        "Ingeniero Civil especializado en Planeamiento y Control de Proyectos, enfocado en conectar planificación, construcción, datos y nuevas tecnologías para mejorar la manera en que ejecutamos proyectos.",
      ctaWork: "Ver mi trabajo",
      ctaCv: "Descargar CV",
      ctaContact: "Contactarme",
    },
    selectedWork: {
      kicker: "Trabajo seleccionado",
      title: "Selected Work",
      description:
        "Una selección de proyectos, sistemas y problemas en los que he trabajado.",
      viewProject: "Ver proyecto",
      viewAll: "Ver todos los proyectos",
    },
    now: {
      kicker: "Ahora mismo",
      title: "En qué estoy trabajando ahora.",
      updated: "Actualizado",
    },
    experience: {
      kicker: "Trayectoria",
      title: "Experiencia seleccionada",
      description:
        "Proyectos de construcción, infraestructura y control de proyectos en los que he participado.",
    },
    capabilities: {
      kicker: "Capacidades",
      title: "En qué puedo aportar",
    },
    ideas: {
      kicker: "Ideas",
      title: "Últimas ideas",
      readMore: "Leer más",
      viewAll: "Ver todas las ideas",
      minRead: "min de lectura",
    },
    linkedin: {
      kicker: "Actividad reciente",
      title: "Último en LinkedIn",
      viewOnLinkedIn: "Ver en LinkedIn",
      viewMore: "Ver más en LinkedIn",
    },
    workLog: {
      kicker: "Work Log",
      title: "Building, learning and experimenting — one day at a time.",
      viewAll: "Ver el work log completo",
    },
    vision: {
      kicker: "Visión",
      title: "Where I'm going.",
      text1:
        "Quiero participar en la transformación de cómo se planifican y controlan los grandes proyectos de construcción.",
      text2:
        "Creo que Project Controls evolucionará desde herramientas aisladas hacia sistemas conectados donde planificación, información de campo, contratos, costos, datos e Inteligencia Artificial trabajen juntos.",
      now: "AHORA",
      nowLabel: "Project Controls",
      next: "SIGUIENTE",
      nextLabel: "Project Controls + AI",
      future: "FUTURO",
      futureLabel: "Intelligent Project Systems",
    },
    beyond: {
      kicker: "Más allá de los proyectos",
      title: "Beyond projects.",
      text: "También me interesan la tecnología, los negocios, la literatura, la filosofía, la economía y la historia. Creo que los mejores profesionales no solamente ejecutan procesos: entienden por qué existen, cuestionan cómo funcionan y buscan maneras de mejorarlos.",
    },
    education: {
      kicker: "Formación",
      title: "Educación y certificaciones",
      trainingTitle: "Formación seleccionada",
      credentials: "Ver credenciales",
    },
    contact: {
      title: "LET'S BUILD SOMETHING.",
      text: "¿Te interesa Project Controls, Planificación, Construcción o AI?",
      text2: "Hablemos.",
      email: "Email",
      linkedin: "LinkedIn",
      cv: "Descargar CV",
    },
    footer: {
      tagline: "Building better projects.",
    },
  },
  en: {
    nav: {
      home: "Home",
      work: "Work",
      projects: "Projects",
      ideas: "Ideas",
      about: "About",
      downloadCv: "Download CV",
    },
    hero: {
      headline: "I turn project information into decisions.",
      description:
        "Civil Engineer specializing in Planning and Project Controls, focused on connecting planning, construction, data and new technologies to improve the way we execute projects.",
      ctaWork: "See my work",
      ctaCv: "Download CV",
      ctaContact: "Get in touch",
    },
    selectedWork: {
      kicker: "Selected work",
      title: "Selected Work",
      description:
        "A selection of projects, systems and problems I've worked on.",
      viewProject: "View project",
      viewAll: "View all projects",
    },
    now: {
      kicker: "Right now",
      title: "What I'm working on now.",
      updated: "Updated",
    },
    experience: {
      kicker: "Track record",
      title: "Selected experience",
      description:
        "Construction, infrastructure and project controls projects I've been part of.",
    },
    capabilities: {
      kicker: "Capabilities",
      title: "Where I add value",
    },
    ideas: {
      kicker: "Ideas",
      title: "Latest ideas",
      readMore: "Read more",
      viewAll: "View all ideas",
      minRead: "min read",
    },
    linkedin: {
      kicker: "Recent activity",
      title: "Latest from LinkedIn",
      viewOnLinkedIn: "View on LinkedIn",
      viewMore: "View more on LinkedIn",
    },
    workLog: {
      kicker: "Work Log",
      title: "Building, learning and experimenting — one day at a time.",
      viewAll: "View full work log",
    },
    vision: {
      kicker: "Vision",
      title: "Where I'm going.",
      text1:
        "I want to be part of the transformation in how large construction projects are planned and controlled.",
      text2:
        "I believe Project Controls will evolve from isolated tools into connected systems where planning, field data, contracts, costs and Artificial Intelligence work together.",
      now: "NOW",
      nowLabel: "Project Controls",
      next: "NEXT",
      nextLabel: "Project Controls + AI",
      future: "FUTURE",
      futureLabel: "Intelligent Project Systems",
    },
    beyond: {
      kicker: "Beyond projects",
      title: "Beyond projects.",
      text: "I'm also interested in technology, business, literature, philosophy, economics and history. I believe the best professionals don't just execute processes: they understand why they exist, question how they work, and look for ways to improve them.",
    },
    education: {
      kicker: "Education",
      title: "Education & certifications",
      trainingTitle: "Selected training",
      credentials: "View credentials",
    },
    contact: {
      title: "LET'S BUILD SOMETHING.",
      text: "Interested in Project Controls, Planning, Construction or AI?",
      text2: "Let's talk.",
      email: "Email",
      linkedin: "LinkedIn",
      cv: "Download CV",
    },
    footer: {
      tagline: "Building better projects.",
    },
  },
} satisfies Record<Lang, unknown>;

export type Dictionary = typeof dictionaries.es;
