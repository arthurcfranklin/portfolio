import type { PortfolioLocale } from "@/types/locale";

export const ptBR = {
  seo: {
    title: "Arthur Franklin",
    description:
      "Auxiliar de TI focado em infraestrutura, suporte técnico e monitoramento. Soluções confiáveis para ambientes corporativos.",
    openGraphTitle: "Arthur Franklin — Auxiliar de TI",
    openGraphDescription: "Infraestrutura, Suporte Técnico e Operações de TI.",
  },

  header: {
    tagline: "Suporte Técnico · Infraestrutura · Automação",
    contactButton: "Entrar em Contato",
    mobileContactButton: "Contato",
  },

  navigation: {
    home: {
      label: "Início",
    },
    about: {
      label: "Sobre",
    },
    skills: {
      label: "Competências",
    },
    projects: {
      label: "Projetos",
    },
    services: {
      label: "Áreas de Atuação",
    },
    contact: {
      label: "Contato",
    },
  },

  hero: {
    firstName: "Arthur",
    lastName: "Franklin",
    roles: ["Suporte Técnico", "Infraestrutura", "Automação"],
    description:
      "Do atendimento ao usuário ao monitoramento de infraestrutura, criando soluções para operações de tecnologia mais eficientes e escaláveis.",
    resumeButton: "Ver Currículo",
    projectsButton: "Ver Projetos",
    socialLabels: {
      github: "GitHub",
      gitlab: "GitLab",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },

  about: {
    sectionLabel: "Sobre Mim",
    headingPrefix: "Entusiasta por ",
    headingHighlight: "tecnologia",
    headingSuffix: " e infraestrutura.",
    paragraphs: [
      "Minha trajetória em Tecnologia da Informação foi construída pela curiosidade e pela vontade de entender como a tecnologia resolve problemas reais. Foi assim que encontrei no suporte técnico e na infraestrutura um ambiente de aprendizado e evolução contínua.",
      "Hoje atuo na operação de ambientes de tecnologia e transformo desafios do dia a dia em oportunidades para criar ferramentas, automações e processos mais eficientes.",
    ],
    academicTimelineTitle: "Timeline Acadêmica",
    timeline: {
      "ads-degree": {
        years: "2025 — 2027",
        title: "Graduação em Análise e Desenvolvimento de Sistemas",
        subtitle: "Universidade Estácio de Sá",
        description:
          "Formação superior com foco em desenvolvimento de software, bancos de dados, algoritmos e engenharia de software.",
      },
      "systems-development-course": {
        years: "2024 — 2025",
        title: "Curso Técnico em Desenvolvimento de Sistemas",
        subtitle: "Firjan SENAI",
        note: "Formação não concluída em ago/2025, próxima à conclusão.",
        description:
          "Formação técnica com foco em lógica de programação, desenvolvimento de sistemas, bancos de dados e gestão de projetos de software.",
      },
    },
    stats: {
      experience: {
        value: "Anos em Tecnologia",
      },
      projects: {
        value: "Projetos",
      },
      certifications: {
        value: "Certificações",
      },
    },
  },

  skills: {
    sectionLabel: "Competências Técnicas",
    headingPrefix: "Ferramentas, tecnologias e ",
    headingHighlight: "conhecimentos",
    headingSuffix: " aplicados no dia a dia.",
    description:
      "Utilizo um conjunto de tecnologias, plataformas e práticas voltadas à infraestrutura, monitoramento, virtualização e automação, priorizando confiabilidade, observabilidade e eficiência operacional.",
    groups: {
      infrastructure: {
        title: "Infraestrutura & Suporte",
        items: [
          "Windows",
          "Linux",
          "Redes",
          "Suporte Técnico",
          "Troubleshooting",
          "Gestão de Ativos",
          "TCP/IP",
        ],
      },
      monitoring: {
        title: "Monitoramento & Operações",
        items: [
          "Zabbix",
          "Proxmox VE",
          "Grafana",
          "Observabilidade",
          "Análise de Métricas",
          "Análise de Incidentes",
          "Documentação Técnica",
        ],
      },
      development: {
        title: "Desenvolvimento & Automação",
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
    sectionLabel: "Projetos em Destaque",
    headingPrefix: "Soluções reais para ",
    headingHighlight: "problemas reais",
    headingSuffix: ".",
    viewAllButton: "Ver todos os projetos",
    items: {
      forgedocs: {
        name: "ForgeDocs",
        tag: "Suíte Desktop",
        description:
          "Suíte desktop para processamento de documentos com foco em privacidade, desempenho e produtividade em ambiente 100% local.",
      },
      libraryflow: {
        name: "LibraryFlow",
        tag: "Gestão de Bibliotecas",
        description:
          "Sistema web para gestão de bibliotecas, desenvolvido para simplificar o controle de acervos, empréstimos e devoluções.",
      },
      infratracker: {
        name: "InfraTracker",
        tag: "Infraestrutura e Monitoramento",
        description:
          "Ferramenta para inventário e monitoramento de ativos, desenvolvida para facilitar a gestão e a observabilidade de ambientes de TI.",
      },
    },
  },

  services: {
    sectionLabel: "Áreas de Atuação",
    headingPrefix: "Principais áreas de ",
    headingHighlight: "atuação",
    headingSuffix: ".",
    description:
      "Soluções aplicadas para manter ambientes de tecnologia organizados, estáveis e funcionais.",
    items: {
      "technical-support": {
        title: "Suporte Técnico",
        description:
          "Atendimento e resolução de incidentes, garantindo continuidade e eficiência na operação dos usuários.",
      },
      infrastructure: {
        title: "Infraestrutura",
        description:
          "Implantação, organização e manutenção de ambientes de tecnologia com foco em padronização e confiabilidade.",
      },
      "operating-systems": {
        title: "Sistemas Operacionais",
        description:
          "Instalação, configuração e suporte a ambientes Windows e Linux para diferentes cenários de uso.",
      },
      monitoring: {
        title: "Monitoramento",
        description:
          "Acompanhamento contínuo de ativos e serviços, antecipando falhas e apoiando decisões operacionais.",
      },
      automation: {
        title: "Automação",
        description:
          "Desenvolvimento de ferramentas e processos que reduzem tarefas repetitivas e aumentam a produtividade.",
      },
      "asset-management": {
        title: "Gestão de Ativos de TI",
        description:
          "Controle do ciclo de vida dos equipamentos, inventário, documentação e padronização dos ativos.",
      },
    },
  },

  contact: {
    sectionLabel: "Entre em Contato",
    headingPrefix: "O seu próximo projeto ",
    headingHighlight: "pode começar aqui",
    headingSuffix: "!",
    description:
      "Seja para uma oportunidade profissional, uma colaboração ou uma troca de experiências, estou sempre aberto a conversar.",
    items: {
      email: {
        label: "Email",
        value: "arthur@arthurfranklin.com.br",
        action: "Enviar email",
      },
      linkedin: {
        label: "LinkedIn",
        value: "arthurfranklin.com.br/linkedin",
        action: "Ver perfil",
      },
      location: {
        label: "Localização",
        value: "Rio de Janeiro - RJ, Brasil",
        action: "",
      },
      phone: {
        label: "Telefone",
        value: "Disponível em breve",
        action: "",
      },
    },
  },

  contactForm: {
    fields: {
      name: {
        label: "Nome",
        placeholder: "Seu nome completo",
      },
      email: {
        label: "Email",
        placeholder: "seu.email@exemplo.com",
      },
      phone: {
        label: "Telefone",
        placeholder: "(00) 00000-0000",
      },
      subject: {
        label: "Assunto",
        placeholder: "Qual é o assunto?",
      },
      message: {
        label: "Mensagem",
        placeholder: "Escreva sua mensagem aqui...",
      },
    },
    privacyNotice: "Seus dados serão usados apenas para responder a esta mensagem.",
    submitButton: "Enviar mensagem",
    successMessage: "Mensagem enviada ✓",
  },

  footer: {
    description: "Soluções voltadas a suporte técnico, infraestrutura, monitoramento e automação.",
    navigationTitle: "Navegação",
    contactTitle: "Contato",
    socialTitle: "Redes Sociais",
    websiteLabel: "Website",
    copyright: "Arthur Franklin. Todos os direitos reservados.",
    signature: "Desenvolvido com foco em desempenho, design e propósito.",
    backToTop: "Voltar ao topo",
    backToTopAriaLabel: "Voltar ao topo",
  },
} satisfies PortfolioLocale;
