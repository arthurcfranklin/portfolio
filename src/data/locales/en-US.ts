import { ptBR } from "@/data/locales/pt-BR";
import type { PortfolioLocale } from "@/types/locale";

export const enUS = {
  ...ptBR,

  seo: {
    title: "Arthur Franklin",
    description:
      "IT Support professional focused on infrastructure, monitoring and automation, building reliable solutions for corporate IT environments.",
    openGraphTitle: "Arthur Franklin — IT Support & Infrastructure",
    openGraphDescription: "IT Support, Infrastructure Monitoring and IT Operations.",
  },

  header: {
    tagline: "arthurfranklin.com.br",
    contactButton: "Get in Touch",
    mobileContactButton: "Contact",
  },

  navigation: {
    home: {
      label: "Home",
    },
    about: {
      label: "About",
    },
    skills: {
      label: "Skills",
    },
    projects: {
      label: "Projects",
    },
    services: {
      label: "Expertise",
    },
    contact: {
      label: "Contact",
    },
  },

  hero: {
    firstName: "Arthur",
    lastName: "Franklin",
    roles: ["IT Support", "IT Infrastructure", "Automation"],
    description:
      "From end-user support to infrastructure monitoring, I build practical solutions that make IT operations more reliable, efficient and scalable.",
    resumeButton: "View Resume",
    projectsButton: "View Projects",
    socialLabels: {
      github: "GitHub",
      gitlab: "GitLab",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },

  about: {
    sectionLabel: "About",

    headingPrefix: "Driven by ",
    headingHighlight: "technology",
    headingSuffix: ", infrastructure and automation.",

    paragraphs: [
      "My journey into IT began with a curiosity about how technology solves real-world problems. That curiosity led me to IT Support and Infrastructure, where I continue to expand my technical knowledge through hands-on experience.",
      "Today, I help keep IT environments reliable and efficient by supporting day-to-day operations, automating repetitive tasks and developing practical solutions for operational challenges.",
    ],

    academicTimelineTitle: "Academic Journey",

    timeline: {
      "ads-degree": {
        years: "2025 — 2027",
        title: "Degree in Systems Analysis and Development",
        subtitle: "Estácio",
        description:
          "Undergraduate program focused on software development, database systems, algorithms and software engineering.",
      },

      "systems-development-course": {
        years: "2024 — 2025",
        title: "Technical Program in Systems Development",
        subtitle: "Firjan SENAI",
        note: "Program nearing completion.",
        description:
          "Technical education focused on programming logic, systems development, database systems and software project management.",
      },
    },

    stats: {
      experience: {
        value: "Years in IT",
      },
      projects: {
        value: "Projects",
      },
      certifications: {
        value: "Certifications",
      },
    },
  },

  skills: {
    sectionLabel: "Technical Expertise",

    headingPrefix: "Technology and ",
    headingHighlight: "tools",
    headingSuffix: " for modern IT operations.",

    description:
      "I work with technologies and best practices for infrastructure, monitoring, virtualization and automation, supporting reliable and efficient IT operations.",

    groups: {
      infrastructure: {
        title: "Infrastructure & Support",
        items: [
          "Windows",
          "Linux",
          "Networking",
          "IT Support",
          "Troubleshooting",
          "IT Asset Management",
          "TCP/IP",
        ],
      },

      monitoring: {
        title: "Monitoring & Operations",
        items: [
          "Zabbix",
          "Proxmox VE",
          "Grafana",
          "Observability",
          "Metrics Analysis",
          "Incident Analysis",
          "Virtualization",
        ],
      },

      development: {
        title: "Development & Automation",
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
    sectionLabel: "Featured Projects",

    headingPrefix: "Building ",
    headingHighlight: "practical solutions",
    headingSuffix: " for real-world challenges.",

    viewAllButton: "View All Projects",
    viewProjectButton: "View Project",

    items: {
      forgedocs: {
        name: "ForgeDocs",
        tag: "Desktop Application",
        description:
          "Privacy-first desktop application for document processing, built to deliver high performance and fully local processing",
      },

      libraryflow: {
        name: "LibraryFlow",
        tag: "Web Application",
        description:
          "Library management platform designed to simplify catalog management, circulation and day-to-day operations.",
      },

      infratracker: {
        name: "InfraTracker",
        tag: "Infrastructure & Monitoring",
        description:
          "Asset inventory and monitoring solution designed to improve visibility, organization and operational control across IT environments.",
      },
    },
  },

  services: {
    sectionLabel: "Areas of Expertise",

    headingPrefix: "Supporting ",
    headingHighlight: "modern IT ",
    headingSuffix: "operations.",

    description:
      "Practical expertise focused on building reliable, organized and efficient IT environments.",

    items: {
      "technical-support": {
        title: "IT Support",
        description:
          "Providing technical support and incident resolution to ensure business continuity and efficient IT operations.",
      },

      infrastructure: {
        title: "IT Infrastructure",
        description:
          "Deploying, organizing and maintaining IT environments with a focus on standardization, reliability and operational stability.",
      },

      "operating-systems": {
        title: "Operating Systems",
        description:
          "Installing, configuring and supporting Windows and Linux environments across a variety of use cases.",
      },

      monitoring: {
        title: "Infrastructure Monitoring",
        description:
          "Monitoring systems and services to detect issues early and support operational decision-making.",
      },

      automation: {
        title: "Automation",
        description:
          "Developing tools and workflows that reduce repetitive tasks and improve operational efficiency.",
      },

      "asset-management": {
        title: "IT Asset Management",
        description:
          "Managing the lifecycle of IT assets, including inventory, documentation and standardization.",
      },
    },
  },

  contact: {
    sectionLabel: "Get in Touch",

    headingPrefix: "Let's build ",
    headingHighlight: "something together",
    headingSuffix: ".",

    description:
      "Whether it's a professional opportunity, a collaboration or simply an exchange of ideas, let's connect.",

    items: {
      email: {
        label: "Email",
        value: "arthur@arthurfranklin.com.br",
        action: "Send Email",
      },

      linkedin: {
        label: "LinkedIn",
        value: "arthurfranklin.com.br/linkedin",
        action: "View Profile",
      },

      location: {
        label: "Location",
        value: "Rio de Janeiro — RJ, Brazil",
      },

      phone: {
        label: "Phone",
        value: "Available upon request",
      },
    },

    form: {
      fields: {
        name: {
          label: "Name",
          placeholder: "Your full name",
        },

        email: {
          label: "Email",
          placeholder: "your.email@example.com",
        },

        phone: {
          label: "Phone",
          placeholder: "(00) 00000-0000",
        },

        subject: {
          label: "Subject",
          placeholder: "What would you like to discuss?",
        },

        message: {
          label: "Message",
          placeholder: "Write your message here...",
        },
      },

      privacyNotice: "Your information will only be used to respond to this message.",

      submitButton: "Send Message",
      successMessage: "Message sent ✓",
    },
  },

  footer: {
    description: "Turning challenges into practical IT solutions.",
    role: "arthurfranklin.com.br",
    navigationTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Social Links",
    websiteLabel: "Website",
    copyright: "Arthur Franklin. All rights reserved.",
    signature: "Built using modern software engineering practices.",
    backToTop: "Back to top",
    backToTopAriaLabel: "Back to top",
  },
} satisfies PortfolioLocale;
