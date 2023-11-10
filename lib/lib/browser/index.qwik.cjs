"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
function MyFn() {
  console.log("Browser MyFn");
}
const browser = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    MyFn();
  }, "browser_component_useTask_t9h2T1Yym8Y"));
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    MyFn();
  }, "browser_component_useVisibleTask_pmr8yigr9jQ"));
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: "Hello World."
  }, 3, "ci_0");
}, "browser_component_kckC8kNg5Sk"));
exports.MyFn = MyFn;
exports.default = browser;
