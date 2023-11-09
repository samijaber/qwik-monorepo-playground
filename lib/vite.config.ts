import { defineConfig } from "vite";

export default defineConfig(() => {
  const sdkEnv = process.env.SDK_ENV;
  return {
    resolve: {
      alias: {
        "placeholder-runtime": `./${sdkEnv}-runtime.js`,
      },
    },
    build: {
      outDir: ["lib", sdkEnv].join("/"),
      lib: {
        entry: "./src/index.ts",
        formats: ["es", "cjs"],
        fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
      },
      rollupOptions: {
        external: ["isolated-vm"],
      },
    },
  };
});
