import { createFileRoute } from "@tanstack/react-router";

import { sendContactEmail } from "@/lib/contact/email.server";
import { verifyTurnstile } from "@/lib/contact/turnstile.server";
import { validateContactPayload } from "@/lib/contact/validation";

const MAX_BODY_SIZE = 16_384;

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const origin = request.headers.get("origin");
        const requestOrigin = new URL(request.url).origin;

        if (!origin || origin !== requestOrigin) {
          return Response.json(
            {
              success: false,
              error: "Forbidden.",
            },
            {
              status: 403,
            },
          );
        }

        const contentType = request.headers.get("content-type") ?? "";

        if (!contentType.includes("application/json")) {
          return Response.json(
            {
              success: false,
              error: "Unsupported media type.",
            },
            {
              status: 415,
            },
          );
        }

        const contentLength = request.headers.get("content-length");

        if (contentLength && Number(contentLength) > MAX_BODY_SIZE) {
          return Response.json(
            {
              success: false,
              error: "Request body too large.",
            },
            {
              status: 413,
            },
          );
        }

        let rawBody: string;

        try {
          rawBody = await request.text();
        } catch {
          return Response.json(
            {
              success: false,
              error: "Unable to read request body.",
            },
            {
              status: 400,
            },
          );
        }

        if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_SIZE) {
          return Response.json(
            {
              success: false,
              error: "Request body too large.",
            },
            {
              status: 413,
            },
          );
        }

        let payload: unknown;

        try {
          payload = JSON.parse(rawBody);
        } catch {
          return Response.json(
            {
              success: false,
              error: "Invalid JSON.",
            },
            {
              status: 400,
            },
          );
        }

        const validation = validateContactPayload(payload);

        if (!validation.success) {
          return Response.json(
            {
              success: false,
              error: validation.error,
            },
            {
              status: 400,
            },
          );
        }

        const turnstileVerification = await verifyTurnstile({
          token: validation.data.turnstileToken,
          expectedHostname: new URL(request.url).hostname,
          expectedAction: "contact",
        });

        if (!turnstileVerification.success) {
          return Response.json(
            {
              success: false,
              error: "Verification failed.",
            },
            {
              status: 400,
            },
          );
        }

        const emailResult = await sendContactEmail({
          name: validation.data.name,
          email: validation.data.email,
          phone: validation.data.phone,
          subject: validation.data.subject,
          message: validation.data.message,
        });

        if (!emailResult.success) {
          return Response.json(
            {
              success: false,
              error: "Unable to deliver message.",
            },
            {
              status: 502,
            },
          );
        }

        return Response.json(
          {
            success: true,
          },
          {
            status: 200,
          },
        );
      },
    },
  },
});
