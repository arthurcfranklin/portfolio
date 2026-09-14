import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
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
});
