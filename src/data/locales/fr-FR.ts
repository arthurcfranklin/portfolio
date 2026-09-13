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

  terms: {
  eyebrow: "Mentions légales",
  title: "Conditions d'utilisation",
  lastUpdatedLabel: "Dernière mise à jour",
  lastUpdated: "13 septembre 2026",

  introduction: [
    "Les présentes Conditions d'utilisation définissent les conditions applicables à l'accès et à l'utilisation de arthurfranklin.com.br et de son contenu.",
    "En utilisant ce site, le visiteur accepte de le faire de manière licite, responsable et conforme aux finalités présentées sur cette page.",
  ],

  sections: [
    {
      title: "Acceptation et finalité",
      paragraphs: [
        "Ce site a une finalité professionnelle et informative et est utilisé pour présenter des informations sur Arthur Franklin, son expérience, ses compétences, ses projets, ses moyens de contact et d'autres contenus liés à son activité professionnelle.",
        "L'accès au site est fourni gratuitement et n'établit, à lui seul, aucune relation contractuelle, commerciale, professionnelle ou de prestation de services entre le visiteur et le responsable du site.",
      ],
    },
    {
      title: "Utilisation du site",
      paragraphs: [
        "Le visiteur s'engage à utiliser le site de manière licite et à ne pas entreprendre d'actions susceptibles de compromettre sa sécurité, sa disponibilité, son intégrité ou son fonctionnement.",
        "Il est interdit de tenter d'obtenir un accès non autorisé aux systèmes, ressources, données ou zones restreintes liés au site, ainsi que d'utiliser ses ressources à des fins abusives, frauduleuses ou illicites.",
      ],
    },
    {
      title: "Contenu et propriété intellectuelle",
      paragraphs: [
        "Sauf indication contraire, les textes, éléments visuels, identité, structure et autres contenus originaux de ce site appartiennent au responsable du site.",
        "La consultation et l'utilisation personnelle des contenus sont autorisées. La reproduction, la distribution, la modification ou l'utilisation commerciale d'un contenu original nécessite une autorisation préalable, sauf dans les cas autorisés par la législation applicable ou lorsqu'une licence spécifique est indiquée pour le contenu concerné.",
      ],
    },
    {
      title: "Projets, code et liens externes",
      paragraphs: [
        "Le site peut présenter des projets, des dépôts de code, des démonstrations et des références hébergés sur des plateformes tierces.",
        "Les projets ou codes publiés dans des dépôts externes sont soumis aux licences et conditions respectives indiquées sur ces plateformes.",
        "Les liens vers des services ou sites tiers sont fournis à titre de référence ou de commodité. Le responsable de ce site ne contrôle pas le contenu, la disponibilité, les pratiques de confidentialité ou les politiques adoptées par ces services externes.",
      ],
    },
    {
      title: "Disponibilité et modifications",
      paragraphs: [
        "Des efforts sont déployés pour maintenir le site disponible, à jour et fonctionnel, mais sa disponibilité continue ou l'absence de pannes, d'interruptions ou d'indisponibilités temporaires ne peut être garantie.",
        "Les contenus, fonctionnalités, structure, projets présentés et autres éléments du site peuvent être modifiés, mis à jour ou supprimés à tout moment.",
      ],
    },
    {
      title: "Limitation de responsabilité",
      paragraphs: [
        "Les informations mises à disposition sur ce site sont de nature professionnelle et informative et sont présentées de bonne foi.",
        "Dans la mesure permise par la législation applicable, le responsable du site ne saurait être tenu responsable des dommages résultant d'une utilisation inappropriée du contenu, d'une indisponibilité temporaire, de défaillances de services tiers ou de décisions prises exclusivement sur la base des informations présentées sur ce site.",
      ],
    },
    {
      title: "Confidentialité et protection des données",
      paragraphs: [
        "Le traitement des données personnelles lié à l'utilisation du site et du formulaire de contact est décrit dans la Politique de confidentialité.",
        "Le cas échéant, l'utilisation de cookies et de technologies similaires sera également détaillée dans la Politique relative aux cookies et dans les préférences mises à la disposition du visiteur.",
      ],
    },
    {
      title: "Contact et modification des conditions",
      paragraphs: [
        "Le responsable du site est Arthur Franklin, titulaire de arthurfranklin.com.br, et peut être contacté à l'adresse arthur@arthurfranklin.com.br.",
        "Les présentes Conditions d'utilisation peuvent être mises à jour afin de refléter les modifications du site, de ses services ou des exigences applicables. La version en vigueur restera disponible sur cette page avec sa date de mise à jour correspondante.",
        "Toute question relative aux présentes Conditions d'utilisation peut être envoyée à arthur@arthurfranklin.com.br.",
      ],
    },
  ],
},

  consent: {
  banner: {
    ariaLabel: "Préférences relatives aux cookies",
    title: "Confidentialité et Préférences",
    descriptionLine1:
      "Nous utilisons des technologies nécessaires aux préférences et à la sécurité.",
    descriptionLine2:
      "Les fonctionnalités facultatives nécessitent votre autorisation.",
    accept: "Accepter",
    reject: "Refuser",
    customize: "Personnaliser",
  },

  preferences: {
    title: "Préférences relatives aux cookies",
    descriptionLines: [
      "Choisissez les technologies facultatives pouvant",
      "être utilisées sur ce site.",
    ],
    closeLabel: "Fermer les préférences",

    necessary: {
      title: "Nécessaires",
      status: "Toujours actifs",
      descriptionLines: [
        "Maintiennent les préférences essentielles,",
        "la sécurité et le fonctionnement du site.",
      ],
    },

    analytics: {
      title: "Analyse et métriques",
      descriptionLines: [
        "Permettent des mesures d'utilisation facultatives",
        "lorsqu'elles sont disponibles.",
      ],
      switchLabel: "Autoriser l'analyse et les métriques",
    },

    cancel: "Annuler",
    save: "Enregistrer les préférences",
  },
},

  cookies: {
  eyebrow: "Mentions légales",
  title: "Politique relative aux cookies",
  lastUpdatedLabel: "Dernière mise à jour",
  lastUpdated: "13 septembre 2026",

  introduction: [
    "La présente Politique relative aux cookies explique comment arthurfranklin.com.br utilise les cookies, le stockage local et des technologies similaires à des fins de fonctionnement, de préférences et de sécurité.",
    "Le site n'utilise actuellement aucun outil d'analyse, de publicité comportementale ou de suivi non essentiel. Si cela devait changer, cette politique et le mécanisme de préférences seraient mis à jour avant l'activation de ces technologies.",
  ],

  sections: [
    {
      title: "Cookies et technologies similaires",
      paragraphs: [
        "Les cookies sont de petits fichiers pouvant être stockés par le navigateur lors de l'utilisation d'un site web. Des technologies similaires, telles que le stockage local du navigateur, peuvent également conserver certaines informations entre les visites.",
        "Sur ce site, certaines préférences sont enregistrées localement afin de conserver les choix du visiteur et d'assurer une expérience cohérente.",
      ],
    },
    {
      title: "Technologies actuellement utilisées",
      paragraphs: [
        "Le site utilise le stockage local du navigateur pour enregistrer les préférences de langue, de thème visuel et de consentement.",
        "Ces informations restent sur l'appareil et dans le navigateur utilisés jusqu'à ce qu'elles soient modifiées ou supprimées par l'utilisateur.",
      ],
      items: [
        "portfolio-language : enregistre la langue sélectionnée.",
        "portfolio-theme : enregistre la préférence de thème clair, sombre ou système.",
        "portfolio-cookie-consent : enregistre le choix relatif aux technologies facultatives ainsi que la version de la préférence enregistrée.",
      ],
    },
    {
      title: "Technologies nécessaires",
      paragraphs: [
        "Les technologies nécessaires sont utilisées pour les fonctionnalités essentielles, les préférences demandées par l'utilisateur, la sécurité et le bon fonctionnement du site.",
        "Elles ne sont pas utilisées à des fins de publicité comportementale ou de création de profils de navigation.",
      ],
    },
    {
      title: "Sécurité et Cloudflare Turnstile",
      paragraphs: [
        "Le formulaire de contact utilise Cloudflare Turnstile afin de contribuer à la protection contre les abus, le spam et le trafic automatisé.",
        "Lors de cette vérification, Cloudflare peut traiter les informations techniques nécessaires pour évaluer la légitimité de l'interaction conformément à ses propres conditions et politiques applicables.",
      ],
    },
    {
      title: "Analyse et métriques",
      paragraphs: [
        "Le site n'utilise actuellement aucun outil facultatif d'analyse ou de mesure nécessitant un consentement.",
        "La catégorie d'analyse et de métriques disponible dans les préférences existe afin de permettre une future mise en œuvre respectant le choix de l'utilisateur. Aucune technologie de cette catégorie n'est actuellement chargée.",
      ],
    },
    {
      title: "Gestion des préférences",
      paragraphs: [
        "Lors de la première visite, l'utilisateur peut accepter les technologies facultatives, les refuser ou personnaliser ses préférences.",
        "Le choix peut ensuite être révisé au moyen du bouton flottant de préférences relatives aux cookies disponible sur le site.",
        "Les technologies nécessaires restent actives car elles sont utilisées pour les fonctionnalités essentielles, les préférences et les mécanismes de sécurité.",
      ],
    },
    {
      title: "Suppression des données enregistrées",
      paragraphs: [
        "L'utilisateur peut supprimer les données enregistrées localement au moyen des contrôles de confidentialité et de stockage proposés par son navigateur.",
        "La suppression de ces informations peut réinitialiser certaines préférences, notamment la langue, le thème et le choix de consentement, qui pourront alors être demandées à nouveau lors d'une visite ultérieure.",
      ],
    },
    {
      title: "Services tiers",
      paragraphs: [
        "Certaines fonctionnalités de sécurité et d'infrastructure peuvent être fournies par des tiers, notamment Cloudflare. Ces fournisseurs peuvent traiter les données techniques nécessaires à la fourniture de leurs services conformément à leurs propres politiques de confidentialité.",
        "Des informations supplémentaires concernant le traitement général des données personnelles par le site sont disponibles dans la Politique de confidentialité.",
      ],
    },
    {
      title: "Modifications de cette politique",
      paragraphs: [
        "La présente Politique relative aux cookies peut être mise à jour lorsque les technologies utilisées par le site sont ajoutées, supprimées ou modifiées.",
        "Lorsqu'une modification affecte des catégories facultatives ou des choix précédemment enregistrés, le mécanisme de consentement peut demander une nouvelle décision.",
        "Toute question concernant cette politique peut être adressée à arthur@arthurfranklin.com.br.",
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
    cookiePolicy: "Politique relative aux cookies",
    cookiePreferences: "Préférences relatives aux cookies",
    copyright: "Arthur Franklin. Tous droits réservés.",
    signature: "Développé selon les meilleures pratiques en ingénierie logicielle.",
    backToTop: "Retour en haut",
    backToTopAriaLabel: "Retour en haut",
  },
} satisfies PortfolioLocale;
