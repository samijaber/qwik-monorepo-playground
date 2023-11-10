import { componentQrl, inlinedQrl, useTaskQrl, useVisibleTaskQrl, _jsxC } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik/jsx-runtime";
function MyFn() {
  console.log("Server MyFn");
}
const node = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(() => {
  useTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    MyFn();
  }, "node_component_useTask_sMXkehUbvcE"));
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    MyFn();
  }, "node_component_useVisibleTask_vjmS6326sz0"));
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: "Hello World."
  }, 3, "Vi_0");
}, "node_component_GlN5TxNhiSE"));
export {
  MyFn,
  node as default
};
