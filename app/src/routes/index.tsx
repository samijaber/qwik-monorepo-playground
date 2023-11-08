import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { evaluate } from "@samijaber/lib-test";

export default component$(() => {
  const libResult = evaluate("1 + 2");
  return (
    <>
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
