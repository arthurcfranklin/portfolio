import { ArrowRight, FolderGit2, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="relative flex items-center min-h-[calc(100vh-4rem)] pt-16 pb-24">
      <div className="container-pro w-full">
        <div className="animate-fade-up mx-auto max-w-5xl text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
            Arthur <span className="text-violet-gradient">Franklin</span>
          </h1>

          <p className="mt-5 text-xl md:text-[1.55rem] text-foreground/85 font-medium">
            Suporte Técnico&nbsp;
            <span className="text-muted-foreground">|</span> Infraestrutura{" "}
            <span className="text-muted-foreground">|</span>
            &nbsp;Automação
          </p>

          <p className="mt-8 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
            Do atendimento ao usuário ao monitoramento de infraestrutura, criando soluções para
            operações de tecnologia mais eficientes e escaláveis.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <a href="/curriculo" className="btn-primary">
              Ver Currículo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#projetos" className="btn-secondary">
              Ver Projetos <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-muted-foreground">
            <a
              href="https://arthurfranklin.com.br/github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://arthurfranklin.com.br/gitlab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitLab"
              className="hover:text-foreground transition-colors"
            >
              <FolderGit2 className="h-5 w-5" />
            </a>
            <a
              href="https://arthurfranklin.com.br/linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:arthurdcaf@gmail.com"
              aria-label="Email"
              className="hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
