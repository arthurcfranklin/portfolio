export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  website?: string;
  turnstileToken: string;
};

type ValidationResult =
  | {
      success: true;
      data: ContactPayload;
    }
  | {
      success: false;
      error: string;
    };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeString(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  return value.trim();
}

export function validateContactPayload(payload: unknown): ValidationResult {
  if (!isRecord(payload)) {
    return {
      success: false,
      error: "Invalid request body.",
    };
  }

  const name = normalizeString(payload.name);
  const email = normalizeString(payload.email);
  const phone = normalizeString(payload.phone);
  const subject = normalizeString(payload.subject);
  const message = normalizeString(payload.message);
  const website = normalizeString(payload.website);
  const turnstileToken = normalizeString(payload.turnstileToken);
  const allowedKeys = new Set([
    "name",
    "email",
    "phone",
    "subject",
    "message",
    "website",
    "turnstileToken",
  ]);

  const hasUnexpectedField = Object.keys(payload).some((key) => !allowedKeys.has(key));

  if (hasUnexpectedField) {
    return {
      success: false,
      error: "Invalid request body.",
    };
  }

  if (!name || name.length > 100) {
    return {
      success: false,
      error: "Invalid name.",
    };
  }

  if (!email || email.length > 255 || !EMAIL_PATTERN.test(email)) {
    return {
      success: false,
      error: "Invalid email.",
    };
  }

  if (phone !== null && phone.length > 30) {
    return {
      success: false,
      error: "Invalid phone.",
    };
  }

  if (!subject || subject.length > 150) {
    return {
      success: false,
      error: "Invalid subject.",
    };
  }

  if (!message || message.length > 2000) {
    return {
      success: false,
      error: "Invalid message.",
    };
  }

  if (website) {
    return {
      success: false,
      error: "Invalid request.",
    };
  }

  if (!turnstileToken || turnstileToken.length > 2048) {
    return {
      success: false,
      error: "Invalid verification token.",
    };
  }

  return {
    success: true,
    data: {
      name,
      email,
      phone: phone || undefined,
      subject,
      message,
      turnstileToken,
    },
  };
}
