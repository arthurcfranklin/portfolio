import { Activity, BookOpen, FileText } from "lucide-react";

import type { ProjectModel } from "@/types/models";

export const projects: ProjectModel[] = [
  {
    id: "forgedocs",
    tech: ["Python", "CustomTkinter", "Git", "GitHub"],
    icon: FileText,
    url: "https://arthurfranklin.com.br/forgedocs",
  },
  {
    id: "libraryflow",
    tech: ["Python", "FastAPI", "SQLite", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
    icon: BookOpen,
    url: "https://arthurfranklin.com.br/libraryflow",
  },
  {
    id: "infratracker",
    tech: ["Python", "FastAPI", "SQLite", "Zabbix API", "Grafana", "Git", "GitHub"],
    icon: Activity,
    url: "https://arthurfranklin.com.br/infratracker",
  },
];
