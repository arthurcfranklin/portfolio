import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";

import { PreferencesContext, type PreferencesContextValue } from "@/context/preferences-context";
import {
  applyDocumentPreferences,
  getStoredLanguage,
  getStoredTheme,
  resolveTheme,
  setStoredLanguage,
  setStoredTheme,
} from "@/lib/preferences";
import {
  defaultLocale,
  defaultTheme,
  type ResolvedTheme,
  type SupportedLocale,
  type ThemePreference,
} from "@/types/preferences";

type PreferencesProviderProps = {
  children: ReactNode;
};

export function PreferencesProvider({ children }: PreferencesProviderProps) {
  const [language, setLanguageState] = useState<SupportedLocale>(defaultLocale);
  const [theme, setThemeState] = useState<ThemePreference>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedLanguage = getStoredLanguage();
    const storedTheme = getStoredTheme();
    const initialResolvedTheme = resolveTheme(storedTheme);

    setLanguageState(storedLanguage);
    setThemeState(storedTheme);
    setResolvedTheme(initialResolvedTheme);

    applyDocumentPreferences(storedLanguage, initialResolvedTheme);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || theme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      const nextResolvedTheme: ResolvedTheme = mediaQuery.matches ? "dark" : "light";

      setResolvedTheme(nextResolvedTheme);
      applyDocumentPreferences(language, nextResolvedTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [isHydrated, language, theme]);

  const setLanguage = useCallback(
    (locale: SupportedLocale) => {
      setLanguageState(locale);
      setStoredLanguage(locale);
      applyDocumentPreferences(locale, resolvedTheme);
    },
    [resolvedTheme],
  );

  const setTheme = useCallback(
    (preference: ThemePreference) => {
      const nextResolvedTheme = resolveTheme(preference);

      setThemeState(preference);
      setResolvedTheme(nextResolvedTheme);
      setStoredTheme(preference);

      applyDocumentPreferences(language, nextResolvedTheme);
    },
    [language],
  );

  const value = useMemo<PreferencesContextValue>(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      resolvedTheme,
      isHydrated,
    }),
    [isHydrated, language, resolvedTheme, setLanguage, setTheme, theme],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
