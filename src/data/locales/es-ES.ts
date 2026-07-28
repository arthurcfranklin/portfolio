import type { PortfolioLocale } from "@/types/locale";

import { ptBR } from "./pt-BR";

export const esES: PortfolioLocale = {
  ...ptBR,

  seo: {
    title: "Arthur Franklin | Soporte Técnico y Infraestructura de TI",
    description:
      "Profesional de Soporte Técnico y de Infraestructura de TI enfocado en monitoreo, automatización y operaciones tecnológicas confiables.",
    openGraphTitle: "Arthur Franklin | Soporte Técnico y Infraestructura de TI",
    openGraphDescription:
      "Portafolio profesional enfocado en soporte técnico, infraestructura, monitoreo, automatización y soluciones prácticas para operaciones de TI.",
  },

  header: {
    tagline: "arthurfranklin.com.br",
    contactButton: "Contactar",
    mobileContactButton: "Contacto",
  },

  navigation: {
    home: {
      label: "Inicio",
    },
    about: {
      label: "Sobre mí",
    },
    skills: {
      label: "Competencias",
    },
    projects: {
      label: "Proyectos",
    },
    services: {
      label: "Especialidades",
    },
    contact: {
      label: "Contacto",
    },
  },

  hero: {
    firstName: "Arthur",
    lastName: "Franklin",
    roles: ["Soporte Técnico", "Infraestructura", "Automatización"],
    description:
      "Desde el soporte a usuarios hasta el monitoreo de infraestructura, desarrollo soluciones prácticas para que las operaciones de TI sean más confiables, eficientes y escalables.",
    resumeButton: "Ver currículum",
    projectsButton: "Ver proyectos",
    socialLabels: {
      github: "GitHub",
      gitlab: "GitLab",
      linkedin: "LinkedIn",
      email: "Correo",
    },
  },

  about: {
    sectionLabel: "Sobre mí",

    headingPrefix: "Apasionado por la ",
    headingHighlight: "tecnología",
    headingSuffix: " y la infraestructura.",

    paragraphs: [
      "Mi trayectoria en Tecnologías de la Información nació de la curiosidad y del deseo de comprender cómo la tecnología resuelve problemas reales. Así fue como encontré en el soporte técnico y la infraestructura un entorno de aprendizaje y evolución continua.",

      "Actualmente participo en la operación de entornos tecnológicos y transformo los desafíos del día a día en oportunidades para desarrollar herramientas, automatizaciones y procesos más eficientes.",
    ],

    academicTimelineTitle: "Trayectoria académica",

    timeline: {
      "ads-degree": {
        years: "2025 — 2027",

        title: "Grado en Análisis y Desarrollo de Sistemas",

        subtitle: "Universidade Estácio de Sá",

        description:
          "Formación universitaria enfocada en desarrollo de software, bases de datos, algoritmos e ingeniería de software.",
      },

      "systems-development-course": {
        years: "2024 — 2025",

        title: "Curso Técnico en Desarrollo de Sistemas",

        subtitle: "Firjan SENAI",

        note: "Formación no finalizada en agosto de 2025, próxima a su finalización.",

        description:
          "Formación técnica enfocada en lógica de programación, desarrollo de sistemas, bases de datos y gestión de proyectos de software.",
      },
    },

    stats: {
      experience: {
        value: "Años en TI",
      },

      projects: {
        value: "Proyectos",
      },

      certifications: {
        value: "Certificaciones",
      },
    },
  },

  skills: {
    sectionLabel: "Competencias Técnicas",

    headingPrefix: "Herramientas, tecnologías y ",
    headingHighlight: "conocimientos",
    headingSuffix: " aplicados en el día a día.",

    description:
      "Utilizo un conjunto de tecnologías, plataformas y buenas prácticas orientadas a infraestructura, monitoreo, virtualización y automatización, priorizando la confiabilidad, la observabilidad y la eficiencia operativa.",

    groups: {
      infrastructure: {
        title: "Infraestructura y Soporte",

        items: [
          "Windows",
          "Linux",
          "Redes",
          "Soporte Técnico",
          "Troubleshooting",
          "Gestión de Activos de TI",
          "TCP/IP",
        ],
      },

      monitoring: {
        title: "Monitoreo y Operaciones",

        items: [
          "Zabbix",
          "Proxmox VE",
          "Grafana",
          "Observabilidad",
          "Análisis de Métricas",
          "Análisis de Incidentes",
          "Virtualización",
        ],
      },

      development: {
        title: "Desarrollo y Automatización",

        items: [
          "Python",
          "HTML",
          "CSS",
          "JavaScript",
          "FastAPI",
          "SQLAlchemy",
          "SQLite",
          "SQL",
          "Git",
          "GitHub",
          "GitLab",
        ],
      },
    },
  },

  projects: {
    sectionLabel: "Proyectos Destacados",

    headingPrefix: "Soluciones reales para ",
    headingHighlight: "problemas reales",
    headingSuffix: ".",

    viewAllButton: "Ver todos los proyectos",

    viewProjectButton: "Ver proyecto",

    items: {
      forgedocs: {
        name: "ForgeDocs",

        tag: "Suite de Escritorio",

        description:
          "Suite de escritorio para procesamiento de documentos, enfocada en privacidad, rendimiento y productividad en un entorno 100 % local.",
      },

      libraryflow: {
        name: "LibraryFlow",

        tag: "Gestión de Bibliotecas",

        description:
          "Sistema web para la gestión de bibliotecas, desarrollado para simplificar el control de colecciones, préstamos y devoluciones.",
      },

      infratracker: {
        name: "InfraTracker",

        tag: "Infraestructura y Monitoreo",

        description:
          "Herramienta para el inventario y monitoreo de activos, desarrollada para facilitar la gestión y la observabilidad de entornos de TI.",
      },
    },
  },

  services: {
    sectionLabel: "Áreas de Especialización",

    headingPrefix: "Principales áreas de ",
    headingHighlight: "especialización",
    headingSuffix: ".",

    description:
      "Soluciones aplicadas para mantener entornos tecnológicos organizados, estables y funcionales.",

    items: {
      "technical-support": {
        title: "Soporte Técnico",

        description:
          "Atención y resolución de incidentes, garantizando la continuidad y la eficiencia de las operaciones de los usuarios.",
      },

      infrastructure: {
        title: "Infraestructura",

        description:
          "Implementación, organización y mantenimiento de entornos tecnológicos con enfoque en la estandarización y la confiabilidad.",
      },

      "operating-systems": {
        title: "Sistemas Operativos",

        description:
          "Instalación, configuración y soporte para entornos Windows y Linux en diferentes escenarios de uso.",
      },

      monitoring: {
        title: "Monitoreo",

        description:
          "Supervisión continua de activos y servicios para anticipar fallos y respaldar las decisiones operativas.",
      },

      automation: {
        title: "Automatización",

        description:
          "Desarrollo de herramientas y procesos que reducen las tareas repetitivas y aumentan la productividad.",
      },

      "asset-management": {
        title: "Gestión de Activos de TI",

        description:
          "Control del ciclo de vida de los equipos, inventario, documentación y estandarización de los activos.",
      },
    },
  },

  contact: {
    sectionLabel: "Contacto",

    headingPrefix: "Construyamos ",
    headingHighlight: "algo juntos",
    headingSuffix: ".",

    description:
      "Ya sea para una oportunidad profesional, una colaboración o simplemente para intercambiar ideas, conversemos.",

    items: {
      email: {
        label: "Correo",
        value: "arthur@arthurfranklin.com.br",
        action: "Enviar correo",
      },

      linkedin: {
        label: "LinkedIn",
        value: "arthurfranklin.com.br/linkedin",
        action: "Ver perfil",
      },

      location: {
        label: "Ubicación",
        value: "Río de Janeiro — RJ, Brasil",
      },

      phone: {
        label: "Teléfono",
        value: "Disponible próximamente",
      },
    },

    form: {
      fields: {
        name: {
          label: "Nombre",
          placeholder: "Tu nombre completo",
        },

        email: {
          label: "Correo",
          placeholder: "tu.correo@ejemplo.com",
        },

        phone: {
          label: "Teléfono",
          placeholder: "(00) 00000-0000",
        },

        subject: {
          label: "Asunto",
          placeholder: "¿Cuál es el asunto?",
        },

        message: {
          label: "Mensaje",
          placeholder: "Escribe tu mensaje aquí...",
        },
      },

      privacyNotice: "Tus datos se utilizarán únicamente para responder a este mensaje.",

      submitButton: "Enviar mensaje",

      successMessage: "Mensaje enviado ✓",
    },
  },

  footer: {
    description: "Transformando desafíos en soluciones prácticas para TI.",

    role: "arthurfranklin.com.br",

    navigationTitle: "Navegación",

    contactTitle: "Contacto",

    socialTitle: "Redes Sociales",

    websiteLabel: "Sitio web",

    copyright: "Arthur Franklin. Todos los derechos reservados.",

    signature: "Desarrollado siguiendo las mejores prácticas de ingeniería de software.",

    backToTop: "Volver al inicio",

    backToTopAriaLabel: "Volver al inicio",
  },
} satisfies PortfolioLocale;
