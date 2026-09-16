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
          "Suíte desktop para processamento de documentos com foco em privacidade, desempenho e operação local.",
      },
      libraryflow: {
        name: "LibraryFlow",
        tag: "Gestão de Bibliotecas",
        description:
          "Sistema web para gestão de bibliotecas, desenvolvido com foco em arquitetura, persistência de dados e evolução contínua.",
      },
      atlas: {
        name: "Atlas",
        tag: "Produtividade e Organização",
        description:
          "Workspace pessoal para organização de tarefas e projetos, desenvolvido com foco em produtividade, fluidez e experiência de uso.",
      },
      deskly: {
        name: "Deskly",
        tag: "Sistema de Chamados",
        description:
          "Sistema de chamados de TI desenvolvido para organizar solicitações de suporte e acompanhar seu atendimento.",
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
      verificationErrorMessage: "Não foi possível concluir a verificação de segurança.",
    },
  },

  privacy: {
    eyebrow: "Privacidade",
    title: "Política de Privacidade",
    lastUpdatedLabel: "Última atualização",
    lastUpdated: "12 de setembro de 2026",
    tableOfContentsLabel: "Nesta página",

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

  terms: {
    eyebrow: "Legal",
    title: "Termos de Uso",
    lastUpdatedLabel: "Última atualização",
    lastUpdated: "13 de setembro de 2026",
    tableOfContentsLabel: "Nesta página",

    introduction: [
      "Estes Termos de Uso estabelecem as condições aplicáveis ao acesso e à utilização de arthurfranklin.com.br e de seus conteúdos.",
      "Ao utilizar este site, o visitante concorda em fazê-lo de forma lícita, responsável e compatível com as finalidades apresentadas nesta página.",
    ],

    sections: [
      {
        title: "Aceitação e finalidade",
        paragraphs: [
          "Este site possui finalidade profissional e informativa, sendo utilizado para apresentar informações sobre Arthur Franklin, sua experiência, competências, projetos, formas de contato e demais conteúdos relacionados à sua atuação profissional.",
          "O acesso ao site é disponibilizado gratuitamente e não estabelece, por si só, qualquer relação contratual, comercial, trabalhista ou de prestação de serviços entre o visitante e o responsável pelo site.",
        ],
      },
      {
        title: "Uso do site",
        paragraphs: [
          "O visitante compromete-se a utilizar o site de forma lícita e a não praticar atos que possam comprometer sua segurança, disponibilidade, integridade ou funcionamento.",
          "Não é permitido tentar obter acesso não autorizado a sistemas, recursos, dados ou áreas restritas relacionadas ao site, bem como utilizar seus recursos para atividades abusivas, fraudulentas ou ilícitas.",
        ],
      },
      {
        title: "Conteúdo e propriedade intelectual",
        paragraphs: [
          "Salvo quando indicado de forma diferente, os textos, elementos visuais, identidade, estrutura e demais conteúdos autorais deste site pertencem ao responsável pelo site.",
          "A visualização e o uso pessoal dos conteúdos são permitidos. A reprodução, distribuição, modificação ou utilização comercial de conteúdo autoral próprio depende de autorização prévia, exceto nos casos permitidos pela legislação aplicável ou quando houver licença específica informada no respectivo material.",
        ],
      },
      {
        title: "Projetos, códigos e links externos",
        paragraphs: [
          "O site pode apresentar projetos, repositórios, demonstrações e referências hospedados em plataformas de terceiros.",
          "Projetos ou códigos publicados em repositórios externos estão sujeitos às respectivas licenças e condições indicadas nesses ambientes.",
          "Links para serviços ou sites de terceiros são disponibilizados como referência ou conveniência. O responsável por este site não controla o conteúdo, a disponibilidade, as práticas de privacidade ou as políticas adotadas por esses serviços externos.",
        ],
      },
      {
        title: "Disponibilidade e alterações",
        paragraphs: [
          "Busca-se manter o site disponível, atualizado e funcional, mas não é garantida disponibilidade contínua ou ausência de falhas, interrupções ou indisponibilidades temporárias.",
          "Conteúdos, funcionalidades, estrutura, projetos apresentados e demais elementos do site podem ser modificados, atualizados ou removidos a qualquer momento.",
        ],
      },
      {
        title: "Limitação de responsabilidade",
        paragraphs: [
          "As informações disponibilizadas neste site possuem caráter profissional e informativo e são apresentadas de boa-fé.",
          "Na medida permitida pela legislação aplicável, o responsável pelo site não se responsabiliza por danos decorrentes de uso inadequado do conteúdo, indisponibilidade temporária, falhas de serviços de terceiros ou decisões tomadas exclusivamente com base nas informações apresentadas neste site.",
        ],
      },
      {
        title: "Privacidade e proteção de dados",
        paragraphs: [
          "O tratamento de dados pessoais relacionado ao uso do site e ao formulário de contato é descrito na Política de Privacidade.",
          "Quando aplicável, o uso de cookies e tecnologias semelhantes também será detalhado na Política de Cookies e nas preferências disponibilizadas ao visitante.",
        ],
      },
      {
        title: "Contato e alterações dos termos",
        paragraphs: [
          "O responsável pelo site é Arthur Franklin, titular de arthurfranklin.com.br, e pode ser contatado pelo endereço arthur@arthurfranklin.com.br.",
          "Estes Termos de Uso podem ser atualizados para refletir alterações no site, em seus serviços ou em requisitos aplicáveis. A versão vigente permanecerá disponível nesta página com a respectiva data de atualização.",
          "Dúvidas relacionadas a estes Termos de Uso podem ser encaminhadas para arthur@arthurfranklin.com.br.",
        ],
      },
    ],
  },

  consent: {
    banner: {
      ariaLabel: "Preferências de cookies",
      title: "Privacidade e Preferências",
      descriptionLine1: "Usamos tecnologias necessárias para preferências e segurança.",
      descriptionLine2: "Recursos opcionais dependem da sua autorização.",
      accept: "Aceitar",
      reject: "Negar",
      customize: "Personalizar",
    },
    preferences: {
      title: "Preferências de Cookies",
      descriptionLines: ["Escolha quais tecnologias opcionais", "podem ser utilizadas neste site."],
      closeLabel: "Fechar preferências",

      necessary: {
        title: "Necessários",
        status: "Sempre ativos",
        descriptionLines: ["Mantêm preferências essenciais,", "segurança e funcionamento do site."],
      },

      analytics: {
        title: "Análise e métricas",
        descriptionLines: ["Permitem métricas opcionais de", "utilização quando disponíveis."],
        switchLabel: "Permitir análise e métricas",
      },

      cancel: "Cancelar",
      save: "Salvar preferências",
    },
  },

  cookies: {
    eyebrow: "Legal",
    title: "Política de Cookies",
    lastUpdatedLabel: "Última atualização",
    lastUpdated: "13 de setembro de 2026",
    tableOfContentsLabel: "Nesta página",

    introduction: [
      "Esta Política de Cookies explica como o site arthurfranklin.com.br utiliza cookies, armazenamento local e tecnologias semelhantes para funcionamento, preferências e segurança.",
      "Atualmente, o site não utiliza ferramentas de análise, publicidade comportamental ou rastreamento não essencial. Caso isso mude, esta política e o mecanismo de preferências serão atualizados antes da ativação dessas tecnologias.",
    ],

    sections: [
      {
        title: "O que são cookies e tecnologias semelhantes",
        paragraphs: [
          "Cookies são pequenos arquivos que podem ser armazenados pelo navegador durante a utilização de um site. Tecnologias semelhantes, como o armazenamento local do navegador, também podem conservar determinadas informações entre acessos.",
          "Neste site, algumas preferências são armazenadas localmente para preservar configurações escolhidas pelo visitante e garantir uma experiência consistente.",
        ],
      },
      {
        title: "Tecnologias utilizadas atualmente",
        paragraphs: [
          "O site utiliza armazenamento local do navegador para registrar preferências de idioma, tema visual e escolhas relacionadas ao consentimento.",
          "Essas informações permanecem no dispositivo e no navegador utilizado até que sejam alteradas ou removidas pelo próprio usuário.",
        ],
        items: [
          "portfolio-language: registra o idioma selecionado.",
          "portfolio-theme: registra a preferência de tema claro, escuro ou do sistema.",
          "portfolio-cookie-consent: registra a escolha sobre tecnologias opcionais e a versão da preferência salva.",
        ],
      },
      {
        title: "Tecnologias necessárias",
        paragraphs: [
          "Tecnologias necessárias são utilizadas para funcionalidades essenciais, preferências solicitadas pelo usuário, segurança e funcionamento adequado do site.",
          "Essas tecnologias não são utilizadas para publicidade comportamental ou criação de perfis de navegação.",
        ],
      },
      {
        title: "Segurança e Cloudflare Turnstile",
        paragraphs: [
          "O formulário de contato utiliza Cloudflare Turnstile como mecanismo de proteção contra abuso, spam e tráfego automatizado.",
          "Durante essa verificação, a Cloudflare pode tratar informações técnicas necessárias para avaliar a legitimidade da interação, de acordo com seus próprios termos e políticas aplicáveis.",
        ],
      },
      {
        title: "Análise e métricas",
        paragraphs: [
          "O site não utiliza atualmente ferramentas opcionais de análise ou métricas que dependam de consentimento.",
          "A categoria de análise e métricas disponível nas preferências existe para permitir uma implementação futura compatível com a escolha do usuário. Nenhuma ferramenta dessa categoria é carregada atualmente.",
        ],
      },
      {
        title: "Gerenciamento das preferências",
        paragraphs: [
          "Na primeira visita, o usuário pode aceitar tecnologias opcionais, recusá-las ou personalizar sua preferência.",
          "A escolha pode ser revisada posteriormente por meio do botão flutuante de Preferências de Cookies disponível no site.",
          "As tecnologias necessárias permanecem ativas porque são utilizadas para funcionalidades, preferências e mecanismos de segurança essenciais.",
        ],
      },
      {
        title: "Como remover os dados armazenados",
        paragraphs: [
          "O usuário pode remover dados armazenados localmente utilizando os controles de privacidade e armazenamento disponibilizados pelo próprio navegador.",
          "A exclusão dessas informações pode redefinir preferências como idioma, tema e escolha de consentimento, fazendo com que sejam solicitadas novamente em um acesso posterior.",
        ],
      },
      {
        title: "Serviços de terceiros",
        paragraphs: [
          "Determinados recursos de segurança e infraestrutura podem ser fornecidos por terceiros, incluindo a Cloudflare. Esses fornecedores podem tratar dados técnicos necessários para a prestação de seus serviços conforme suas próprias políticas de privacidade.",
          "Informações adicionais sobre o tratamento geral de dados pessoais pelo site estão disponíveis na Política de Privacidade.",
        ],
      },
      {
        title: "Alterações desta política",
        paragraphs: [
          "Esta Política de Cookies poderá ser atualizada caso sejam adicionadas, removidas ou modificadas tecnologias utilizadas pelo site.",
          "Quando uma alteração afetar categorias opcionais ou escolhas já realizadas, o mecanismo de consentimento poderá solicitar uma nova decisão.",
          "Dúvidas sobre esta política podem ser encaminhadas para arthur@arthurfranklin.com.br.",
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
    cookiePolicy: "Política de Cookies",
    cookiePreferences: "Preferências de Cookies",
    copyright: "Arthur Franklin. Todos os direitos reservados.",
    signature: "Desenvolvido com as melhores práticas de engenharia de software.",
    backToTop: "Voltar ao topo",
    backToTopAriaLabel: "Voltar ao topo",
  },
} satisfies PortfolioLocale;
