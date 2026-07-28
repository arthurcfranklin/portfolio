import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navigation } from "@/data/navigation";
import { useLocale } from "@/hooks/useLocale";

export function Header() {
  const locale = useLocale();

  const fullName = `${locale.hero.firstName} ${locale.hero.lastName}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-xl">
      <div
        className="
          grid h-16 w-full
          grid-cols-[minmax(0,1fr)_auto]
          items-center gap-4
          px-4 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto]
          lg:px-10 xl:px-14
        "
      >
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

        <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="whitespace-nowrap text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {locale.navigation[item.id].label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 justify-self-end">
          <ThemeToggle />

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
