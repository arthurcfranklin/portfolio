import { Github } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { projects } from "@/data/projects";
import { useLocale } from "@/hooks/useLocale";

export function ProjectsSection() {
  const locale = useLocale();

  return (
    <section
      id="projetos"
      className="section-pad flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center"
    >
      <div className="container-pro w-full">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>{locale.projects.sectionLabel}</SectionLabel>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              {locale.projects.headingPrefix}
              <span className="text-violet-gradient">{locale.projects.headingHighlight}</span>
              {locale.projects.headingSuffix}
            </h2>
          </div>

          <a
            href="https://arthurfranklin.com.br/github"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github className="h-4 w-4" />
            {locale.projects.viewAllButton}
          </a>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => {
            const localeProject = locale.projects.items[project.id];

            return (
              <ProjectCard
                key={project.id}
                name={localeProject.name}
                tag={localeProject.tag}
                description={localeProject.description}
                tech={project.tech}
                icon={project.icon}
                url={project.url}
                actionLabel={locale.projects.viewProjectButton}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
