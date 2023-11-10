import { component$ } from "@builder.io/qwik";
import { useTask$ } from "@builder.io/qwik";
import { useVisibleTask$ } from "@builder.io/qwik";

export function MyFn() {
  console.log("Server MyFn");
}

export default component$(() => {
  useTask$(() => {
    MyFn();
  });

  useVisibleTask$(() => {
    MyFn();
  });
  return <>Hello World.</>;
});
