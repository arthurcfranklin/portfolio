import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export function StatCard({ value, label, icon: Icon }: StatCardProps) {
  return (
    <div className="card-pro p-4">
      <Icon className="h-5 w-5 text-accent" />

      <div className="mt-4 text-xl font-bold">{value}</div>

      <div className="mt-1 text-xs leading-tight text-muted-foreground">{label}</div>
    </div>
  );
}
