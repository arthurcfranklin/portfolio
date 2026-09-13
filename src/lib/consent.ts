import type {
  ConsentPreferences,
  ConsentState,
} from "@/types/consent";

const CONSENT_STORAGE_KEY = "portfolio-cookie-consent";
const CONSENT_VERSION = 1;

export const defaultConsentPreferences: ConsentPreferences = {
  necessary: true,
  analytics: false,
};

export function createConsentState(
  preferences: ConsentPreferences,
): ConsentState {
  return {
    version: CONSENT_VERSION,
    preferences: {
      necessary: true,
      analytics: preferences.analytics,
    },
    updatedAt: new Date().toISOString(),
  };
}

export function readConsentState(): ConsentState | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedValue = window.localStorage.getItem(
      CONSENT_STORAGE_KEY,
    );

    if (!storedValue) {
      return null;
    }

    const parsed = JSON.parse(storedValue) as Partial<ConsentState>;

    if (
      parsed.version !== CONSENT_VERSION ||
      !parsed.preferences ||
      typeof parsed.preferences.analytics !== "boolean"
    ) {
      return null;
    }

    return {
      version: CONSENT_VERSION,
      preferences: {
        necessary: true,
        analytics: parsed.preferences.analytics,
      },
      updatedAt:
        typeof parsed.updatedAt === "string"
          ? parsed.updatedAt
          : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function writeConsentState(
  preferences: ConsentPreferences,
): ConsentState {
  const state = createConsentState(preferences);

  window.localStorage.setItem(
    CONSENT_STORAGE_KEY,
    JSON.stringify(state),
  );

  return state;
}

export function clearConsentState(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
}