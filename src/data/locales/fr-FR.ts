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

      atlas: {
        name: "Atlas",

        tag: "Productivité et Organisation",

        description:
          "Espace de travail personnel pour organiser les tâches et les projets, développé autour de la productivité, de la fluidité et de l’expérience utilisateur.",
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
        value: "(21) 99079-8744",
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
      sendingMessage: "Envoi en cours...",
      successMessage: "Message envoyé ✓",
      errorMessage: "Impossible d'envoyer le message. Veuillez réessayer.",
      verificationErrorMessage: "Impossible de terminer la vérification de sécurité.",
    },
  },

  privacy: {
  eyebrow: "Confidentialité",
  title: "Politique de confidentialité",
  lastUpdatedLabel: "Dernière mise à jour",
  lastUpdated: "12 septembre 2026",

  introduction: [
    "La présente Politique de confidentialité explique comment les données personnelles peuvent être traitées lors de l'utilisation de arthurfranklin.com.br, notamment au moyen du formulaire de contact.",
    "Le traitement des données personnelles est effectué conformément aux finalités décrites dans la présente Politique et à la législation applicable, notamment la loi brésilienne générale sur la protection des données — LGPD (loi nº 13.709/2018).",
  ],

  sections: [
    {
      title: "Données personnelles traitées",
      paragraphs: [
        "Lors de l'utilisation du formulaire de contact, les données fournies par le visiteur peuvent être traitées, notamment le nom, l'adresse e-mail, le numéro de téléphone lorsqu'il est renseigné, l'objet et le contenu du message.",
        "Des données techniques nécessaires au fonctionnement et à la sécurité du site peuvent également être traitées, telles que l'adresse IP, les informations relatives à la requête, le navigateur, l'appareil et le trafic réseau.",
        "Le champ du numéro de téléphone est facultatif.",
      ],
    },
    {
      title: "Finalités du traitement",
      paragraphs: [
        "Les données sont traitées afin de recevoir et de répondre aux messages envoyés par les visiteurs, de permettre le fonctionnement du formulaire et de protéger le site contre le spam, les automatisations abusives, la fraude et d'autres utilisations inappropriées.",
        "Elles peuvent également être utilisées lorsque cela est nécessaire pour la sécurité de l'application, le diagnostic de défaillances, le respect d'obligations légales ou réglementaires et l'exercice ou la défense de droits.",
        "L'envoi du formulaire ne constitue pas une autorisation d'utiliser les données à des fins incompatibles avec celles décrites dans la présente Politique.",
      ],
    },
    {
      title: "Services tiers",
      paragraphs: [
        "Cloudflare — fournit des services liés à l'infrastructure, à la distribution et à la protection du site. Cloudflare Turnstile est utilisé dans le formulaire afin de contribuer à empêcher les soumissions automatisées et abusives.",
        "Resend — est utilisé pour transmettre les messages envoyés via le formulaire à l'adresse e-mail de destination. Les données fournies dans le formulaire peuvent être traitées au cours de cette opération.",
        "Apple — est utilisé pour recevoir et gérer les messages transmis via le formulaire.",
        "Ces fournisseurs disposent de leurs propres politiques et pratiques de confidentialité applicables aux services qu'ils fournissent.",
      ],
    },
    {
      title: "Transferts internationaux",
      paragraphs: [
        "Certains fournisseurs utilisés disposent d'infrastructures et d'opérations internationales. Par conséquent, certaines données peuvent être traitées en dehors du Brésil.",
        "Cloudflare indique stocker principalement les informations aux États-Unis et dans l'Espace économique européen et pouvoir effectuer des transferts et des accès internationaux.",
        "Resend indique que les données fournies depuis d'autres pays peuvent être transférées aux États-Unis et y être traitées.",
        "Lorsque cela s'applique, les transferts internationaux doivent respecter les exigences prévues par la législation brésilienne sur la protection des données.",
      ],
    },
    {
      title: "Conservation et sécurité",
      paragraphs: [
        "Les données seront conservées pendant la durée nécessaire à la réalisation des finalités décrites dans la présente Politique ou tant qu'une base légitime ou une obligation applicable justifie leur conservation.",
        "Des mesures techniques et administratives sont mises en œuvre afin de réduire les risques d'accès non autorisé, de perte, de modification, de divulgation ou d'utilisation abusive des données.",
        "Aucun système connecté à Internet ne peut garantir une protection absolue contre tous les risques de sécurité.",
      ],
    },
    {
      title: "Partage des données",
      paragraphs: [
        "Les données personnelles traitées par le site ne sont pas commercialisées.",
        "Elles peuvent être traitées ou partagées avec les fournisseurs mentionnés dans la présente Politique lorsque cela est nécessaire au fonctionnement du site, à la transmission des messages, à la protection de l'infrastructure ou au respect d'obligations légales.",
        "Elles peuvent également être divulguées lorsqu'une décision valide d'une autorité compétente l'exige ou lorsque cela est nécessaire à l'exercice ou à la défense de droits.",
      ],
    },
    {
      title: "Droits des personnes concernées",
      paragraphs: [
        "Conformément à la LGPD, les personnes concernées peuvent exercer les droits applicables au traitement de leurs données personnelles.",
      ],
      items: [
        "confirmation de l'existence d'un traitement ;",
        "accès aux données personnelles ;",
        "rectification des données incomplètes, inexactes ou obsolètes ;",
        "anonymisation, blocage ou suppression dans les cas prévus par la loi ;",
        "informations concernant le partage des données ;",
        "portabilité, lorsqu'elle est applicable ;",
        "opposition au traitement dans les cas prévus par la loi ;",
        "retrait du consentement lorsque celui-ci constitue la base juridique utilisée ;",
        "autres droits prévus par la législation applicable.",
      ],
    },
    {
      title: "Cookies et technologies similaires",
      paragraphs: [
        "Le site peut utiliser des technologies nécessaires à son fonctionnement, à sa sécurité et au stockage des préférences.",
        "Lorsque des technologies non essentielles dépendant du choix du visiteur sont utilisées, elles doivent respecter les préférences définies au moyen des mécanismes proposés sur le site.",
        "De plus amples informations sur les technologies effectivement utilisées et leurs finalités seront disponibles dans la Politique relative aux cookies.",
      ],
    },
    {
      title: "Responsable, contact et modifications",
      paragraphs: [
        "La personne responsable des décisions relatives au traitement des données personnelles effectué au moyen de ce site est Arthur Franklin.",
        "Les demandes relatives à la confidentialité ou à l'exercice des droits peuvent être envoyées à arthur@arthurfranklin.com.br.",
        "La présente Politique peut être mise à jour afin de refléter les modifications apportées aux fonctionnalités du site, aux services utilisés, aux pratiques de traitement ou à la législation applicable. La version en vigueur restera disponible sur cette page avec la date de sa dernière mise à jour.",
      ],
    },
  ],
},

  footer: {
    role: "arthurfranklin.com.br",
    navigationTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Réseaux sociaux",
    websiteLabel: "Site web",
    legalTitle: "Mentions légales",
    privacyPolicy: "Politique de confidentialité",
    termsOfUse: "Conditions d'utilisation",
    cookiePreferences: "Préférences relatives aux cookies",
    copyright: "Arthur Franklin. Tous droits réservés.",
    signature: "Développé selon les meilleures pratiques en ingénierie logicielle.",
    backToTop: "Retour en haut",
    backToTopAriaLabel: "Retour en haut",
  },
} satisfies PortfolioLocale;
