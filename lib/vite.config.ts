import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

type Options = {
  pointTo: "output" | "input" | "full-input";
  format: "ts" | "js";
};

const getSdkEnv = () => process.env.SDK_ENV;

const getFolderName = () => {
  switch (getSdkEnv()) {
    case "node":
      return "node-runtime";
    case "edge":
      return "edge-runtime";
    case "browser":
      return "browser-runtime";
    default:
      throw new Error(
        `Unknown SDK_ENV: ${getSdkEnv()}. Expected one of 'node', 'edge', 'browser'.`
      );
  }
};

const getEvaluatorPathAlias = (options: Partial<Options> = {}) => {
  const pointTo = options.pointTo || "input";
  const format = options.format || "ts";

  const buildPath = () => {
    const folder = getFolderName();
    const fileName = `${folder}/index.${format}`;

    switch (pointTo) {
      case "output":
        return `./${getSdkEnv()}/functions/evaluate/${fileName}`;

      case "input":
        return `./${fileName}`;

      case "full-input":
        return `./src/functions/evaluate/${fileName}`;

      default:
        throw new Error(`Unknown pointTo: ${pointTo}`);
    }
  };

  return {
    "placeholder-runtime": buildPath(),
  };
};

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
        external: ["@builder.io/qwik", "js-interpreter", "isolated-vm"],
      },
    },
    plugins: [qwikVite()],
  };
});
