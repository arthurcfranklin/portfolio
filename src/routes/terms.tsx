import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { useLocale } from "@/hooks/useLocale";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  const locale = useLocale();

  return <LegalPageLayout content={locale.terms} />;
}
