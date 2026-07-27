import { getLocale } from "@/data/locales";
import { usePreferences } from "@/hooks/usePreferences";

export function useLocale() {
  const { language } = usePreferences();

  return getLocale(language);
}
