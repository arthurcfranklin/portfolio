import { Moon, Sun } from "lucide-react";
import { useCallback } from "react";

import { usePreferences } from "@/hooks/usePreferences";
import type { ThemePreference } from "@/types/preferences";

export function ThemeToggle() {
  const { resolvedTheme, setTheme, isHydrated } = usePreferences();

  const isDarkTheme = resolvedTheme === "dark";
  const nextTheme: ThemePreference = isDarkTheme ? "light" : "dark";

  const handleThemeChange = useCallback(() => {
    setTheme(nextTheme);
  }, [nextTheme, setTheme]);

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      disabled={!isHydrated}
      aria-label={isDarkTheme ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDarkTheme ? "Ativar tema claro" : "Ativar tema escuro"}
      className="inline-flex h-9 w-10 shrink-0 items-center justify-center
      rounded-md border border-white/10 bg-white/5
      text-foreground transition-colors hover:border-accent/40
      hover:bg-accent/10 hover:text-accent
      disabled:cursor-not-allowed
      disabled:opacity-60"
    >
      {isDarkTheme ? (
        <Sun aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={2} />
      ) : (
        <Moon aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={2} />
      )}
    </button>
  );
}
