import { Github } from "lucide-react";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="section-pad min-h-[calc(100vh-4rem)] flex items-center scroll-mt-16"
    >
      <div className="container-pro w-full">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Projetos em Destaque</SectionLabel>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
              Soluções reais para <span className="text-violet-gradient">problemas reais</span>.
            </h2>
          </div>

          <a
            href="https://arthurfranklin.com.br/github"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github className="h-4 w-4" />
            Ver todos os projetos
          </a>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
