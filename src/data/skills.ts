import { Activity, ServerCog, Workflow } from "lucide-react";

import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: "Infraestrutura & Suporte",
    icon: ServerCog,
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
  {
    title: "Monitoramento & Operações",
    icon: Activity,
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
  {
    title: "Desenvolvimento & Automação",
    icon: Workflow,
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
];
