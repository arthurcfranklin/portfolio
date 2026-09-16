import { useEffect, useState } from "react";

type LegalTableOfContentsItem = {
  id: string;
  number: string;
  title: string;
};

interface LegalTableOfContentsProps {
  items: readonly LegalTableOfContentsItem[];
  label: string;
}

export function LegalTableOfContents({
  items,
  label,
}: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const referencePoint = window.innerHeight * 0.3;

      let currentSection = sections[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= referencePoint) {
          currentSection = section;
        } else {
          break;
        }
      }

      setActiveId(currentSection.id);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [items]);

  return (
    <nav aria-label={label} className="sticky top-28">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>

      <ol className="mt-5 space-y-3">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`group grid grid-cols-[2rem_minmax(0,1fr)] gap-2 text-sm leading-5 transition-colors hover:text-foreground ${
                  isActive
                    ? "font-semibold text-foreground"
                    : "font-normal text-muted-foreground"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`text-xs tabular-nums transition-colors ${
                    isActive
                      ? "text-foreground/70"
                      : "text-muted-foreground/70"
                  }`}
                >
                  {item.number}
                </span>

                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
