import type { ReactNode } from "react";

type FieldProps = {
  label: string;
  required?: boolean;
  children: ReactNode;
};

export function Field({ label, required = false, children }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-muted-foreground mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </span>

      {children}

      <style>{`
  .input-pro {
    width: 100%;
    height: 44px;
    padding: 0 14px;
    background: var(--color-surface);
    border: 1px solid var(--color-input);
    border-radius: 10px;
    color: var(--color-foreground);
    font-size: 14px;
    transition:
      border-color 150ms ease,
      background-color 150ms ease,
      box-shadow 150ms ease;
    outline: none;
  }

  textarea.input-pro {
    height: auto;
    padding: 12px 14px;
    line-height: 1.5;
    resize: vertical;
  }

  .input-pro::placeholder {
    color: var(--color-muted-foreground);
    opacity: 0.8;
  }

  .input-pro:hover {
    border-color: var(--control-border-hover);
  }

  .input-pro:focus {
    border-color: var(--color-ring);
    background: var(--color-surface-elevated);
    box-shadow: 0 0 0 4px color-mix(in oklch, var(--color-ring) 14%, transparent);
  }
`}</style>
    </label>
  );
}
