import { BookOpen, FileText, LayoutDashboard } from "lucide-react";

import type { ProjectModel } from "@/types/models";

export const projects: ProjectModel[] = [
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
  {
    id: "atlas",
    tech: ["React", "TypeScript", "TanStack", "Tailwind CSS", "Motion", "Git", "GitHub"],
    icon: LayoutDashboard,
    url: "/atlas",
  },
];
