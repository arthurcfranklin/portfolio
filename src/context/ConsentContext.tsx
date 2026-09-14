import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { defaultConsentPreferences, readConsentState, writeConsentState } from "@/lib/consent";
import type { ConsentPreferences, ConsentState } from "@/types/consent";

type ConsentContextValue = {
  consent: ConsentState | null;
  preferences: ConsentPreferences;
  hasConsentChoice: boolean;
  isHydrated: boolean;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (preferences: ConsentPreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  const [isHydrated, setIsHydrated] = useState(false);

  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    setConsent(readConsentState());
    setIsHydrated(true);
  }, []);

  const savePreferences = useCallback((preferences: ConsentPreferences) => {
    const state = writeConsentState(preferences);

    setConsent(state);
    setIsPreferencesOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    savePreferences({
      necessary: true,
      analytics: true,
    });
  }, [savePreferences]);

  const rejectNonEssential = useCallback(() => {
    savePreferences({
      necessary: true,
      analytics: false,
    });
  }, [savePreferences]);

  const openPreferences = useCallback(() => {
    setIsPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setIsPreferencesOpen(false);
  }, []);

  const preferences = consent?.preferences ?? defaultConsentPreferences;

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      preferences,
      hasConsentChoice: consent !== null,
      isHydrated,
      isPreferencesOpen,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      closePreferences,
    }),
    [
      consent,
      preferences,
      isHydrated,
      isPreferencesOpen,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      closePreferences,
    ],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }

  return context;
}
