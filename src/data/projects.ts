import { BookOpen, FileText, TicketCheck } from "lucide-react";

import type { ProjectModel } from "@/types/models";

export const projects: ProjectModel[] = [
  {
    id: "deskly",
    tech: ["React", "TypeScript"],
    icon: TicketCheck,
    url: "/deskly",
  },
  {
    id: "forgedocs",
    tech: ["Python", "CustomTkinter", "Git", "GitHub"],
    icon: FileText,
    url: "/forgedocs",
  },
  {
    id: "libraryflow",
    tech: ["Python", "FastAPI", "SQLite", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
    icon: BookOpen,
    url: "/libraryflow",
  },
];
