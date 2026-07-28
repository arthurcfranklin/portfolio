import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  title: string;
  items: string[];
  icon: LucideIcon;
};

export function SkillCard({ title, items, icon: Icon }: SkillCardProps) {
  return (
    <div className="card-pro card-pro-hover p-7">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
          <Icon className="h-5 w-5 text-accent" />
        </span>

        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="chip">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
