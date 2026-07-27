import { navigation } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/70">
      <div className="container-pro flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent font-bold">
            AF
          </span>

          <div className="leading-tight">
            <div className="text-sm font-semibold">Arthur Franklin</div>
            <div className="text-[11px] text-muted-foreground">
              Suporte Técnico · Infraestrutura · Automação
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn-secondary !h-9 !text-sm">
          Entrar em Contato
        </a>
      </div>
    </header>
  );
}
