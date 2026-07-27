import {
  ArrowUp,
  FolderGit2,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="container-pro py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent font-bold">
                AF
              </span>
              <span className="text-base font-semibold">Arthur Franklin</span>
            </a>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Soluções voltadas a suporte técnico, infraestrutura, monitoramento
              e automação.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                arthur@arthurfranklin.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                Disponível em breve
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Rio de Janeiro - RJ, Brasil
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-4">
              Redes Sociais
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://arthurfranklin.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Globe className="h-4 w-4 text-accent" />
                  Website
                </a>
              </li>
              <li>
                <a
                  href="https://arthurfranklin.com.br/github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4 text-accent" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://arthurfranklin.com.br/gitlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FolderGit2 className="h-4 w-4 text-accent" />
                  GitLab
                </a>
              </li>
              <li>
                <a
                  href="https://arthurfranklin.com.br/linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-accent" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Arthur Franklin. Todos os direitos
            reservados.
          </span>

          <div className="flex items-center gap-5">
            <span>Desenvolvido com foco em desempenho, design e propósito.</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 text-accent hover:text-foreground transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
