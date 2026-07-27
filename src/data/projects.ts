import { Activity, BookOpen, FileText } from "lucide-react";

import type { ProjectItem } from "@/types/content";

export const projects: ProjectItem[] = [
  {
    name: "ForgeDocs",
    tag: "Suíte Desktop",
    description:
      "Suíte desktop para processamento de documentos com foco em privacidade, desempenho e produtividade em ambiente 100% local.",
    tech: ["Python", "CustomTkInter", "Git", "GitHub"],
    icon: FileText,
    url: "https://arthurfranklin.com.br/forgedocs",
  },
  {
    name: "LibraryFlow",
    tag: "Gestão de Bibliotecas",
    description:
      "Sistema web para gestão de bibliotecas, desenvolvido para simplificar o controle de acervos, empréstimos e devoluções.",
    tech: [
      "Python",
      "FastAPI",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
    ],
    icon: BookOpen,
    url: "https://arthurfranklin.com.br/libraryflow",
  },
  {
    name: "InfraTracker",
    tag: "Infraestrutura e Monitoramento",
    description:
      "Ferramenta para inventário e monitoramento de ativos, desenvolvida para facilitar a gestão e a observabilidade de ambientes de TI.",
    tech: [
      "Python",
      "FastAPI",
      "SQLite",
      "Zabbix API",
      "Grafana",
      "Git",
      "GitHub",
    ],
    icon: Activity,
    url: "https://arthurfranklin.com.br/infratracker",
  },
];
