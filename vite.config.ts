import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  if (command === "build" && mode === "production" && !env.VITE_TURNSTILE_SITE_KEY) {
    throw new Error("VITE_TURNSTILE_SITE_KEY is required for production builds.");
  }

  return {
    server: {
      port: 3000,
    },

    resolve: {
      tsconfigPaths: true,
    },

    plugins: [
      cloudflare({
        viteEnvironment: {
          name: "ssr",
        },
      }),

      tanstackStart({
        server: {
          entry: "server",
        },
      }),

      viteReact(),
      tailwindcss(),
    ],
  };
});
