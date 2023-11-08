/**
 * THIS IS A MAGICAL IMPORT. It is aliased by the build process of every SDK configuration, so that
 * it points to the correct runtime for that configuration, which are expected to live exactly at:
 *  - ./browser-runtime/index.js
 *  - ./node-runtime/index.js
 *  - ./edge-runtime/index.js
 *
 * We have code in `/output-generation` that does this aliasing, and is re-used by each SDK.
 * Also, each individual `tsconfig.json` aliases this import to the browser runtime so that the
 * types can be resolved correctly.
 */
import { evaluator } from "placeholder-runtime";
export function evaluate(code: string): any {
  return evaluator(code);
}
