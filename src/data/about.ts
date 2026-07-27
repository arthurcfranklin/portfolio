import { BookOpen, Briefcase, FolderGit2, MonitorCog, Trophy } from "lucide-react";

import type { StatItem, TimelineItem } from "@/types/content";

export const timeline: TimelineItem[] = [
  {
    years: "2025 — 2027",
    title: "Graduação em Análise e Desenvolvimento de Sistemas",
    subtitle: "Universidade Estácio de Sá",
    desc: "Formação superior com foco em desenvolvimento de software, bancos de dados, algoritmos e engenharia de software.",
    icon: BookOpen,
  },
  {
    years: "2024 — 2025",
    title: "Curso Técnico em Desenvolvimento de Sistemas",
    subtitle: "Firjan SENAI",
    note: "Formação não concluída em ago/2025, próxima à conclusão.",
    desc: "Formação técnica com foco em lógica de programação, desenvolvimento de sistemas, bancos de dados e gestão de projetos de software.",
    icon: MonitorCog,
  },
];

export const stats: StatItem[] = [
  { k: "2+", v: "Anos em Tecnologia", icon: Briefcase },
  { k: "10+", v: "Projetos", icon: FolderGit2 },
  { k: "25+", v: "Certificações", icon: Trophy },
];
