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
        /**
         * https://github.com/BuilderIO/qwik/issues/4952
         */
        fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
      },
      rollupOptions: {
        external: ["isolated-vm"],
      },
    },
  };
});
