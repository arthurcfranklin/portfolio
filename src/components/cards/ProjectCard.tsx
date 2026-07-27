import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectItem } from "@/types/content";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-pro card-pro-hover p-7 flex flex-col group cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
          <project.icon className="h-5 w-5 text-accent" />
        </span>

        <span className="chip">{project.tag}</span>
      </div>

      <h3 className="mt-6 text-2xl font-bold tracking-tight">
        {project.name}
      </h3>

      <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((technology) => (
          <span key={technology} className="chip">
            {technology}
          </span>
        ))}
      </div>

      <span className="mt-7 inline-flex items-center justify-center gap-2 h-11 rounded-lg border border-accent/30 bg-accent/5 text-accent text-sm font-medium group-hover:bg-accent/15 transition-colors">
        <Github className="h-4 w-4" />
        Ver Projeto
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}
