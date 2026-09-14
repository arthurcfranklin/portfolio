import { Cookie } from "lucide-react";

import { useConsent } from "@/context/ConsentContext";
import { useLocale } from "@/hooks/useLocale";

export function ConsentBanner() {
  const locale = useLocale();
  const consent = locale.consent.banner;

  const { hasConsentChoice, isHydrated, acceptAll, rejectNonEssential, openPreferences } =
    useConsent();

  if (!isHydrated || hasConsentChoice) {
    return null;
  }

  return (
    <aside
      aria-label={consent.ariaLabel}
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-[915px] rounded-2xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-muted">
            <Cookie aria-hidden="true" className="size-4" />
          </div>

          <div className="min-w-0">
            <h2 className="text-sm font-semibold tracking-tight">{consent.title}</h2>

            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              <span className="md:block md:whitespace-nowrap">{consent.descriptionLine1}</span>

              <span className="md:block md:whitespace-nowrap">{consent.descriptionLine2}</span>
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2">
          <button type="button" onClick={acceptAll} className="btn-primary !h-9 !px-4 !text-sm">
            {consent.accept}
          </button>

          <button
            type="button"
            onClick={rejectNonEssential}
            className="btn-secondary !h-9 !px-4 !text-sm"
          >
            {consent.reject}
          </button>

          <button
            type="button"
            onClick={openPreferences}
            className="btn-secondary !h-9 !px-4 !text-sm"
          >
            {consent.customize}
          </button>
        </div>
      </div>
    </aside>
  );
}
