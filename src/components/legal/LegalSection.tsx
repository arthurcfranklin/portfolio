import type { ReactNode } from "react";

interface LegalSectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}

export function LegalSection({
  id,
  number,
  title,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-border pt-8 sm:pt-10"
    >
      <div className="grid gap-4 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6">
        <span
          aria-hidden="true"
          className="pt-1 text-xs font-medium tabular-nums text-muted-foreground"
        >
          {number}
        </span>

        <div>
          <h2 className="text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
            {title}
          </h2>

          <div className="mt-5 space-y-4 leading-7 text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
