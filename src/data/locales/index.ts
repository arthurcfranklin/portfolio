import { ptBR } from "@/data/locales/pt-BR";
import type { PortfolioLocale } from "@/types/locale";
import type { SupportedLocale } from "@/types/preferences";

export const locales: Partial<Record<SupportedLocale, PortfolioLocale>> = {
  "pt-BR": ptBR,
};

export function getLocale(language: SupportedLocale): PortfolioLocale {
  return locales[language] ?? ptBR;
}

export { ptBR };
