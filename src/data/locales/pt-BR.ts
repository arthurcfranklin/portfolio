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
    tagline: "arthurfranklin.com.br",
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
          "Virtualização",
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
    viewProjectButton: "Ver Projeto",
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
      atlas: {
        name: "Atlas",
        tag: "Produtividade e Organização",
        description:
          "Workspace pessoal para organização de tarefas e projetos, desenvolvido com foco em produtividade, fluidez e experiência de uso.",
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
    headingPrefix: "Vamos construir ",
    headingHighlight: "algo juntos",
    headingSuffix: "!",
    description:
      "Seja para uma oportunidade profissional, uma colaboração ou uma troca de experiências, vamos conversar.",

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
        value: "Rio de Janeiro — RJ, Brasil",
      },

      phone: {
        label: "Telefone",
        value: "(21) 99079-8744",
      },
    },

    form: {
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
      sendingMessage: "Enviando...",
      successMessage: "Mensagem enviada ✓",
      errorMessage: "Não foi possível enviar a mensagem. Tente novamente.",
      verificationErrorMessage: "Não foi possível concluir a verificação de segurança."
    },
  },

  privacy: {
  eyebrow: "Privacidade",
  title: "Política de Privacidade",
  lastUpdatedLabel: "Última atualização",
  lastUpdated: "12 de setembro de 2026",

  introduction: [
    "Esta Política de Privacidade explica como os dados pessoais podem ser tratados durante a utilização do site arthurfranklin.com.br, especialmente por meio do formulário de contato.",
    "O tratamento de dados pessoais é realizado de acordo com as finalidades descritas nesta Política e observa a legislação aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018).",
  ],

  sections: [
    {
      title: "Dados pessoais tratados",
      paragraphs: [
        "Ao utilizar o formulário de contato, poderão ser tratados os dados fornecidos pelo visitante, como nome, endereço de e-mail, telefone quando informado, assunto e conteúdo da mensagem.",
        "Também poderão ser processados dados técnicos necessários ao funcionamento e à segurança do site, como endereço IP, informações sobre a requisição, navegador, dispositivo e tráfego de rede.",
        "O campo de telefone é opcional.",
      ],
    },
    {
      title: "Finalidades do tratamento",
      paragraphs: [
        "Os dados são tratados para receber e responder às mensagens enviadas pelo visitante, possibilitar o funcionamento do formulário e proteger o site contra spam, automações abusivas, fraude e outras utilizações indevidas.",
        "Também poderão ser utilizados quando necessário para segurança da aplicação, diagnóstico de falhas, cumprimento de obrigações legais ou regulatórias e exercício ou defesa de direitos.",
        "O envio do formulário não representa autorização para utilização dos dados para finalidades incompatíveis com aquelas descritas nesta Política.",
      ],
    },
    {
      title: "Serviços de terceiros",
      paragraphs: [
        "Cloudflare — fornece serviços relacionados à infraestrutura, entrega e proteção do site. O Cloudflare Turnstile é utilizado no formulário para auxiliar na prevenção de submissões automatizadas e abusivas.",
        "Resend — utilizado para entregar as mensagens enviadas pelo formulário ao endereço de e-mail de destino. Os dados fornecidos no formulário podem ser processados durante essa operação.",
        "Apple — utilizado para receber e gerenciar as mensagens encaminhadas pelo formulário.",
        "Esses fornecedores possuem suas próprias políticas e práticas de privacidade aplicáveis aos serviços que prestam.",
      ],
    },
    {
      title: "Transferências internacionais",
      paragraphs: [
        "Alguns dos fornecedores utilizados possuem infraestrutura e operações internacionais. Por isso, determinados dados poderão ser processados fora do Brasil.",
        "A Cloudflare informa que armazena informações principalmente nos Estados Unidos e no Espaço Econômico Europeu, podendo realizar transferências e acessos internacionais.",
        "O Resend informa que dados fornecidos a partir de outros países podem ser transferidos para os Estados Unidos e processados naquele país.",
        "Quando aplicável, as transferências internacionais deverão observar os requisitos previstos na legislação brasileira de proteção de dados.",
      ],
    },
    {
      title: "Armazenamento e segurança",
      paragraphs: [
        "Os dados serão mantidos pelo período necessário para atender às finalidades descritas nesta Política ou enquanto houver fundamento legítimo ou obrigação aplicável para sua conservação.",
        "São adotadas medidas técnicas e administrativas destinadas a reduzir riscos de acesso não autorizado, perda, alteração, divulgação ou utilização indevida dos dados.",
        "Nenhum sistema conectado à Internet pode garantir proteção absoluta contra todos os riscos de segurança.",
      ],
    },
    {
      title: "Compartilhamento de dados",
      paragraphs: [
        "Os dados pessoais tratados pelo site não são comercializados.",
        "Eles poderão ser processados ou compartilhados com os fornecedores mencionados nesta Política quando isso for necessário para operar o site, entregar as mensagens, proteger a infraestrutura ou cumprir obrigações legais.",
        "Também poderão ser divulgados quando exigido por determinação válida de autoridade competente ou quando necessário ao exercício ou defesa de direitos.",
      ],
    },
    {
      title: "Direitos do titular",
      paragraphs: [
        "Nos termos da LGPD, o titular poderá exercer os direitos aplicáveis ao tratamento de seus dados pessoais.",
      ],
      items: [
        "confirmação da existência de tratamento;",
        "acesso aos seus dados;",
        "correção de dados incompletos, inexatos ou desatualizados;",
        "anonimização, bloqueio ou eliminação nas hipóteses previstas em lei;",
        "informações sobre o compartilhamento de dados;",
        "portabilidade, quando aplicável;",
        "oposição ao tratamento nas hipóteses previstas em lei;",
        "revogação do consentimento, quando essa for a base legal utilizada;",
        "demais direitos previstos na legislação aplicável.",
      ],
    },
    {
      title: "Cookies e tecnologias semelhantes",
      paragraphs: [
        "O site poderá utilizar tecnologias necessárias ao seu funcionamento, segurança e armazenamento de preferências.",
        "Quando forem utilizadas tecnologias não essenciais que dependam da escolha do visitante, elas deverão respeitar as preferências definidas por meio dos mecanismos disponibilizados no site.",
        "Mais informações sobre as tecnologias efetivamente utilizadas e suas finalidades estarão disponíveis na Política de Cookies.",
      ],
    },
    {
      title: "Responsável, contato e alterações",
      paragraphs: [
        "O responsável pelas decisões relacionadas ao tratamento de dados pessoais realizado por meio deste site é Arthur Franklin.",
        "Solicitações relacionadas à privacidade ou ao exercício de direitos podem ser encaminhadas para arthur@arthurfranklin.com.br.",
        "Esta Política poderá ser atualizada para refletir alterações nas funcionalidades do site, nos serviços utilizados, nas práticas de tratamento ou na legislação aplicável. A versão vigente permanecerá disponível nesta página, acompanhada da data de sua última atualização.",
      ],
    },
  ],
},

  footer: {
    role: "arthurfranklin.com.br",
    navigationTitle: "Navegação",
    contactTitle: "Contato",
    socialTitle: "Redes Sociais",
    websiteLabel: "Website",
    legalTitle: "Legal",
    privacyPolicy: "Política de Privacidade",
    termsOfUse: "Termos de Uso",
    cookiePreferences: "Preferências de Cookies",
    copyright: "Arthur Franklin. Todos os direitos reservados.",
    signature: "Desenvolvido com as melhores práticas de engenharia de software.",
    backToTop: "Voltar ao topo",
    backToTopAriaLabel: "Voltar ao topo",
  },
} satisfies PortfolioLocale;
