import { enUS } from "./en-US";
import { esES } from "./es-ES";
import { ptBR } from "./pt-BR";
import { frFR } from "./fr-FR";

import type { PortfolioLocale } from "@/types/locale";
import type { SupportedLocale } from "@/types/preferences";

export const locales: Record<SupportedLocale, PortfolioLocale> = {
  "pt-BR": ptBR,
  "en-US": enUS,
  "es-ES": esES,
  "fr-FR": frFR,
};

export function getLocale(language: SupportedLocale): PortfolioLocale {
  return locales[language];
}
