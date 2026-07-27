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
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          transition: border-color 150ms ease, background 150ms ease;
          outline: none;
        }

        textarea.input-pro {
          height: auto;
          padding: 12px 14px;
          line-height: 1.5;
        }

        .input-pro::placeholder {
          color: #525258;
        }

        .input-pro:focus {
          border-color: rgba(200,210,225,0.5);
          background: rgba(255,255,255,0.04);
          box-shadow: 0 0 0 4px rgba(200,210,225,0.08);
        }
      `}</style>
    </label>
  );
}
