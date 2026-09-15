import {
  ArrowLeft,
  ArrowUpRight,
  House,
  RotateCw,
  type LucideIcon,
} from "lucide-react";

interface SystemPageAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
}

interface SystemPageProps {
  code: string;
  displayCode?: string;
  eyebrow: string;
  statusLabel: string;
  title: string;
  description: string;
  variant:
    | "auth"
    | "forbidden"
    | "not-found"
    | "server"
    | "maintenance";
  icon: LucideIcon;
  primaryAction?: SystemPageAction;
  secondaryAction?: SystemPageAction;
}

function ActionContent({
  label,
  icon: Icon,
}: Pick<SystemPageAction, "label" | "icon">) {
  return (
    <>
      <span>{label}</span>

      {Icon ? (
        <Icon
          aria-hidden="true"
          className="size-4 shrink-0"
          strokeWidth={1.7}
        />
      ) : null}
    </>
  );
}

function SystemAction({
  action,
  variant,
}: {
  action: SystemPageAction;
  variant: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? [
          "btn-primary group",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "active:scale-[0.985]",
        ].join(" ")
      : [
          "btn-secondary group",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "active:scale-[0.985]",
        ].join(" ");

  if (action.href) {
    return (
      <a href={action.href} className={className}>
        <ActionContent label={action.label} icon={action.icon} />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={action.onClick}
      className={className}
    >
      <ActionContent label={action.label} icon={action.icon} />
    </button>
  );
}

export function SystemPage({
  code,
  displayCode,
  eyebrow,
  title,
  description,
  variant,
  icon: Icon,
  primaryAction,
  secondaryAction,
}: SystemPageProps) {
  const isMaintenance = variant === "maintenance";
  const isServerError = variant === "server";

  const resolvedPrimaryAction: SystemPageAction =
    primaryAction ??
    (isServerError || isMaintenance
      ? {
          label: "Tentar novamente",
          onClick: () => window.location.reload(),
          icon: RotateCw,
        }
      : {
          label: "Voltar ao início",
          href: "/",
          icon: House,
        });

  const resolvedSecondaryAction: SystemPageAction | undefined =
    secondaryAction ??
    (isServerError
      ? {
          label: "Voltar ao início",
          href: "/",
          icon: House,
        }
      : undefined);

  const resolvedDisplayCode =
    displayCode ?? (isMaintenance ? "Manutenção" : code);

  return (
    <main className="bg-page relative isolate flex min-h-screen overflow-hidden text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-[18%]
          size-[32rem] -translate-x-1/2
          rounded-full bg-foreground/[0.025] blur-3xl
        "
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between">
          <a
            href="/"
            className="text-sm font-semibold tracking-[-0.02em] text-foreground"
          >
            Arthur Franklin
          </a>

          <span className="text-xs text-muted-foreground/55">
            {isMaintenance ? "Status do sistema" : `HTTP ${code}`}
          </span>
        </header>

        <div className="flex flex-1 items-center justify-center py-16">
          <section className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
  <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-surface-elevated shadow-sm">
    <Icon
      aria-hidden="true"
      className="size-5 text-muted-foreground"
      strokeWidth={1.55}
    />
  </div>

  <p className="mt-7 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
    {eyebrow}
  </p>

  <div className="relative mt-5 flex h-[10rem] w-full items-center justify-center sm:h-[11rem] lg:h-[12rem]">
    <p
    aria-hidden="true"
    className="
        pointer-events-none absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        select-none whitespace-nowrap
        text-[clamp(8rem,17vw,13rem)]
        font-semibold leading-none
        tracking-[-0.085em]
        text-foreground/[0.10]
    "
    >
    {resolvedDisplayCode}
    </p>

    <h1 className="relative z-10 mx-auto max-w-3xl whitespace-pre-line text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.02]">
      {title}
    </h1>
  </div>

  <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-muted-foreground sm:text-[1.05rem]">
    {description}
  </p>

  <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
    <SystemAction
      action={resolvedPrimaryAction}
      variant="primary"
    />

    {resolvedSecondaryAction ? (
      <SystemAction
        action={resolvedSecondaryAction}
        variant="secondary"
      />
    ) : null}
  </div>

  <div className="mt-14 w-full max-w-xl border-t border-border-subtle pt-6">
    <p className="text-xs leading-5 text-muted-foreground/55">
    </p>
  </div>
</section>
        </div>

        <footer className="flex items-center justify-between border-t border-border-subtle pt-5 text-[11px] text-muted-foreground/45">
          <span>arthurfranklin.com.br</span>

          <span>© Arthur Franklin</span>
        </footer>
      </div>
    </main>
  );
}

export const systemPageIcons = {
  home: House,
  back: ArrowLeft,
  retry: RotateCw,
  continue: ArrowUpRight,
};