import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { navigation } from "@/data/navigation";
import { useLocale } from "@/hooks/useLocale";

export function Header() {
  const locale = useLocale();

  const fullName = `${locale.hero.firstName} ${locale.hero.lastName}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="container-pro grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <a href="#top" className="flex min-w-0 items-center gap-3 justify-self-start">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 font-bold text-accent">
            AF
          </span>

          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-semibold">{fullName}</div>

            <span className="hidden whitespace-nowrap text-[11px] text-accent/80 xl:block">
              {locale.header.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden grid-cols-[4rem_4.5rem_6.5rem_5.5rem_7.5rem_4.5rem] items-center gap-2 lg:grid">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {locale.navigation[item.id].label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 justify-self-end">
          <LanguageToggle />

          <a href="#contato" className="btn-secondary !h-9 w-[164px] justify-center !text-sm">
            <span className="hidden sm:inline">{locale.header.contactButton}</span>

            <span className="sm:hidden">{locale.header.mobileContactButton}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
