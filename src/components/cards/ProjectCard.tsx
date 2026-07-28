import { ArrowUpRight, Github } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ProjectCardProps = {
  name: string;
  tag: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  url: string;
  actionLabel: string;
};

export function ProjectCard({
  name,
  tag,
  description,
  tech,
  icon: Icon,
  url,
  actionLabel,
}: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-pro card-pro-hover group flex cursor-pointer flex-col p-7"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
          <Icon className="h-5 w-5 text-accent" />
        </span>

        <span className="chip">{tag}</span>
      </div>

      <h3 className="mt-6 text-2xl font-bold tracking-tight">{name}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((technology) => (
          <span key={technology} className="chip">
            {technology}
          </span>
        ))}
      </div>

      <span className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent/5 text-sm font-medium text-accent transition-colors group-hover:bg-accent/15">
        <Github className="h-4 w-4" />
        {actionLabel}
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}
