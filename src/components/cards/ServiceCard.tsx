import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="card-pro card-pro-hover p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
        <Icon className="h-5 w-5 text-accent" />
      </span>

      <h3 className="mt-6 text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
