import {
  defaultLocale,
  defaultTheme,
  supportedLocales,
  type ResolvedTheme,
  type SupportedLocale,
  type ThemePreference,
} from "@/types/preferences";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const THEME_STORAGE_KEY = "portfolio-theme";

const themePreferences: ThemePreference[] = ["light", "dark", "system"];

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function isSupportedLocale(value: unknown): value is SupportedLocale {
  return typeof value === "string" && supportedLocales.includes(value as SupportedLocale);
}

export function isThemePreference(value: unknown): value is ThemePreference {
  return typeof value === "string" && themePreferences.includes(value as ThemePreference);
}

export function getStoredLanguage(): SupportedLocale {
  if (!isBrowser()) {
    return defaultLocale;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  return isSupportedLocale(storedLanguage) ? storedLanguage : defaultLocale;
}

export function setStoredLanguage(locale: SupportedLocale): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
}

export function getStoredTheme(): ThemePreference {
  if (!isBrowser()) {
    return defaultTheme;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  return isThemePreference(storedTheme) ? storedTheme : defaultTheme;
}

export function setStoredTheme(theme: ThemePreference): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference === "light" || preference === "dark") {
    return preference;
  }

  if (!isBrowser()) {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyDocumentPreferences(locale: SupportedLocale, theme: ResolvedTheme): void {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = locale;
  document.documentElement.classList.toggle("dark", theme === "dark");

  document.documentElement.dataset.theme = theme;
}
