import type { LucideIcon } from "lucide-react";

type ContactCardProps = {
  label: string;
  value: string;
  action?: string;
  icon: LucideIcon;
  href: string | null;
};

export function ContactCard({ label, value, action, icon: Icon, href }: ContactCardProps) {
  const content = (
    <>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
        <Icon className="h-5 w-5 text-accent" />
      </span>

      <div className="min-w-0 flex-1">
        <div className="text-xs text-muted-foreground">{label}</div>

        <div className="truncate text-sm font-medium">{value}</div>

        {action && <div className="mt-0.5 text-xs text-accent">{action}</div>}
      </div>
    </>
  );

  if (!href) {
    return <div className="card-pro flex items-center gap-4 p-5">{content}</div>;
  }

  const opensNewTab = href.startsWith("http");

  return (
    <a
      href={href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      className="card-pro card-pro-hover flex items-center gap-4 p-5"
    >
      {content}
    </a>
  );
}
