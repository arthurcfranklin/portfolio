import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalSection } from "@/components/legal/LegalSection";
import { LegalTableOfContents } from "@/components/legal/LegalTableOfContents";
import type { LegalPageLocale } from "@/types/locale";

interface LegalPageLayoutProps {
  content: LegalPageLocale;
}

function createSectionId(index: number) {
  return `section-${String(index + 1).padStart(2, "0")}`;
}

export function LegalPageLayout({ content }: LegalPageLayoutProps) {
  const tableOfContents = content.sections.map((section, index) => ({
    id: createSectionId(index),
    number: String(index + 1).padStart(2, "0"),
    title: section.title,
  }));

  return (
    <div className="min-h-screen bg-page text-foreground">
      <Header />

      <main>
        <section>
          <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-24">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {content.eyebrow}
            </p>

            <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-20">
              <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {content.title}
              </h1>

              <p className="text-sm leading-6 text-muted-foreground">
                {content.lastUpdatedLabel}: {content.lastUpdated}
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
            <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-20">
              <div className="min-w-0">
                <div className="max-w-3xl space-y-4 text-base leading-8 text-muted-foreground">
                  {content.introduction.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-12 space-y-10">
                  {content.sections.map((section, index) => {
                    const id = createSectionId(index);
                    const number = String(index + 1).padStart(2, "0");

                    return (
                      <LegalSection
                        key={section.title}
                        id={id}
                        number={number}
                        title={section.title}
                      >
                        {section.paragraphs?.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}

                        {section.items ? (
                          <ul className="list-disc space-y-2 pl-5">
                            {section.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                      </LegalSection>
                    );
                  })}
                </div>
              </div>

              <aside className="hidden self-stretch lg:block">
                <LegalTableOfContents
                  items={tableOfContents}
                  label={content.tableOfContentsLabel}
                />
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
