export const supportedLocales = ["pt-BR", "en-US", "es-ES", "fr-FR"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export type LocaleCode = "PT" | "EN" | "ES" | "FR";

export const defaultLocale: SupportedLocale = "pt-BR";

export const localeCodes: Record<SupportedLocale, LocaleCode> = {
  "pt-BR": "PT",
  "en-US": "EN",
  "es-ES": "ES",
  "fr-FR": "FR",
};

export const localeNames: Record<SupportedLocale, string> = {
  "pt-BR": "Português",
  "en-US": "English",
  "es-ES": "Español",
  "fr-FR": "Français",
};

export type ThemePreference = "light" | "dark" | "system";

export type ResolvedTheme = "light" | "dark";

export const defaultTheme: ThemePreference = "system";
