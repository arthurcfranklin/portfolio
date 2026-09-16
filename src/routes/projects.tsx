import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Reveal } from "@/components/motion/Reveal";
import { useLocale } from "@/hooks/useLocale";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projetos | Arthur Franklin" },
      {
        name: "description",
        content:
          "Projetos de software, infraestrutura e automação desenvolvidos por Arthur Franklin.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    id: "deskly",
    label: "Sistema de Chamados",
    href: "/deskly",
    tech: ["React", "TypeScript"],
  },
  {
    id: "forgedocs",
    label: "Suíte Desktop",
    href: "/forgedocs",
    tech: ["Python", "CustomTkinter"],
  },
  {
    id: "libraryflow",
    label: "Gestão de Bibliotecas",
    href: "/libraryflow",
    tech: ["Python", "FastAPI", "SQLAlchemy", "SQLite"],
  },
  {
    id: "atlas",
    label: "Workspace Pessoal",
    href: "/atlas",
    tech: ["React", "TypeScript", "TanStack", "Tailwind CSS"],
  },
] as const;

function ProjectsPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-page text-foreground">
      <Header />

      <main>
        <section>
          <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-24 sm:px-8 sm:pb-14 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-28">
            <Reveal>
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-violet-500"
                />
                <span>Projetos</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-20">
                <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  Ideias transformadas em{" "}
                  <span className="text-violet-gradient">sistemas.</span>
                </h1>

                <p className="max-w-xl text-base leading-8 text-muted-foreground lg:pb-1">
                  Uma seleção de projetos desenvolvidos para explorar software,
                  infraestrutura, automação e soluções para problemas reais.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-label="Projetos selecionados">
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
            <div className="space-y-5 sm:space-y-6">
              {projects.map((project) => {
                const content = locale.projects.items[project.id];

                return (
                  <ProjectCase
                      key={project.id}
                      id={project.id}
                      name={content.name}
                      description={content.description}
                      label={project.label}
                      tech={project.tech}
                      href={project.href}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

type ProjectCaseProps = {
  id: (typeof projects)[number]["id"];
  name: string;
  description: string;
  label: string;
  tech: readonly string[];
  href: string;
};

function ProjectCase({
  id,
  name,
  description,
  label,
  tech,
  href,
}: ProjectCaseProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-foreground/[0.015]">
      <div className="grid min-h-[340px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-violet-500"
              />
              <span>{label}</span>
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              {name}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {description}
            </p>

            <ul
              aria-label={`Tecnologias utilizadas em ${name}`}
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground"
            >
              {tech.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <a
            href={href}
            className="group mt-10 inline-flex items-center gap-2 self-start text-sm font-medium text-foreground"
          >
            Explorar projeto
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.7}
            />
          </a>
        </div>

      <div
        aria-hidden="true"
        className="relative hidden min-h-[340px] overflow-hidden border-l border-border bg-foreground/[0.012] lg:block"
      />
      </div>
    </article>
  );
}

type ProjectVisualProps = {
  projectId: (typeof projects)[number]["id"];
};

function ProjectVisual({ projectId }: ProjectVisualProps) {
  if (projectId !== "deskly") {
    return null;
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center p-10">
      <div className="relative w-full max-w-[390px] overflow-hidden rounded-xl border border-border bg-page/70 shadow-2xl shadow-black/10">
        <div className="flex h-10 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-violet-500" />
            <span className="h-1.5 w-14 rounded-full bg-foreground/15" />
          </div>

          <span className="h-5 w-14 rounded-md border border-border" />
        </div>

        <div className="grid min-h-[205px] grid-cols-[76px_minmax(0,1fr)]">
          <div className="border-r border-border p-3">
            <div className="space-y-3">
              <span className="block h-2 w-8 rounded-full bg-foreground/15" />
              <span className="block h-2 w-10 rounded-full bg-foreground/10" />
              <span className="block h-2 w-7 rounded-full bg-foreground/10" />
              <span className="block h-2 w-9 rounded-full bg-foreground/10" />
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="block h-2 w-16 rounded-full bg-foreground/20" />
                <span className="mt-2 block h-1.5 w-24 rounded-full bg-foreground/10" />
              </div>

              <span className="h-6 w-16 rounded-md border border-border" />
            </div>

            <div className="mt-5 space-y-2.5">
              <TicketRow width="w-28" />
              <TicketRow width="w-36" accent />
              <TicketRow width="w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type TicketRowProps = {
  width: string;
  accent?: boolean;
};

function TicketRow({ width, accent = false }: TicketRowProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/80 px-3 py-3">
      <div className="flex items-center gap-3">
        <span
          className={`size-1.5 rounded-full ${
            accent ? "bg-violet-500" : "bg-foreground/15"
          }`}
        />

        <div>
          <span
            className={`block h-1.5 rounded-full bg-foreground/20 ${width}`}
          />
          <span className="mt-2 block h-1.5 w-16 rounded-full bg-foreground/10" />
        </div>
      </div>

      <span className="h-5 w-12 rounded-md border border-border" />
    </div>
  );
}
