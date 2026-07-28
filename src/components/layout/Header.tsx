import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { navigation } from "@/data/navigation";
import { useLocale } from "@/hooks/useLocale";

export function Header() {
  const locale = useLocale();

  const fullName = `${locale.hero.firstName} ${locale.hero.lastName}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="container-pro flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 font-bold text-accent">
            AF
          </span>

          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-semibold">{fullName}</div>

            <div className="hidden text-[11px] text-muted-foreground sm:block">
              {locale.header.tagline}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {locale.navigation[item.id].label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />

          <a href="#contato" className="btn-secondary !h-9 !text-sm">
            <span className="hidden sm:inline">
              {locale.header.contactButton}
            </span>

            <span className="sm:hidden">
              {locale.header.mobileContactButton}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
