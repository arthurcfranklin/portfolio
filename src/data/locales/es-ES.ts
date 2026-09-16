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

      deskly: {
        name: "Deskly",
        tag: "Sistema de Tickets de TI",
        description:
          "Sistema de tickets de TI diseñado para organizar solicitudes de soporte y acompañar su atención.",
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

  terms: {
    eyebrow: "Legal",
    title: "Términos de Uso",
    lastUpdatedLabel: "Última actualización",
    lastUpdated: "13 de septiembre de 2026",

    introduction: [
      "Estos Términos de Uso establecen las condiciones aplicables al acceso y uso de arthurfranklin.com.br y de sus contenidos.",
      "Al utilizar este sitio web, el visitante acepta hacerlo de forma lícita, responsable y compatible con las finalidades descritas en esta página.",
    ],

    sections: [
      {
        title: "Aceptación y finalidad",
        paragraphs: [
          "Este sitio web tiene una finalidad profesional e informativa y se utiliza para presentar información sobre Arthur Franklin, su experiencia, competencias, proyectos, formas de contacto y otros contenidos relacionados con su actividad profesional.",
          "El acceso al sitio web se ofrece de forma gratuita y no establece, por sí solo, ninguna relación contractual, comercial, laboral o de prestación de servicios entre el visitante y el responsable del sitio.",
        ],
      },
      {
        title: "Uso del sitio web",
        paragraphs: [
          "El visitante se compromete a utilizar el sitio web de forma lícita y a no realizar actos que puedan comprometer su seguridad, disponibilidad, integridad o funcionamiento.",
          "No está permitido intentar obtener acceso no autorizado a sistemas, recursos, datos o áreas restringidas relacionadas con el sitio web, ni utilizar sus recursos para actividades abusivas, fraudulentas o ilícitas.",
        ],
      },
      {
        title: "Contenido y propiedad intelectual",
        paragraphs: [
          "Salvo que se indique lo contrario, los textos, elementos visuales, identidad, estructura y demás contenidos originales de este sitio web pertenecen al responsable del sitio.",
          "Se permite la visualización y el uso personal de los contenidos. La reproducción, distribución, modificación o utilización comercial de contenido original requiere autorización previa, salvo en los casos permitidos por la legislación aplicable o cuando exista una licencia específica indicada en el material correspondiente.",
        ],
      },
      {
        title: "Proyectos, código y enlaces externos",
        paragraphs: [
          "El sitio web puede presentar proyectos, repositorios, demostraciones y referencias alojados en plataformas de terceros.",
          "Los proyectos o códigos publicados en repositorios externos están sujetos a las respectivas licencias y condiciones indicadas en dichas plataformas.",
          "Los enlaces a servicios o sitios web de terceros se proporcionan como referencia o por conveniencia. El responsable de este sitio web no controla el contenido, la disponibilidad, las prácticas de privacidad ni las políticas adoptadas por dichos servicios externos.",
        ],
      },
      {
        title: "Disponibilidad y modificaciones",
        paragraphs: [
          "Se procura mantener el sitio web disponible, actualizado y funcional, pero no se garantiza su disponibilidad continua ni la ausencia de fallos, interrupciones o indisponibilidades temporales.",
          "Los contenidos, funcionalidades, estructura, proyectos presentados y demás elementos del sitio web pueden ser modificados, actualizados o eliminados en cualquier momento.",
        ],
      },
      {
        title: "Limitación de responsabilidad",
        paragraphs: [
          "La información disponible en este sitio web tiene carácter profesional e informativo y se presenta de buena fe.",
          "En la medida permitida por la legislación aplicable, el responsable del sitio web no se responsabiliza por daños derivados del uso inadecuado del contenido, indisponibilidad temporal, fallos de servicios de terceros o decisiones tomadas exclusivamente con base en la información presentada en este sitio web.",
        ],
      },
      {
        title: "Privacidad y protección de datos",
        paragraphs: [
          "El tratamiento de datos personales relacionado con el uso del sitio web y el formulario de contacto se describe en la Política de Privacidad.",
          "Cuando corresponda, el uso de cookies y tecnologías similares también se detallará en la Política de Cookies y en las preferencias disponibles para el visitante.",
        ],
      },
      {
        title: "Contacto y modificaciones de los términos",
        paragraphs: [
          "El responsable del sitio web es Arthur Franklin, titular de arthurfranklin.com.br, y puede ser contactado a través de arthur@arthurfranklin.com.br.",
          "Estos Términos de Uso pueden actualizarse para reflejar cambios en el sitio web, sus servicios o los requisitos aplicables. La versión vigente permanecerá disponible en esta página junto con la fecha correspondiente de actualización.",
          "Las consultas relacionadas con estos Términos de Uso pueden enviarse a arthur@arthurfranklin.com.br.",
        ],
      },
    ],
  },

  consent: {
    banner: {
      ariaLabel: "Preferencias de cookies",
      title: "Privacidad y Preferencias",
      descriptionLine1: "Utilizamos tecnologías necesarias para preferencias y seguridad.",
      descriptionLine2: "Las funciones opcionales requieren tu autorización.",
      accept: "Aceptar",
      reject: "Rechazar",
      customize: "Personalizar",
    },

    preferences: {
      title: "Preferencias de Cookies",
      descriptionLines: ["Elige qué tecnologías opcionales pueden", "utilizarse en este sitio."],
      closeLabel: "Cerrar preferencias",

      necessary: {
        title: "Necesarias",
        status: "Siempre activas",
        descriptionLines: [
          "Mantienen las preferencias esenciales,",
          "la seguridad y el funcionamiento del sitio.",
        ],
      },

      analytics: {
        title: "Análisis y métricas",
        descriptionLines: ["Permiten métricas opcionales de uso", "cuando estén disponibles."],
        switchLabel: "Permitir análisis y métricas",
      },

      cancel: "Cancelar",
      save: "Guardar preferencias",
    },
  },

  cookies: {
    eyebrow: "Legal",
    title: "Política de Cookies",
    lastUpdatedLabel: "Última actualización",
    lastUpdated: "13 de septiembre de 2026",

    introduction: [
      "Esta Política de Cookies explica cómo arthurfranklin.com.br utiliza cookies, almacenamiento local y tecnologías similares para el funcionamiento, las preferencias y la seguridad.",
      "Actualmente, el sitio no utiliza herramientas de análisis, publicidad conductual ni otros mecanismos de seguimiento no esenciales. Si esto cambia, esta política y el mecanismo de preferencias se actualizarán antes de activar dichas tecnologías.",
    ],

    sections: [
      {
        title: "Qué son las cookies y tecnologías similares",
        paragraphs: [
          "Las cookies son pequeños archivos que el navegador puede almacenar durante el uso de un sitio web. Tecnologías similares, como el almacenamiento local del navegador, también pueden conservar determinada información entre visitas.",
          "En este sitio, algunas preferencias se almacenan localmente para conservar las elecciones del visitante y ofrecer una experiencia coherente.",
        ],
      },
      {
        title: "Tecnologías utilizadas actualmente",
        paragraphs: [
          "El sitio utiliza el almacenamiento local del navegador para registrar las preferencias de idioma, tema visual y consentimiento.",
          "Esta información permanece en el dispositivo y navegador utilizados hasta que el propio usuario la modifique o elimine.",
        ],
        items: [
          "portfolio-language: almacena el idioma seleccionado.",
          "portfolio-theme: almacena la preferencia de tema claro, oscuro o del sistema.",
          "portfolio-cookie-consent: almacena la elección sobre tecnologías opcionales y la versión de la preferencia guardada.",
        ],
      },
      {
        title: "Tecnologías necesarias",
        paragraphs: [
          "Las tecnologías necesarias se utilizan para funciones esenciales, preferencias solicitadas por el usuario, seguridad y correcto funcionamiento del sitio.",
          "Estas tecnologías no se utilizan para publicidad conductual ni para crear perfiles de navegación.",
        ],
      },
      {
        title: "Seguridad y Cloudflare Turnstile",
        paragraphs: [
          "El formulario de contacto utiliza Cloudflare Turnstile como mecanismo de protección contra abuso, spam y tráfico automatizado.",
          "Durante esta verificación, Cloudflare puede tratar información técnica necesaria para evaluar la legitimidad de la interacción de acuerdo con sus propios términos y políticas aplicables.",
        ],
      },
      {
        title: "Análisis y métricas",
        paragraphs: [
          "Actualmente, el sitio no utiliza herramientas opcionales de análisis o métricas que dependan del consentimiento.",
          "La categoría de análisis y métricas disponible en las preferencias existe para permitir una implementación futura compatible con la elección del usuario. Actualmente no se carga ninguna tecnología de esta categoría.",
        ],
      },
      {
        title: "Gestión de preferencias",
        paragraphs: [
          "En la primera visita, el usuario puede aceptar las tecnologías opcionales, rechazarlas o personalizar sus preferencias.",
          "La elección puede revisarse posteriormente mediante el botón flotante de Preferencias de Cookies disponible en el sitio.",
          "Las tecnologías necesarias permanecen activas porque se utilizan para funciones, preferencias y mecanismos de seguridad esenciales.",
        ],
      },
      {
        title: "Cómo eliminar los datos almacenados",
        paragraphs: [
          "El usuario puede eliminar los datos almacenados localmente mediante los controles de privacidad y almacenamiento proporcionados por su navegador.",
          "La eliminación de esta información puede restablecer preferencias como idioma, tema y consentimiento, haciendo que vuelvan a solicitarse en una visita posterior.",
        ],
      },
      {
        title: "Servicios de terceros",
        paragraphs: [
          "Determinadas funciones de seguridad e infraestructura pueden ser proporcionadas por terceros, incluida Cloudflare. Estos proveedores pueden tratar los datos técnicos necesarios para prestar sus servicios según sus propias políticas de privacidad.",
          "La Política de Privacidad contiene información adicional sobre el tratamiento general de datos personales realizado por el sitio.",
        ],
      },
      {
        title: "Cambios en esta política",
        paragraphs: [
          "Esta Política de Cookies podrá actualizarse cuando se añadan, eliminen o modifiquen tecnologías utilizadas por el sitio.",
          "Cuando un cambio afecte a categorías opcionales o a elecciones previamente registradas, el mecanismo de consentimiento podrá solicitar una nueva decisión.",
          "Las dudas sobre esta política pueden enviarse a arthur@arthurfranklin.com.br.",
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
    cookiePolicy: "Política de Cookies",
    cookiePreferences: "Preferencias de Cookies",
    websiteLabel: "Sitio web",
    copyright: "Arthur Franklin. Todos los derechos reservados.",
    signature: "Desarrollado siguiendo las mejores prácticas de ingeniería de software.",
    backToTop: "Volver al inicio",
    backToTopAriaLabel: "Volver al inicio",
  },
} satisfies PortfolioLocale;
