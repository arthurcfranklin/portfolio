import {
  Clock3,
  Construction,
  FileQuestion,
  LockKeyhole,
  ServerCrash,
  ShieldX,
  TriangleAlert,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

export type SystemPageId =
  | "401"
  | "403"
  | "404"
  | "500"
  | "502"
  | "503"
  | "504"
  | "maintenance";

export type SystemPageVariant =
  | "auth"
  | "forbidden"
  | "not-found"
  | "server"
  | "maintenance";

export interface SystemPageConfig {
  code: string;
  displayCode?: string;
  eyebrow: string;
  statusLabel: string;
  title: string;
  description: string;
  variant: SystemPageVariant;
  icon: LucideIcon;
}

export const systemPages: Record<SystemPageId, SystemPageConfig> = {
  "401": {
    code: "Erro 401",
    eyebrow: "Erro 401 - Não Autorizado",
    statusLabel: "Autenticação necessária",
    title: "Autenticação necessária",
    description:
      "Você precisa estar autenticado para acessar este conteúdo.",
    variant: "auth",
    icon: LockKeyhole,
  },

  "403": {
    code: "Erro 403",
    eyebrow: "Erro 403 - Acesso negado",
    statusLabel: "Acesso restrito",
    title: "Você não pode\nacessar esta página",
    description:
      "O acesso a este conteúdo não está disponível com as permissões atuais.",
    variant: "forbidden",
    icon: ShieldX,
  },

  "404": {
    code: "Erro 404",
    eyebrow: "Erro 404 - Página não encontrada",
    statusLabel: "Página indisponível",
    title: "Esse caminho não leva a lugar nenhum",
    description:
      "A página pode ter sido removida, renomeada ou o endereço informado não existe.",
    variant: "not-found",
    icon: FileQuestion,
  },

  "500": {
    code: "Erro 500",
    eyebrow: "Erro 500 - Erro interno",
    statusLabel: "Erro interno",
    title: "Algo não saiu como esperado",
    description:
      "Ocorreu um erro inesperado ao processar esta solicitação.",
    variant: "server",
    icon: ServerCrash,
  },

  "502": {
    code: "Erro 502",
    eyebrow: "Erro 502 - Resposta inválida",
    statusLabel: "Falha de comunicação",
    title: "Não conseguimos\ncompletar a solicitação",
    description:
      "Um serviço necessário respondeu de forma inesperada.",
    variant: "server",
    icon: WifiOff,
  },

  "503": {
    code: "Erro 503",
    eyebrow: "Erro 503 - Serviço indisponível",
    statusLabel: "Serviço indisponível",
    title: "Esta página está temporariamente indisponível",
    description:
      "O serviço não pode responder neste momento.",
    variant: "server",
    icon: TriangleAlert,
  },

  "504": {
    code: "Erro 504",
    eyebrow: "Erro 504 - Tempo limite excedido",
    statusLabel: "Tempo limite excedido",
    title: "A resposta demorou\nmais que o esperado",
    description:
      "Um serviço necessário não respondeu a tempo.",
    variant: "server",
    icon: Clock3,
  },

  maintenance: {
    code: "maintenance",
    displayCode: "Em Manutenção",
    eyebrow: "Manutenção programada",
    statusLabel: "Sistema em manutenção",
    title: "Estamos realizando\nalguns ajustes",
    description:
      "O portfólio está temporariamente indisponível enquanto realizamos uma manutenção. Voltaremos em breve.",
    variant: "maintenance",
    icon: Construction,
  },
};
