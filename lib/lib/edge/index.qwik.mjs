import { componentQrl, inlinedQrl, useTaskQrl, useVisibleTaskQrl, _jsxC } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik/jsx-runtime";
function MyFn() {
  console.log("Edge MyFn");
}
const edge = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(() => {
  useTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    MyFn();
  }, "edge_component_useTask_3Sv00t5PGfk"));
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    MyFn();
  }, "edge_component_useVisibleTask_nsxDq4dNsNc"));
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: "Hello World."
  }, 3, "xx_0");
}, "edge_component_n5LhHJp9dAE"));
export {
  MyFn,
  edge as default
};
