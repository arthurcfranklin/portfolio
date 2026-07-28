import { SkillCard } from "@/components/cards/SkillCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { skillGroups } from "@/data/skills";
import { useLocale } from "@/hooks/useLocale";

export function SkillsSection() {
  const locale = useLocale();

  return (
    <section
      id="habilidades"
      className="section-pad flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center"
    >
      <div className="container-pro w-full">
        <div className="max-w-2xl">
          <SectionLabel>{locale.skills.sectionLabel}</SectionLabel>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            {locale.skills.headingPrefix}
            <span className="text-violet-gradient">{locale.skills.headingHighlight}</span>
            {locale.skills.headingSuffix}
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">{locale.skills.description}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const localeGroup = locale.skills.groups[group.id];

            return (
              <SkillCard
                key={group.id}
                title={localeGroup.title}
                items={localeGroup.items}
                icon={group.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
