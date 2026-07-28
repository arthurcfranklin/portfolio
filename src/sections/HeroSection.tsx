import {
  ArrowRight,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { useLocale } from "@/hooks/useLocale";

export function HeroSection() {
  const locale = useLocale();

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-4rem)] items-center pb-24 pt-16"
    >
      <div className="container-pro w-full">
        <div className="animate-fade-up mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-7xl">
            {locale.hero.firstName}{" "}
            <span className="text-violet-gradient">
              {locale.hero.lastName}
            </span>
          </h1>

          <p className="mt-5 text-xl font-medium text-foreground/85 md:text-[1.55rem]">
            {locale.hero.roles.map((role, index) => (
              <span key={role}>
                {index > 0 && (
                  <span className="mx-2 text-muted-foreground">|</span>
                )}

                {role}
              </span>
            ))}
          </p>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {locale.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="/curriculo" className="btn-primary">
              {locale.hero.resumeButton}
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href="#projetos" className="btn-secondary">
              {locale.hero.projectsButton}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-muted-foreground">
            <a
              href="https://arthurfranklin.com.br/github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={locale.hero.socialLabels.github}
              className="transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://arthurfranklin.com.br/gitlab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={locale.hero.socialLabels.gitlab}
              className="transition-colors hover:text-foreground"
            >
              <FolderGit2 className="h-5 w-5" />
            </a>

            <a
              href="https://arthurfranklin.com.br/linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={locale.hero.socialLabels.linkedin}
              className="transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:arthur@arthurfranklin.com.br"
              aria-label={locale.hero.socialLabels.email}
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
