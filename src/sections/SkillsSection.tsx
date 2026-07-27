import { SkillCard } from "@/components/cards/SkillCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="section-pad min-h-[calc(100vh-4rem)] flex items-center scroll-mt-16"
    >
      <div className="container-pro w-full">
        <div className="max-w-2xl">
          <SectionLabel>Competências Técnicas</SectionLabel>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
            Ferramentas, tecnologias e <span className="text-violet-gradient">conhecimentos</span>{" "}
            aplicados no dia a dia.
          </h2>

          <p className="mt-5 text-muted-foreground text-lg">
            Utilizo um conjunto de tecnologias, plataformas e práticas voltadas à infraestrutura,
            monitoramento, virtualização e automação, priorizando confiabilidade, observabilidade e
            eficiência operacional.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div key={group.title} className="card-pro card-pro-hover p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <group.icon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
