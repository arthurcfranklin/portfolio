import type { ContactItem } from "@/types/content";

type ContactCardProps = {
  contact: ContactItem;
};

export function ContactCard({ contact }: ContactCardProps) {
  const opensNewTab =
    contact.href.startsWith("http") ||
    contact.href.startsWith("mailto");

  return (
    <a
      href={contact.href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noreferrer" : undefined}
      className="card-pro card-pro-hover flex items-center gap-4 p-5"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 shrink-0">
        <contact.icon className="h-5 w-5 text-accent" />
      </span>

      <div className="flex-1 min-w-0">
        <div className="text-xs text-muted-foreground">
          {contact.label}
        </div>

        <div className="text-sm font-medium truncate">
          {contact.value}
        </div>

        {contact.action && (
          <div className="text-xs text-accent mt-0.5">
            {contact.action}
          </div>
        )}
      </div>
    </a>
  );
}
