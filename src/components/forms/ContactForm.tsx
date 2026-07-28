import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

import { Field } from "@/components/shared/Field";
import { useLocale } from "@/hooks/useLocale";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const locale = useLocale();
  const formLocale = locale.contact.form;

  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
    setForm(initialFormState);
  }

  return (
    <form onSubmit={submit} className="card-pro p-7 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={formLocale.fields.name.label} required>
          <input
            required
            maxLength={100}
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="input-pro"
            placeholder={formLocale.fields.name.placeholder}
          />
        </Field>

        <Field label={formLocale.fields.email.label} required>
          <input
            required
            type="email"
            maxLength={255}
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="input-pro"
            placeholder={formLocale.fields.email.placeholder}
          />
        </Field>

        <Field label={formLocale.fields.phone.label}>
          <input
            type="tel"
            maxLength={30}
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="input-pro"
            placeholder={formLocale.fields.phone.placeholder}
          />
        </Field>

        <Field label={formLocale.fields.subject.label} required>
          <input
            required
            maxLength={150}
            value={form.subject}
            onChange={(event) => setForm({ ...form, subject: event.target.value })}
            className="input-pro"
            placeholder={formLocale.fields.subject.placeholder}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label={formLocale.fields.message.label} required>
          <textarea
            required
            rows={6}
            maxLength={2000}
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            className="input-pro resize-none"
            placeholder={formLocale.fields.message.placeholder}
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">{formLocale.privacyNotice}</p>

        <button type="submit" className="btn-primary">
          {status === "sent" ? formLocale.successMessage : formLocale.submitButton}

          {status !== "sent" && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}
