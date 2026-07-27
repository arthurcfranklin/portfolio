import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  center?: boolean;
};

export function SectionLabel({ children, center = false }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
