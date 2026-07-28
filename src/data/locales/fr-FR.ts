import type { PortfolioLocale } from "@/types/locale";

import { ptBR } from "./pt-BR";

export const frFR: PortfolioLocale = {
  ...ptBR,

  seo: {
    title: "Arthur Franklin",
    description:
      "Technicien support informatique spécialisé en infrastructure, assistance technique et supervision des systèmes. Des solutions fiables pour les environnements professionnels.",
    openGraphTitle: "Arthur Franklin — Technicien support informatique",
    openGraphDescription: "Infrastructure, support informatique et exploitation des systèmes.",
  },

  header: {
    tagline: "arthurfranklin.com.br",

    contactButton: "Me contacter",

    mobileContactButton: "Contact",
  },

  navigation: {
    home: {
      label: "Accueil",
    },

    about: {
      label: "À propos",
    },

    skills: {
      label: "Compétences",
    },

    projects: {
      label: "Projets",
    },

    services: {
      label: "Expertise",
    },

    contact: {
      label: "Contact",
    },
  },

  hero: {
    ...ptBR.hero,

    roles: ["Support Informatique", "Infrastructure", "Automatisation"],

    description:
      "Du support utilisateur à la supervision des infrastructures, je conçois des solutions pour rendre les opérations informatiques plus fiables, efficaces et évolutives.",

    resumeButton: "Voir le CV",

    projectsButton: "Voir les projets",

    socialLabels: {
      ...ptBR.hero.socialLabels,

      github: "GitHub",
      gitlab: "GitLab",
      linkedin: "LinkedIn",
      email: "E-mail",
    },
  },

  about: {
    sectionLabel: "À propos",

    headingPrefix: "Passionné par la ",
    headingHighlight: "technologie",
    headingSuffix: " et les infrastructures.",

    paragraphs: [
      "Mon parcours dans les technologies de l'information est né de ma curiosité et de ma volonté de comprendre comment la technologie peut résoudre des problématiques concrètes. C'est ainsi que j'ai trouvé dans le support informatique et les infrastructures un environnement propice à l'apprentissage et à l'amélioration continue.",

      "Aujourd'hui, je participe à l'exploitation des environnements informatiques et je transforme les défis du quotidien en opportunités pour concevoir des outils, des automatisations et des processus plus efficaces.",
    ],

    academicTimelineTitle: "Parcours académique",

    timeline: {
      "ads-degree": {
        years: "2025 — 2027",

        title: "Licence en Analyse et Développement des Systèmes",

        subtitle: "Universidade Estácio de Sá",

        description:
          "Formation universitaire axée sur le développement logiciel, les bases de données, les algorithmes et le génie logiciel.",
      },

      "systems-development-course": {
        years: "2024 — 2025",

        title: "Formation technique en Développement des Systèmes",

        subtitle: "Firjan SENAI",

        note: "Formation non achevée en août 2025, actuellement en voie d'achèvement.",

        description:
          "Formation technique axée sur la logique de programmation, le développement logiciel, les bases de données et la gestion de projets informatiques.",
      },
    },

    stats: {
      experience: {
        value: "Années en informatique",
      },

      projects: {
        value: "Projets",
      },

      certifications: {
        value: "Certifications",
      },
    },
  },

  skills: {
    sectionLabel: "Compétences Techniques",

    headingPrefix: "Outils, technologies et ",
    headingHighlight: "compétences",
    headingSuffix: " appliqués au quotidien.",

    description:
      "J'utilise un ensemble de technologies, de plateformes et de bonnes pratiques orientées vers l'infrastructure, la supervision, la virtualisation et l'automatisation, en privilégiant la fiabilité, l'observabilité et l'efficacité opérationnelle.",

    groups: {
      infrastructure: {
        title: "Infrastructure & Support",

        items: [
          "Windows",
          "Linux",
          "Réseaux",
          "Support Informatique",
          "Troubleshooting",
          "Gestion des Actifs Informatiques",
          "TCP/IP",
        ],
      },

      monitoring: {
        title: "Supervision & Exploitation",

        items: [
          "Zabbix",
          "Proxmox VE",
          "Grafana",
          "Observabilité",
          "Analyse des Métriques",
          "Analyse des Incidents",
          "Virtualisation",
        ],
      },

      development: {
        title: "Développement & Automatisation",

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
    sectionLabel: "Projets à l'honneur",

    headingPrefix: "Des solutions concrètes pour des ",
    headingHighlight: "problèmes réels",
    headingSuffix: ".",

    viewAllButton: "Voir tous les projets",

    viewProjectButton: "Voir le projet",

    items: {
      forgedocs: {
        name: "ForgeDocs",

        tag: "Suite bureautique",

        description:
          "Suite bureautique dédiée au traitement de documents, conçue pour offrir confidentialité, performances et productivité dans un environnement 100 % local.",
      },

      libraryflow: {
        name: "LibraryFlow",

        tag: "Gestion de Bibliothèque",

        description:
          "Application web de gestion de bibliothèque conçue pour simplifier le suivi des collections, des emprunts et des retours.",
      },

      infratracker: {
        name: "InfraTracker",

        tag: "Infrastructure & Supervision",

        description:
          "Outil d'inventaire et de supervision des actifs, conçu pour faciliter la gestion et l'observabilité des environnements informatiques.",
      },
    },
  },

  services: {
    sectionLabel: "Domaines d'expertise",

    headingPrefix: "Mes principaux domaines ",
    headingHighlight: "d'expertise",
    headingSuffix: ".",

    description:
      "Des solutions concrètes pour maintenir des environnements informatiques organisés, fiables et performants.",

    items: {
      "technical-support": {
        title: "Support informatique",

        description:
          "Prise en charge et résolution des incidents afin d'assurer la continuité et l'efficacité des activités des utilisateurs.",
      },

      infrastructure: {
        title: "Infrastructure",

        description:
          "Déploiement, organisation et maintenance des environnements informatiques avec un accent sur la standardisation et la fiabilité.",
      },

      "operating-systems": {
        title: "Systèmes d'exploitation",

        description:
          "Installation, configuration et assistance des environnements Windows et Linux adaptés à différents contextes d'utilisation.",
      },

      monitoring: {
        title: "Supervision",

        description:
          "Suivi continu des systèmes et des services afin d'anticiper les incidents et de soutenir les décisions opérationnelles.",
      },

      automation: {
        title: "Automatisation",

        description:
          "Développement d'outils et de processus permettant de réduire les tâches répétitives et d'améliorer la productivité.",
      },

      "asset-management": {
        title: "Gestion des actifs informatiques",

        description:
          "Gestion du cycle de vie des équipements, inventaire, documentation et standardisation du parc informatique.",
      },
    },
  },

  contact: {
    sectionLabel: "Contact",

    headingPrefix: "Construisons ",
    headingHighlight: "quelque chose ensemble ",
    headingSuffix: "!",

    description:
      "Que ce soit pour une opportunité professionnelle, une collaboration ou simplement pour échanger des idées, n'hésitez pas à me contacter.",

    items: {
      email: {
        label: "E-mail",
        value: "arthur@arthurfranklin.com.br",
        action: "Envoyer un e-mail",
      },

      linkedin: {
        label: "LinkedIn",
        value: "arthurfranklin.com.br/linkedin",
        action: "Voir le profil",
      },

      location: {
        label: "Localisation",
        value: "Rio de Janeiro — RJ, Brésil",
      },

      phone: {
        label: "Téléphone",
        value: "Disponible prochainement",
      },
    },

    form: {
      fields: {
        name: {
          label: "Nom",
          placeholder: "Votre nom complet",
        },

        email: {
          label: "E-mail",
          placeholder: "votre.email@exemple.com",
        },

        phone: {
          label: "Téléphone",
          placeholder: "(00) 00000-0000",
        },

        subject: {
          label: "Objet",
          placeholder: "Quel est le sujet ?",
        },

        message: {
          label: "Message",
          placeholder: "Écrivez votre message ici...",
        },
      },

      privacyNotice: "Vos données servent uniquement à répondre à votre message.",

      submitButton: "Envoyer le message",

      successMessage: "Message envoyé ✓",
    },
  },

  footer: {
    description:
      "Transformer les défis en solutions concrètes pour les environnements informatiques.",

    role: "arthurfranklin.com.br",

    navigationTitle: "Navigation",

    contactTitle: "Contact",

    socialTitle: "Réseaux sociaux",

    websiteLabel: "Site web",

    copyright: "Arthur Franklin. Tous droits réservés.",

    signature: "Développé selon les meilleures pratiques en ingénierie logicielle.",

    backToTop: "Retour en haut",

    backToTopAriaLabel: "Retour en haut",
  },
} satisfies PortfolioLocale;
