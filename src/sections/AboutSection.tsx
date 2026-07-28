import { GraduationCap } from "lucide-react";

import { StatCard } from "@/components/cards/StatCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { stats, timeline } from "@/data/about";
import { useLocale } from "@/hooks/useLocale";

export function AboutSection() {
  const locale = useLocale();

  return (
    <section
      id="sobre"
      className="section-pad flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center"
    >
      <div className="container-pro w-full">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>{locale.about.sectionLabel}</SectionLabel>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              {locale.about.headingPrefix}
              <span className="text-violet-gradient">{locale.about.headingHighlight}</span>
              {locale.about.headingSuffix}
            </h2>

            <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {locale.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => {
                const localeStat = locale.about.stats[stat.id];

                return (
                  <StatCard
                    key={stat.id}
                    value={stat.value}
                    label={localeStat.value}
                    icon={stat.icon}
                  />
                );
              })}
            </div>
          </div>

          <div className="card-pro p-7 md:p-9">
            <div className="mb-8 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                <GraduationCap className="h-5 w-5 text-accent" />
              </span>

              <h3 className="text-xl font-semibold">{locale.about.academicTimelineTitle}</h3>
            </div>

            <div className="relative">
              <div className="absolute bottom-6 left-4 top-3 w-px bg-border" />

              <ol className="space-y-8 pl-14">
                {timeline.map((item) => {
                  const localeItem = locale.about.timeline[item.id];

                  return (
                    <li key={item.id} className="relative">
                      <span className="absolute -left-[58px] top-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface ring-4 ring-background transition-colors">
                        <item.icon className="h-4 w-4 text-accent" />
                      </span>

                      <div className="font-mono text-xs uppercase tracking-widest text-accent">
                        {localeItem.years}
                      </div>

                      <h4 className="mt-2 text-base font-semibold leading-snug">
                        {localeItem.title}
                      </h4>

                      {localeItem.subtitle && (
                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                          {localeItem.subtitle}
                        </p>
                      )}

                      {localeItem.note && (
                        <p className="mt-1 text-xs italic leading-snug text-muted-foreground/80">
                          {localeItem.note}
                        </p>
                      )}

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {localeItem.description}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
