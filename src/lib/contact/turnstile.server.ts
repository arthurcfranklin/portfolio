import { getServerConfig } from "@/lib/config.server";

const TURNSTILE_SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const TURNSTILE_TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";

const TURNSTILE_PRODUCTION_HOSTNAME = "arthurfranklin.com.br";
const TURNSTILE_EXPECTED_ACTION = "contact";

const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1"]);

type TurnstileVerificationResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

type VerifyTurnstileOptions = {
  token: string;
  requestHostname: string;
};

type TurnstileVerificationResult =
  | {
      success: true;
    }
  | {
      success: false;
    };

export async function verifyTurnstile({
  token,
  requestHostname,
}: VerifyTurnstileOptions): Promise<TurnstileVerificationResult> {
  const { turnstileSecretKey } = getServerConfig();

  if (!turnstileSecretKey) {
    console.error("TURNSTILE_SECRET_KEY is not configured.");

    return {
      success: false,
    };
  }

  const isTestSecret = turnstileSecretKey === TURNSTILE_TEST_SECRET_KEY;

  if (isTestSecret && !LOCAL_HOSTNAMES.has(requestHostname)) {
    console.error("Turnstile test credentials cannot be used outside local development.");

    return {
      success: false,
    };
  }

  const body = new FormData();
  body.append("secret", turnstileSecretKey);
  body.append("response", token);

  let response: Response;

  try {
    response = await fetch(TURNSTILE_SITEVERIFY_URL, {
      method: "POST",
      body,
    });
  } catch (error) {
    console.error("Turnstile Siteverify request failed.", error);

    return {
      success: false,
    };
  }

  if (!response.ok) {
    console.error(`Turnstile Siteverify returned HTTP ${response.status}.`);

    return {
      success: false,
    };
  }

  let verification: TurnstileVerificationResponse;

  try {
    verification = (await response.json()) as TurnstileVerificationResponse;
  } catch (error) {
    console.error("Invalid Turnstile Siteverify response.", error);

    return {
      success: false,
    };
  }

  if (!verification.success) {
    console.warn("Turnstile verification failed.", {
      errorCodes: verification["error-codes"] ?? [],
    });

    return {
      success: false,
    };
  }

  if (!isTestSecret) {
    if (verification.hostname !== TURNSTILE_PRODUCTION_HOSTNAME) {
      console.warn("Turnstile hostname mismatch.");

      return {
        success: false,
      };
    }

    if (verification.action !== TURNSTILE_EXPECTED_ACTION) {
      console.warn("Turnstile action mismatch.");

      return {
        success: false,
      };
    }
  }

  return {
    success: true,
  };
}
