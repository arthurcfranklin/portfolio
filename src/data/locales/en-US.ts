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

      atlas: {
        name: "Atlas",
        tag: "Productivity & Organization",
        description:
          "Personal workspace for organizing tasks and projects, designed with a focus on productivity, fluidity, and user experience.",
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
        value: "(21) 99079-8744",
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
      sendingMessage: "Sending...",
      successMessage: "Message sent ✓",
      errorMessage: "We couldn't send your message. Please try again.",
      verificationErrorMessage: "We couldn't complete the security verification.",
    },
  },

  privacy: {
  eyebrow: "Privacy",
  title: "Privacy Policy",
  lastUpdatedLabel: "Last updated",
  lastUpdated: "September 12, 2026",

  introduction: [
    "This Privacy Policy explains how personal data may be processed when using arthurfranklin.com.br, especially through the contact form.",
    "Personal data is processed according to the purposes described in this Policy and in accordance with applicable legislation, including the Brazilian General Data Protection Law — LGPD (Law No. 13,709/2018).",
  ],

  sections: [
    {
      title: "Personal data processed",
      paragraphs: [
        "When using the contact form, data provided by the visitor may be processed, such as name, email address, phone number when provided, subject, and message content.",
        "Technical data necessary for the operation and security of the website may also be processed, such as IP address, request information, browser, device, and network traffic data.",
        "The phone number field is optional.",
      ],
    },
    {
      title: "Purposes of processing",
      paragraphs: [
        "Data is processed to receive and respond to messages sent by visitors, enable the operation of the contact form, and protect the website against spam, abusive automation, fraud, and other improper use.",
        "Data may also be used when necessary for application security, troubleshooting, compliance with legal or regulatory obligations, and the exercise or defense of rights.",
        "Submitting the contact form does not represent authorization to use the data for purposes incompatible with those described in this Policy.",
      ],
    },
    {
      title: "Third-party services",
      paragraphs: [
        "Cloudflare — provides services related to website infrastructure, delivery, and protection. Cloudflare Turnstile is used in the contact form to help prevent automated and abusive submissions.",
        "Resend — used to deliver messages submitted through the contact form to the destination email address. Data provided in the form may be processed during this operation.",
        "Apple — used to receive and manage messages forwarded through the contact form.",
        "These providers have their own privacy policies and practices applicable to the services they provide.",
      ],
    },
    {
      title: "International data transfers",
      paragraphs: [
        "Some of the providers used have international infrastructure and operations. As a result, certain data may be processed outside Brazil.",
        "Cloudflare states that it stores information primarily in the United States and the European Economic Area and may perform international transfers and access.",
        "Resend states that data provided from other countries may be transferred to the United States and processed there.",
        "Where applicable, international transfers must comply with the requirements established by Brazilian data protection legislation.",
      ],
    },
    {
      title: "Storage and security",
      paragraphs: [
        "Data will be retained for the period necessary to fulfill the purposes described in this Policy or while there is a legitimate basis or applicable obligation requiring its retention.",
        "Technical and administrative measures are adopted to reduce the risks of unauthorized access, loss, alteration, disclosure, or improper use of data.",
        "No system connected to the Internet can guarantee absolute protection against all security risks.",
      ],
    },
    {
      title: "Data sharing",
      paragraphs: [
        "Personal data processed through the website is not sold.",
        "Data may be processed or shared with the providers mentioned in this Policy when necessary to operate the website, deliver messages, protect the infrastructure, or comply with legal obligations.",
        "Data may also be disclosed when required by a valid order from a competent authority or when necessary for the exercise or defense of rights.",
      ],
    },
    {
      title: "Data subject rights",
      paragraphs: [
        "Under the LGPD, data subjects may exercise the rights applicable to the processing of their personal data.",
      ],
      items: [
        "confirmation of whether processing exists;",
        "access to personal data;",
        "correction of incomplete, inaccurate, or outdated data;",
        "anonymization, blocking, or deletion in the cases provided by law;",
        "information about data sharing;",
        "data portability, where applicable;",
        "objection to processing in the cases provided by law;",
        "withdrawal of consent when consent is the legal basis used;",
        "other rights provided by applicable legislation.",
      ],
    },
    {
      title: "Cookies and similar technologies",
      paragraphs: [
        "The website may use technologies necessary for its operation, security, and storage of preferences.",
        "When non-essential technologies that depend on the visitor's choice are used, they must respect the preferences defined through the mechanisms made available on the website.",
        "More information about the technologies actually used and their purposes will be available in the Cookie Policy.",
      ],
    },
    {
      title: "Controller, contact, and changes",
      paragraphs: [
        "The person responsible for decisions regarding the processing of personal data carried out through this website is Arthur Franklin.",
        "Requests related to privacy or the exercise of rights may be sent to arthur@arthurfranklin.com.br.",
        "This Policy may be updated to reflect changes to website features, services used, processing practices, or applicable legislation. The current version will remain available on this page together with the date of its latest update.",
      ],
    },
  ],
},

  footer: {
    role: "arthurfranklin.com.br",
    navigationTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Social Links",
    websiteLabel: "Website",
    legalTitle: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    cookiePreferences: "Cookie Preferences",
    copyright: "Arthur Franklin. All rights reserved.",
    signature: "Built using modern software engineering practices.",
    backToTop: "Back to top",
    backToTopAriaLabel: "Back to top",
  },
} satisfies PortfolioLocale;
