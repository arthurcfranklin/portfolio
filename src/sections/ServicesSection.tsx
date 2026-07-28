import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { services } from "@/data/services";
import { useLocale } from "@/hooks/useLocale";

export function ServicesSection() {
  const locale = useLocale();

  return (
    <section
      id="servicos"
      className="section-pad flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center"
    >
      <div className="container-pro w-full">
        <div className="max-w-2xl">
          <SectionLabel>{locale.services.sectionLabel}</SectionLabel>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            {locale.services.headingPrefix}
            <span className="text-violet-gradient">{locale.services.headingHighlight}</span>
            {locale.services.headingSuffix}
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">{locale.services.description}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const localeService = locale.services.items[service.id];

            return (
              <ServiceCard
                key={service.id}
                title={localeService.title}
                description={localeService.description}
                icon={service.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
