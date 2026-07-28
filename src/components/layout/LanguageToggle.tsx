import { useCallback } from "react";

import { usePreferences } from "@/hooks/usePreferences";
import {
  localeCodes,
  localeNames,
  supportedLocales,
  type SupportedLocale,
} from "@/types/preferences";

function getNextLocale(currentLocale: SupportedLocale): SupportedLocale {
  const currentIndex = supportedLocales.indexOf(currentLocale);
  const nextIndex = (currentIndex + 1) % supportedLocales.length;

  return supportedLocales[nextIndex];
}

export function LanguageToggle() {
  const { language, setLanguage, isHydrated } = usePreferences();

  const handleLanguageChange = useCallback(() => {
    setLanguage(getNextLocale(language));
  }, [language, setLanguage]);

  const nextLocale = getNextLocale(language);

  return (
    <button
      type="button"
      onClick={handleLanguageChange}
      disabled={!isHydrated}
      aria-label={`Alterar idioma para ${localeNames[nextLocale]}`}
      title={`Alterar idioma para ${localeNames[nextLocale]}`}
      className="header-control min-w-10 px-2.5 text-xs font-semibold"
    >
      {localeCodes[language]}
    </button>
  );
}
