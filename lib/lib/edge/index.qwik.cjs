"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
function MyFn() {
  console.log("Edge MyFn");
}
const edge = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    MyFn();
  }, "edge_component_useTask_3Sv00t5PGfk"));
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    MyFn();
  }, "edge_component_useVisibleTask_nsxDq4dNsNc"));
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: "Hello World."
  }, 3, "xx_0");
}, "edge_component_n5LhHJp9dAE"));
exports.MyFn = MyFn;
exports.default = edge;
