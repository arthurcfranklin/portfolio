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

      atlas: {
        name: "Atlas",

        tag: "Productividad y Organización",

        description:
          "Espacio de trabajo personal para organizar tareas y proyectos, desarrollado con foco en productividad, fluidez y experiencia de uso.",
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
        value: "(21) 99079-8744",
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
      sendingMessage: "Enviando...",
      successMessage: "Mensaje enviado ✓",
      errorMessage: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      verificationErrorMessage: "No se pudo completar la verificación de seguridad.",
    },
  },

  privacy: {
  eyebrow: "Privacidad",
  title: "Política de Privacidad",
  lastUpdatedLabel: "Última actualización",
  lastUpdated: "12 de septiembre de 2026",

  introduction: [
    "Esta Política de Privacidad explica cómo pueden tratarse los datos personales durante el uso de arthurfranklin.com.br, especialmente a través del formulario de contacto.",
    "El tratamiento de datos personales se realiza de acuerdo con las finalidades descritas en esta Política y conforme a la legislación aplicable, incluida la Ley General de Protección de Datos de Brasil — LGPD (Ley n.º 13.709/2018).",
  ],

  sections: [
    {
      title: "Datos personales tratados",
      paragraphs: [
        "Al utilizar el formulario de contacto, podrán tratarse los datos proporcionados por el visitante, como nombre, dirección de correo electrónico, teléfono cuando sea informado, asunto y contenido del mensaje.",
        "También podrán tratarse datos técnicos necesarios para el funcionamiento y la seguridad del sitio, como dirección IP, información de la solicitud, navegador, dispositivo y tráfico de red.",
        "El campo de teléfono es opcional.",
      ],
    },
    {
      title: "Finalidades del tratamiento",
      paragraphs: [
        "Los datos se tratan para recibir y responder a los mensajes enviados por los visitantes, permitir el funcionamiento del formulario y proteger el sitio contra spam, automatizaciones abusivas, fraude y otros usos indebidos.",
        "También podrán utilizarse cuando sea necesario para la seguridad de la aplicación, diagnóstico de fallos, cumplimiento de obligaciones legales o regulatorias y ejercicio o defensa de derechos.",
        "El envío del formulario no representa autorización para utilizar los datos con finalidades incompatibles con las descritas en esta Política.",
      ],
    },
    {
      title: "Servicios de terceros",
      paragraphs: [
        "Cloudflare — proporciona servicios relacionados con la infraestructura, entrega y protección del sitio. Cloudflare Turnstile se utiliza en el formulario para ayudar a prevenir envíos automatizados y abusivos.",
        "Resend — se utiliza para entregar los mensajes enviados mediante el formulario a la dirección de correo electrónico de destino. Los datos proporcionados en el formulario pueden tratarse durante esta operación.",
        "Apple — se utiliza para recibir y gestionar los mensajes reenviados mediante el formulario.",
        "Estos proveedores cuentan con sus propias políticas y prácticas de privacidad aplicables a los servicios que prestan.",
      ],
    },
    {
      title: "Transferencias internacionales",
      paragraphs: [
        "Algunos de los proveedores utilizados disponen de infraestructura y operaciones internacionales. Por ello, determinados datos pueden tratarse fuera de Brasil.",
        "Cloudflare informa que almacena información principalmente en Estados Unidos y en el Espacio Económico Europeo, y que puede realizar transferencias y accesos internacionales.",
        "Resend informa que los datos proporcionados desde otros países pueden transferirse a Estados Unidos y procesarse allí.",
        "Cuando corresponda, las transferencias internacionales deberán cumplir los requisitos establecidos por la legislación brasileña de protección de datos.",
      ],
    },
    {
      title: "Almacenamiento y seguridad",
      paragraphs: [
        "Los datos se conservarán durante el período necesario para cumplir las finalidades descritas en esta Política o mientras exista una base legítima u obligación aplicable que justifique su conservación.",
        "Se adoptan medidas técnicas y administrativas destinadas a reducir los riesgos de acceso no autorizado, pérdida, alteración, divulgación o uso indebido de los datos.",
        "Ningún sistema conectado a Internet puede garantizar una protección absoluta frente a todos los riesgos de seguridad.",
      ],
    },
    {
      title: "Compartición de datos",
      paragraphs: [
        "Los datos personales tratados por el sitio no se comercializan.",
        "Podrán ser tratados o compartidos con los proveedores mencionados en esta Política cuando sea necesario para operar el sitio, entregar mensajes, proteger la infraestructura o cumplir obligaciones legales.",
        "También podrán divulgarse cuando lo exija una orden válida de una autoridad competente o cuando sea necesario para ejercer o defender derechos.",
      ],
    },
    {
      title: "Derechos del titular",
      paragraphs: [
        "De acuerdo con la LGPD, el titular podrá ejercer los derechos aplicables al tratamiento de sus datos personales.",
      ],
      items: [
        "confirmación de la existencia de tratamiento;",
        "acceso a sus datos;",
        "corrección de datos incompletos, inexactos o desactualizados;",
        "anonimización, bloqueo o eliminación en los casos previstos por la ley;",
        "información sobre la compartición de datos;",
        "portabilidad, cuando corresponda;",
        "oposición al tratamiento en los casos previstos por la ley;",
        "revocación del consentimiento cuando esta sea la base legal utilizada;",
        "otros derechos previstos por la legislación aplicable.",
      ],
    },
    {
      title: "Cookies y tecnologías similares",
      paragraphs: [
        "El sitio puede utilizar tecnologías necesarias para su funcionamiento, seguridad y almacenamiento de preferencias.",
        "Cuando se utilicen tecnologías no esenciales que dependan de la elección del visitante, deberán respetar las preferencias definidas mediante los mecanismos disponibles en el sitio.",
        "Más información sobre las tecnologías utilizadas y sus finalidades estará disponible en la Política de Cookies.",
      ],
    },
    {
      title: "Responsable, contacto y cambios",
      paragraphs: [
        "La persona responsable de las decisiones relacionadas con el tratamiento de datos personales realizado a través de este sitio es Arthur Franklin.",
        "Las solicitudes relacionadas con la privacidad o el ejercicio de derechos pueden enviarse a arthur@arthurfranklin.com.br.",
        "Esta Política podrá actualizarse para reflejar cambios en las funcionalidades del sitio, los servicios utilizados, las prácticas de tratamiento o la legislación aplicable. La versión vigente permanecerá disponible en esta página junto con la fecha de su última actualización.",
      ],
    },
  ],
},

  footer: {
    role: "arthurfranklin.com.br",
    navigationTitle: "Navegación",
    contactTitle: "Contacto",
    socialTitle: "Redes Sociales",
    legalTitle: "Legal",
    privacyPolicy: "Política de Privacidad",
    termsOfUse: "Términos de Uso",
    cookiePreferences: "Preferencias de Cookies",
    websiteLabel: "Sitio web",
    copyright: "Arthur Franklin. Todos los derechos reservados.",
    signature: "Desarrollado siguiendo las mejores prácticas de ingeniería de software.",
    backToTop: "Volver al inicio",
    backToTopAriaLabel: "Volver al inicio",
  },
} satisfies PortfolioLocale;
