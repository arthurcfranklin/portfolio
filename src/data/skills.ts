import { Activity, ServerCog, Workflow } from "lucide-react";

import type { SkillGroupModel } from "@/types/models";

export const skillGroups: SkillGroupModel[] = [
  {
    id: "infrastructure",
    icon: ServerCog,
  },
  {
    id: "monitoring",
    icon: Activity,
  },
  {
    id: "development",
    icon: Workflow,
  },
];
