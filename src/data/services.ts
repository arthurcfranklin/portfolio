import { Cpu, MonitorCog, Network, Radar, TerminalSquare, Wrench } from "lucide-react";

import type { ServiceModel } from "@/types/models";

export const services: ServiceModel[] = [
  {
    id: "technical-support",
    icon: Wrench,
  },
  {
    id: "infrastructure",
    icon: Network,
  },
  {
    id: "operating-systems",
    icon: MonitorCog,
  },
  {
    id: "monitoring",
    icon: Radar,
  },
  {
    id: "automation",
    icon: TerminalSquare,
  },
  {
    id: "asset-management",
    icon: Cpu,
  },
];
