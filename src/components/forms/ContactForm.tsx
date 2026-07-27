import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

import { Field } from "@/components/shared/Field";

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
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nome" required>
          <input
            required
            maxLength={100}
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="input-pro"
            placeholder="Seu nome completo"
          />
        </Field>

        <Field label="Email" required>
          <input
            required
            type="email"
            maxLength={255}
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="input-pro"
            placeholder="seu.email@exemplo.com"
          />
        </Field>

        <Field label="Telefone">
          <input
            value={form.phone}
            maxLength={30}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="input-pro"
            placeholder="(00) 00000-0000"
          />
        </Field>

        <Field label="Assunto" required>
          <input
            required
            maxLength={150}
            value={form.subject}
            onChange={(event) => setForm({ ...form, subject: event.target.value })}
            className="input-pro"
            placeholder="Qual é o assunto?"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Mensagem" required>
          <textarea
            required
            rows={6}
            maxLength={2000}
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            className="input-pro resize-none"
            placeholder="Escreva sua mensagem aqui..."
          />
        </Field>
      </div>

      <div className="mt-7 flex items-center justify-between flex-wrap gap-4">
        <p className="text-xs text-muted-foreground">
          Seus dados serão usados apenas para responder a esta mensagem.
        </p>

        <button type="submit" className="btn-primary">
          {status === "sent" ? "Mensagem enviada ✓" : "Enviar mensagem"}

          {status !== "sent" && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}
