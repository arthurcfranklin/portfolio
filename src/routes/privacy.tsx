import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalSection } from "@/components/legal/LegalSection";
import { useLocale } from "@/hooks/useLocale";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const locale = useLocale();
  const privacy = locale.privacy;

  return (
    <>
      <Header />

      <main className="min-h-screen">
        <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
          <header className="mb-12">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              {privacy.eyebrow}
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              {privacy.title}
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              {privacy.lastUpdatedLabel}:{" "}
              {privacy.lastUpdated}
            </p>
          </header>

          <div className="space-y-10">
            <div className="space-y-4 leading-7 text-muted-foreground">
              {privacy.introduction.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            {privacy.sections.map(
              (section, index) => (
                <LegalSection
                  key={section.title}
                  number={String(
                    index + 1,
                  ).padStart(2, "0")}
                  title={section.title}
                >
                  {section.paragraphs?.map(
                    (paragraph) => (
                      <p key={paragraph}>
                        {paragraph}
                      </p>
                    ),
                  )}

                  {section.items ? (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.items.map(
                        (item) => (
                          <li key={item}>
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  ) : null}
                </LegalSection>
              ),
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
