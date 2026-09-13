import { Resend } from "resend";

import { getServerConfig } from "@/lib/config.server";

type SendContactEmailOptions = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

type SendContactEmailResult =
  | { success: true }
  | { success: false };

const CONTACT_FROM =
  "Portfolio <portfolio@arthurfranklin.com.br>";

const CONTACT_TO =
  "arthur@arthurfranklin.com.br";

function normalizeSubject(subject: string) {
  return subject
    .replace(/[\r\n]+/g, " ")
    .trim();
}

function buildContactEmailText({
  name,
  email,
  phone,
  subject,
  message,
}: SendContactEmailOptions) {
  return [
    "Nova mensagem recebida pelo portfólio.",
    "",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `Telefone: ${phone || "Não informado"}`,
    `Assunto: ${subject}`,
    "",
    "Mensagem:",
    message,
  ].join("\n");
}

export async function sendContactEmail({
  name,
  email,
  phone,
  subject,
  message,
}: SendContactEmailOptions): Promise<SendContactEmailResult> {
  const { resendApiKey } = getServerConfig();

  if (!resendApiKey) {
    console.error(
      "RESEND_API_KEY is not configured.",
    );

    return { success: false };
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data, error } =
      await resend.emails.send({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        replyTo: email,
        subject: `[Portfolio] ${normalizeSubject(subject)}`,
        text: buildContactEmailText({
          name,
          email,
          phone,
          subject,
          message,
        }),
      });

    if (error) {
      console.error(
        "Resend rejected contact email.",
        {
          name: error.name,
          message: error.message,
        },
      );

      return { success: false };
    }

    if (!data?.id) {
      console.error(
        "Resend returned no email ID.",
      );

      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error(
      "Contact email delivery failed.",
      error instanceof Error
        ? error.message
        : "Unknown error.",
    );

    return { success: false };
  }
}