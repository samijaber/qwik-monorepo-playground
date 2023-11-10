import { component$ } from "@builder.io/qwik";
import { useTask$ } from "@builder.io/qwik";
import { useVisibleTask$ } from "@builder.io/qwik";
import { MyFn as browser } from "./browser";
import { MyFn as node } from "./node";
import { isServer } from "@builder.io/qwik/build";

export default component$(() => {
  useTask$(() => {
    if (isServer) {
      node();
    } else {
      browser();
    }
  });

  useVisibleTask$(() => {
    if (isServer) {
      node();
    } else {
      browser();
    }
  });
  return <>Hello World.</>;
});
