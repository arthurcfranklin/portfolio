import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

export type TurnstileWidgetHandle = {
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
        container: HTMLElement,
        options: {
          sitekey: string;
          action?: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SCRIPT_ID = "cloudflare-turnstile-script";
const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export const TurnstileWidget = forwardRef<
  TurnstileWidgetHandle,
  TurnstileWidgetProps
>(function TurnstileWidget(
  {
    onVerify,
    onExpire,
    onError,
  },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useImperativeHandle(ref, () => ({
  reset() {
    if (
      widgetIdRef.current &&
      window.turnstile
    ) {
      window.turnstile.reset(
        widgetIdRef.current,
      );
    }
  },
}));

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

    if (!siteKey) {
      console.error("VITE_TURNSTILE_SITE_KEY is not configured.");
      onError();
      return;
    }

    function renderWidget() {
      if (!containerRef.current || !window.turnstile) {
        return;
      }

      if (widgetIdRef.current) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(
        containerRef.current,
        {
          sitekey: siteKey,
          action: "contact",
          callback: onVerify,
          "expired-callback": onExpire,
          "error-callback": onError,
          theme: "auto",
        },
      );
    }

    const existingScript =
      document.getElementById(TURNSTILE_SCRIPT_ID);

    if (existingScript) {
      renderWidget();
    } else {
      const script = document.createElement("script");

      script.id = TURNSTILE_SCRIPT_ID;
      script.src = TURNSTILE_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      script.onerror = onError;

      document.head.appendChild(script);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onVerify, onExpire, onError]);

    return <div ref={containerRef} />;
});
