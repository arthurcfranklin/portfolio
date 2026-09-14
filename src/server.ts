import handler, { createServerEntry } from "@tanstack/react-start/server-entry";

import { renderErrorPage } from "./lib/error-page";

// Nitro serializes unhandled production SSR failures as a generic JSON 500.
// Convert only HTML document requests to the portfolio's generic error page.
async function normalizeCatastrophicSsrResponse(
  request: Request,
  response: Response,
): Promise<Response> {
  if (response.status !== 500) return response;

  const method = request.method.toUpperCase();
  if (method !== "GET" && method !== "HEAD") return response;

  const accept = request.headers.get("accept") ?? "";
  if (!accept.includes("text/html")) return response;

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  let payload: unknown;

  try {
    payload = await response.clone().json();
  } catch {
    return response;
  }

  if (
    payload == null ||
    typeof payload !== "object" ||
    !("error" in payload) ||
    !("status" in payload) ||
    !("unhandled" in payload) ||
    payload.error !== true ||
    payload.status !== 500 ||
    payload.unhandled !== true
  ) {
    return response;
  }

  console.error(new Error("Nitro returned an unhandled SSR error response."));

  return new Response(renderErrorPage(), {
    status: 500,
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

export default createServerEntry({
  async fetch(request) {
    try {
      const response = await handler.fetch(request);
      return await normalizeCatastrophicSsrResponse(request, response);
    } catch (error) {
      console.error(error);

      return new Response(renderErrorPage(), {
        status: 500,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    }
  },
});
