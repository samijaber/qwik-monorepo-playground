import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import * as ivm from "isolated-vm";
import { evaluate } from "@samijaber/lib-test";

export default component$(() => {
  const isolate = new ivm.Isolate({ memoryLimit: 128 });
  const context = isolate.createContextSync();
  const script = isolate.compileScriptSync("1 + 2");
  const result = script.runSync(context);
  console.log(result); // 3

  const libResult = evaluate("1 + 2");
  return (
    <>
      <div>isolated-vm result is: {result}</div>
      <div>lib result is: {libResult}</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
