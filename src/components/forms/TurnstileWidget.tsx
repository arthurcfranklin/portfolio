import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export type TurnstileWidgetHandle = {
  execute: () => void;
  reset: () => void;
};

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          action?: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          appearance?: "always" | "execute" | "interaction-only";
          execution?: "render" | "execute";
        },
      ) => string;

      execute: (container: string | HTMLElement) => void;

      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SCRIPT_ID = "cloudflare-turnstile-script";

const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const TURNSTILE_CONTAINER_ID = "contact-turnstile";

export const TurnstileWidget = forwardRef<TurnstileWidgetHandle, TurnstileWidgetProps>(
  function TurnstileWidget({ onVerify, onExpire, onError }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);

    const widgetIdRef = useRef<string | null>(null);

    const onVerifyRef = useRef(onVerify);

    const onExpireRef = useRef(onExpire);

    const onErrorRef = useRef(onError);

    useEffect(() => {
      onVerifyRef.current = onVerify;
    }, [onVerify]);

    useEffect(() => {
      onExpireRef.current = onExpire;
    }, [onExpire]);

    useEffect(() => {
      onErrorRef.current = onError;
    }, [onError]);

    useImperativeHandle(ref, () => ({
      execute() {
        if (!widgetIdRef.current || !window.turnstile) {
          onErrorRef.current();
          return;
        }

        window.turnstile.execute(`#${TURNSTILE_CONTAINER_ID}`);
      },

      reset() {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
      },
    }));

    useEffect(() => {
      const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

      if (!siteKey) {
        console.error("VITE_TURNSTILE_SITE_KEY is not configured.");

        onErrorRef.current();
        return;
      }

      function renderWidget() {
        if (!containerRef.current || !window.turnstile || widgetIdRef.current) {
          return;
        }

        widgetIdRef.current = window.turnstile.render(`#${TURNSTILE_CONTAINER_ID}`, {
          sitekey: siteKey,
          action: "contact",

          callback: (token) => {
            onVerifyRef.current(token);
          },

          "expired-callback": () => {
            onExpireRef.current();
          },

          "error-callback": () => {
            onErrorRef.current();
          },

          theme: "auto",
          appearance: "interaction-only",
          execution: "execute",
        });
      }

      const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID);

      if (existingScript) {
        if (window.turnstile) {
          renderWidget();
        } else {
          existingScript.addEventListener("load", renderWidget, {
            once: true,
          });
        }
      } else {
        const script = document.createElement("script");

        script.id = TURNSTILE_SCRIPT_ID;

        script.src = TURNSTILE_SCRIPT_SRC;

        script.async = true;
        script.defer = true;

        script.addEventListener("load", renderWidget, {
          once: true,
        });

        script.addEventListener(
          "error",
          () => {
            onErrorRef.current();
          },
          {
            once: true,
          },
        );

        document.head.appendChild(script);
      }

      return () => {
        existingScript?.removeEventListener("load", renderWidget);

        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);

          widgetIdRef.current = null;
        }
      };
    }, []);

    return <div id={TURNSTILE_CONTAINER_ID} ref={containerRef} />;
  },
);
