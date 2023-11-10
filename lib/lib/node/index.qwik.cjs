"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
function MyFn() {
  console.log("Server MyFn");
}
const node = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    MyFn();
  }, "node_component_useTask_sMXkehUbvcE"));
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    MyFn();
  }, "node_component_useVisibleTask_vjmS6326sz0"));
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: "Hello World."
  }, 3, "Vi_0");
}, "node_component_GlN5TxNhiSE"));
exports.MyFn = MyFn;
exports.default = node;
