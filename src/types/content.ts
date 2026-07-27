import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type TimelineItem = {
  years: string;
  title: string;
  subtitle?: string;
  note?: string;
  desc: string;
  icon: LucideIcon;
};

export type StatItem = {
  k: string;
  v: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type ProjectItem = {
  name: string;
  tag: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  url: string;
};

export type ServiceItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export type ContactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  action: string;
};
