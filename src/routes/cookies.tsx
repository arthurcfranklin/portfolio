import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { useLocale } from "@/hooks/useLocale";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
});

function CookiesPage() {
  const locale = useLocale();

  return <LegalPageLayout content={locale.cookies} />;
}
