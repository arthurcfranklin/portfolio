import { useEffect, useState } from "react";

import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navigation } from "@/data/navigation";
import { useLocale } from "@/hooks/useLocale";

export function Header() {
  const locale = useLocale();

  const [activeSection, setActiveSection] = useState("top");

  const fullName = `${locale.hero.firstName} ${locale.hero.lastName}`;

  useEffect(() => {
    const sectionIds = ["top", ...navigation.map((item) => item.href.replace("#", ""))];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const mostVisibleSection = visibleSections[0];

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

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
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 justify-self-start"
          onClick={() => setActiveSection("top")}
        >
          <img
            src="/favicon-192x192.png"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-lg"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-semibold">{fullName}</div>

            <span className="hidden whitespace-nowrap text-[11px] text-accent/80 xl:block">
              {locale.header.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
          {navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(sectionId)}
                className={`
                  whitespace-nowrap text-center text-sm
                  transition-[color,font-weight] duration-200
                  ${
                    isActive
                      ? "font-semibold text-foreground"
                      : "font-normal text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {locale.navigation[item.id].label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 justify-self-end">
          <ThemeToggle />

          <LanguageToggle />

          <a
            href="#contato"
            onClick={() => setActiveSection("contato")}
            className="btn-secondary !h-9 w-[164px] justify-center !text-sm"
          >
            <span className="hidden sm:inline">{locale.header.contactButton}</span>

            <span className="sm:hidden">{locale.header.mobileContactButton}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
