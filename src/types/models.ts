import type { LucideIcon } from "lucide-react";

import type {
  ContactId,
  NavigationId,
  ProjectId,
  ServiceId,
  SkillGroupId,
  StatId,
  TimelineId,
} from "@/types/locale";

export type NavigationModel = {
  id: NavigationId;
  href: string;
};

export type TimelineModel = {
  id: TimelineId;
  icon: LucideIcon;
};

export type StatModel = {
  id: StatId;
  value: string;
  icon: LucideIcon;
};

export type SkillGroupModel = {
  id: SkillGroupId;
  icon: LucideIcon;
};

export type ProjectModel = {
  id: ProjectId;
  tech: string[];
  icon: LucideIcon;
  url: string;
};

export type ServiceModel = {
  id: ServiceId;
  icon: LucideIcon;
};

export type ContactModel = {
  id: ContactId;
  icon: LucideIcon;
  href: string | null;
};
