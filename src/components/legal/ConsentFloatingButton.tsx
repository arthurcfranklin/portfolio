import { Cookie } from "lucide-react";

import { useConsent } from "@/context/ConsentContext";
import { useLocale } from "@/hooks/useLocale";

export function ConsentFloatingButton() {
  const locale = useLocale();

  const { isHydrated, isPreferencesOpen, openPreferences } = useConsent();

  if (!isHydrated || isPreferencesOpen) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={openPreferences}
      aria-label={locale.footer.cookiePreferences}
      title={locale.footer.cookiePreferences}
      className="fixed bottom-5 right-5 z-40 flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Cookie aria-hidden="true" className="size-4" />
    </button>
  );
}
