import { createContext } from "react";

import type { ResolvedTheme, SupportedLocale, ThemePreference } from "@/types/preferences";

export type PreferencesContextValue = {
  language: SupportedLocale;
  setLanguage: (locale: SupportedLocale) => void;
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
  resolvedTheme: ResolvedTheme;
  isHydrated: boolean;
};

export const PreferencesContext = createContext<PreferencesContextValue | undefined>(undefined);
