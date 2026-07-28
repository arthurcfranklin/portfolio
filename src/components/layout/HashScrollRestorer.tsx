import { useEffect } from "react";

import { usePreferences } from "@/hooks/usePreferences";

export function HashScrollRestorer() {
  const { isHydrated, language } = usePreferences();

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    const hash = window.location.hash;

    if (!hash) {
      return;
    }

    const sectionId = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    let cancelled = false;

    const restoreHashPosition = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      if (cancelled) {
        return;
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled) {
            return;
          }

          target.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        });
      });
    };

    void restoreHashPosition();

    return () => {
      cancelled = true;
    };
  }, [isHydrated, language]);

  return null;
}
