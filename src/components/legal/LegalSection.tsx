import type { ReactNode } from "react";

interface LegalSectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

export function LegalSection({
  number,
  title,
  children,
}: LegalSectionProps) {
  return (
    <section className="border-t border-border pt-8">
      <div className="grid gap-4 md:grid-cols-[4rem_1fr] md:gap-8">
        <span
          aria-hidden="true"
          className="text-sm font-medium text-muted-foreground"
        >
          {number}
        </span>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            {title}
          </h2>

          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
