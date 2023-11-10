import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: `./src/universal.tsx`,
        formats: ["es", "cjs"],
        fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
      },
      rollupOptions: {
        external: ["@builder.io/qwik", "isolated-vm"],
      },
    },
    plugins: [qwikVite()],
  };
});
