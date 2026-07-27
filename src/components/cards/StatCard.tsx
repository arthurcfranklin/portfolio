import type { StatItem } from "@/types/content";

type StatCardProps = {
  stat: StatItem;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className="card-pro p-4">
      <stat.icon className="h-5 w-5 text-accent" />

      <div className="mt-3 text-2xl font-bold tracking-tight">
        {stat.k}
      </div>

      <div className="text-[11px] text-muted-foreground leading-tight mt-1">
        {stat.v}
      </div>
    </div>
  );
}
