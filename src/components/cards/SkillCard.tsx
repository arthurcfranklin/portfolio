import type { SkillGroup } from "@/types/content";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  return (
    <div className="card-pro card-pro-hover p-7">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
          <group.icon className="h-5 w-5 text-accent" />
        </span>

        <h3 className="text-lg font-semibold">{group.title}</h3>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span key={item} className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
