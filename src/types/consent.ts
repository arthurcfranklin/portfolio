export type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
};

export type ConsentState = {
  version: number;
  preferences: ConsentPreferences;
  updatedAt: string;
};