import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="section-pad min-h-[calc(100vh-4rem)] flex items-center scroll-mt-16"
    >
      <div className="container-pro w-full">
        <div className="max-w-2xl">
          <SectionLabel>Áreas de Atuação</SectionLabel>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
            Principais áreas de{" "}
            <span className="text-violet-gradient">atuação</span>.
          </h2>

          <p className="mt-5 text-muted-foreground text-lg">
            Soluções aplicadas para manter ambientes de tecnologia organizados,
            estáveis e funcionais.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
