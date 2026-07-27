import type { ServiceItem } from "@/types/content";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card-pro card-pro-hover p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
        <service.icon className="h-5 w-5 text-accent" />
      </span>

      <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>

      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
    </div>
  );
}
