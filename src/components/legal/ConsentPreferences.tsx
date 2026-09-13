import {
  BarChart3,
  Check,
  Lock,
  X,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import { useConsent } from "@/context/ConsentContext";
import { useLocale } from "@/hooks/useLocale";

export function ConsentPreferences() {
  const locale = useLocale();
  const consent = locale.consent.preferences;

  const {
    preferences,
    isPreferencesOpen,
    closePreferences,
    savePreferences,
  } = useConsent();

  const [analytics, setAnalytics] =
    useState(false);

  useEffect(() => {
    if (isPreferencesOpen) {
      setAnalytics(preferences.analytics);
    }
  }, [
    isPreferencesOpen,
    preferences.analytics,
  ]);

  useEffect(() => {
    if (!isPreferencesOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        closePreferences();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    isPreferencesOpen,
    closePreferences,
  ]);

  if (!isPreferencesOpen) {
    return null;
  }

  function handleSave() {
    savePreferences({
      necessary: true,
      analytics,
    });
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePreferences();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-preferences-title"
        aria-describedby="consent-preferences-description"
        className="w-full max-w-lg rounded-2xl border border-border bg-card p-5 shadow-2xl md:p-6"
      >
        <header className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="consent-preferences-title"
              className="text-lg font-semibold tracking-tight"
            >
              {consent.title}
            </h2>

            <p
              id="consent-preferences-description"
              className="mt-1.5 text-sm leading-6 text-muted-foreground"
            >
              {consent.descriptionLines.map((line) => (
                <span
                  key={line}
                  className="block"
                >
                  {line}
                </span>
              ))}
            </p>
          </div>

          <button
            type="button"
            onClick={closePreferences}
            aria-label={consent.closeLabel}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X
              aria-hidden="true"
              className="size-4"
            />
          </button>
        </header>

        <div className="mt-6 space-y-3">
          <div className="rounded-xl border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Lock
                  aria-hidden="true"
                  className="size-4"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold">
                    {consent.necessary.title}
                  </h3>

                  <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Check
                      aria-hidden="true"
                      className="size-3.5"
                    />

                    {consent.necessary.status}
                  </span>
                </div>

                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  {consent.necessary.descriptionLines.map((line) => (
                    <span
                      key={line}
                      className="block"
                    >
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border p-4">
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <BarChart3
                  aria-hidden="true"
                  className="size-4"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold">
                      {consent.analytics.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      {consent.analytics.descriptionLines.map((line) => (
                        <span
                          key={line}
                          className="block"
                        >
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={analytics}
                    aria-label={
                      consent.analytics.switchLabel
                    }
                    onClick={() => {
                      setAnalytics(
                        (current) => !current,
                      );
                    }}
                    className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      analytics
                        ? "border-foreground bg-foreground"
                        : "border-border bg-muted"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full transition-transform ${
                        analytics
                          ? "translate-x-5 bg-background"
                          : "translate-x-0 bg-foreground"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={closePreferences}
            className="btn-secondary !h-9 !px-4 !text-sm"
          >
            {consent.cancel}
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="btn-primary !h-9 !px-4 !text-sm"
          >
            {consent.save}
          </button>
        </div>
      </section>
    </div>
  );
}