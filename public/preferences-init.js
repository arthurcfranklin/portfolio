(() => {
  const root = document.documentElement;

  try {
    const supportedLocales = [
      "pt-BR",
      "en-US",
      "es-ES",
      "fr-FR",
    ];

    const supportedThemes = [
      "light",
      "dark",
      "system",
    ];

    const storedLanguage = window.localStorage.getItem(
      "portfolio-language",
    );

    const storedTheme = window.localStorage.getItem(
      "portfolio-theme",
    );

    const defaultLocale =
      root.dataset.defaultLocale || "pt-BR";

    const defaultTheme =
      root.dataset.defaultTheme || "dark";

    const language = supportedLocales.includes(
      storedLanguage,
    )
      ? storedLanguage
      : defaultLocale;

    const themePreference = supportedThemes.includes(
      storedTheme,
    )
      ? storedTheme
      : defaultTheme;

    const resolvedTheme =
      themePreference === "system"
        ? window.matchMedia(
            "(prefers-color-scheme: dark)",
          ).matches
          ? "dark"
          : "light"
        : themePreference;

    root.lang = language;

    root.classList.toggle(
      "dark",
      resolvedTheme === "dark",
    );

    root.dataset.theme = resolvedTheme;
  } catch {
    // Mantém os valores padrão definidos no HTML.
  }
})();