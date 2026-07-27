import { Cpu, MonitorCog, Network, Radar, TerminalSquare, Wrench } from "lucide-react";

import type { ServiceItem } from "@/types/content";

export const services: ServiceItem[] = [
  {
    title: "Suporte Técnico",
    desc: "Atendimento e resolução de incidentes, garantindo continuidade e eficiência na operação dos usuários.",
    icon: Wrench,
  },
  {
    title: "Infraestrutura",
    desc: "Implantação, organização e manutenção de ambientes de tecnologia com foco em padronização e confiabilidade.",
    icon: Network,
  },
  {
    title: "Sistemas Operacionais",
    desc: "Instalação, configuração e suporte a ambientes Windows e Linux para diferentes cenários de uso.",
    icon: MonitorCog,
  },
  {
    title: "Monitoramento",
    desc: "Acompanhamento contínuo de ativos e serviços, antecipando falhas e apoiando decisões operacionais.",
    icon: Radar,
  },
  {
    title: "Automação",
    desc: "Desenvolvimento de ferramentas e processos que reduzem tarefas repetitivas e aumentam a produtividade.",
    icon: TerminalSquare,
  },
  {
    title: "Gestão de Ativos de TI",
    desc: "Controle do ciclo de vida dos equipamentos, inventário, documentação e padronização dos ativos.",
    icon: Cpu,
  },
];
