import { GraduationCap } from "lucide-react";

import { SectionLabel } from "@/components/shared/SectionLabel";
import { StatCard } from "@/components/cards/StatCard";
import { stats, timeline } from "@/data/about";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="section-pad min-h-[calc(100vh-4rem)] flex items-center scroll-mt-16"
    >
      <div className="container-pro w-full">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionLabel>Sobre Mim</SectionLabel>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
              Entusiasta por <span className="text-violet-gradient">tecnologia</span> e
              infraestrutura.
            </h2>

            <div className="mt-7 space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Minha trajetória em Tecnologia da Informação foi construída pela curiosidade e pela
                vontade de entender como a tecnologia resolve problemas reais. Foi assim que
                encontrei no suporte técnico e na infraestrutura um ambiente de aprendizado e
                evolução contínua.
              </p>
              <p>
                Hoje atuo na operação de ambientes de tecnologia e transformo desafios do dia a dia
                em oportunidades para criar ferramentas, automações e processos mais eficientes.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <StatCard key={stat.v} stat={stat} />
              ))}
            </div>
          </div>

          <div className="card-pro p-7 md:p-9">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                <GraduationCap className="h-5 w-5 text-accent" />
              </span>
              <h3 className="text-xl font-semibold">Timeline Acadêmica</h3>
            </div>

            <ol className="relative border-l border-white/10 pl-8 space-y-9">
              {timeline.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[44px] top-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-black ring-4 ring-accent/10">
                    <item.icon className="h-4 w-4 text-accent" />
                  </span>

                  <div className="text-xs font-mono uppercase tracking-widest text-accent">
                    {item.years}
                  </div>

                  <h4 className="mt-2 text-base font-semibold leading-snug">{item.title}</h4>

                  {item.subtitle && (
                    <p className="mt-1 text-sm text-muted-foreground font-medium">
                      {item.subtitle}
                    </p>
                  )}

                  {item.note && (
                    <p className="mt-1 text-xs text-muted-foreground/80 italic leading-snug">
                      {item.note}
                    </p>
                  )}

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
