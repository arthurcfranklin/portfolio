import { BookOpen, Briefcase, FolderGit2, MonitorCog, Trophy } from "lucide-react";

import type { StatModel, TimelineModel } from "@/types/models";

export const timeline: TimelineModel[] = [
  {
    id: "ads-degree",
    icon: BookOpen,
  },
  {
    id: "systems-development-course",
    icon: MonitorCog,
  },
];

export const stats: StatModel[] = [
  {
    id: "experience",
    value: "2+",
    icon: Briefcase,
  },
  {
    id: "projects",
    value: "10+",
    icon: FolderGit2,
  },
  {
    id: "certifications",
    value: "25+",
    icon: Trophy,
  },
];
