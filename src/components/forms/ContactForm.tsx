import {
  useCallback,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { ArrowRight } from "lucide-react";

import {
  TurnstileWidget,
  type TurnstileWidgetHandle,
} from "@/components/forms/TurnstileWidget";
import { Field } from "@/components/shared/Field";
import { useLocale } from "@/hooks/useLocale";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
};

type ContactFormStatus =
  | "idle"
  | "sending"
  | "sent"
  | "error";

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const locale = useLocale();
  const formLocale = locale.contact.form;

  const turnstileRef =
    useRef<TurnstileWidgetHandle>(null);

  const [form, setForm] =
    useState<ContactFormState>(
      initialFormState,
    );

  const [status, setStatus] =
    useState<ContactFormStatus>(
      "idle",
    );

  const [turnstileError, setTurnstileError] =
    useState(false);

  function resetTurnstile() {
    turnstileRef.current?.reset();
  }

  const sendMessage = useCallback(
    async (turnstileToken: string) => {
      setStatus("sending");

      try {
        const response = await fetch(
          "/api/contact",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              phone: form.phone,
              subject: form.subject,
              message: form.message,
              website: form.website,
              turnstileToken,
            }),
          },
        );

        if (!response.ok) {
          setStatus("error");
          resetTurnstile();
          return;
        }

        const result =
          (await response.json()) as {
            success?: boolean;
          };

        if (!result.success) {
          setStatus("error");
          resetTurnstile();
          return;
        }

        setStatus("sent");
        setForm(initialFormState);
        resetTurnstile();

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      } catch {
        setStatus("error");
        resetTurnstile();
      }
    },
    [form],
  );

  const handleTurnstileVerify =
    useCallback(
      (token: string) => {
        setTurnstileError(false);
        void sendMessage(token);
      },
      [sendMessage],
    );

  const handleTurnstileExpire =
    useCallback(() => {
      setTurnstileError(true);

      if (status === "sending") {
        setStatus("error");
      }
    }, [status]);

  const handleTurnstileError =
    useCallback(() => {
      setTurnstileError(true);
      setStatus("error");
    }, []);

  function submit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setTurnstileError(false);

    turnstileRef.current?.execute();
  }

  return (
    <form
      onSubmit={submit}
      aria-busy={
        status === "sending"
      }
      className="card-pro p-7 md:p-9"
    >
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) =>
              setForm({
                ...form,
                website:
                  event.target.value,
              })
            }
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={
            formLocale.fields.name.label
          }
          required
        >
          <input
            required
            maxLength={100}
            autoComplete="name"
            value={form.name}
            onChange={(event) =>
              setForm({
                ...form,
                name:
                  event.target.value,
              })
            }
            className="input-pro"
            placeholder={
              formLocale.fields.name
                .placeholder
            }
          />
        </Field>

        <Field
          label={
            formLocale.fields.email
              .label
          }
          required
        >
          <input
            required
            type="email"
            maxLength={255}
            autoComplete="email"
            value={form.email}
            onChange={(event) =>
              setForm({
                ...form,
                email:
                  event.target.value,
              })
            }
            className="input-pro"
            placeholder={
              formLocale.fields.email
                .placeholder
            }
          />
        </Field>

        <Field
          label={
            formLocale.fields.phone
              .label
          }
        >
          <input
            type="tel"
            maxLength={30}
            autoComplete="tel"
            value={form.phone}
            onChange={(event) =>
              setForm({
                ...form,
                phone:
                  event.target.value,
              })
            }
            className="input-pro"
            placeholder={
              formLocale.fields.phone
                .placeholder
            }
          />
        </Field>

        <Field
          label={
            formLocale.fields.subject
              .label
          }
          required
        >
          <input
            required
            maxLength={150}
            value={form.subject}
            onChange={(event) =>
              setForm({
                ...form,
                subject:
                  event.target.value,
              })
            }
            className="input-pro"
            placeholder={
              formLocale.fields.subject
                .placeholder
            }
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label={
            formLocale.fields.message
              .label
          }
          required
        >
          <textarea
            required
            rows={6}
            maxLength={2000}
            value={form.message}
            onChange={(event) =>
              setForm({
                ...form,
                message:
                  event.target.value,
              })
            }
            className="input-pro resize-none"
            placeholder={
              formLocale.fields.message
                .placeholder
            }
          />
        </Field>
      </div>

      <TurnstileWidget
        ref={turnstileRef}
        onVerify={
          handleTurnstileVerify
        }
        onExpire={
          handleTurnstileExpire
        }
        onError={
          handleTurnstileError
        }
      />

      {turnstileError && (
        <p
          role="alert"
          className="mt-4 text-xs text-destructive"
        >
          {
            formLocale.verificationErrorMessage
          }
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {
            formLocale.privacyNotice
          }
        </p>

        <button
          type="submit"
          className="btn-primary"
          disabled={
            status === "sending"
          }
        >
          {status === "sending"
            ? formLocale.sendingMessage
            : status === "sent"
              ? formLocale.successMessage
              : formLocale.submitButton}

          {status !== "sending" &&
            status !== "sent" && (
              <ArrowRight className="h-4 w-4" />
            )}
        </button>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 text-sm text-destructive"
        >
          {formLocale.errorMessage}
        </p>
      )}

      <p
        className="sr-only"
        role="status"
        aria-live="polite"
      >
        {status === "sent"
          ? formLocale.successMessage
          : status === "sending"
            ? formLocale.sendingMessage
            : ""}
      </p>
    </form>
  );
}
