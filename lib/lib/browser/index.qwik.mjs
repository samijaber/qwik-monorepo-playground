import { componentQrl, inlinedQrl, useTaskQrl, useVisibleTaskQrl, _jsxC } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik/jsx-runtime";
function MyFn() {
  console.log("Browser MyFn");
}
const browser = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(() => {
  useTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    MyFn();
  }, "browser_component_useTask_t9h2T1Yym8Y"));
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    MyFn();
  }, "browser_component_useVisibleTask_pmr8yigr9jQ"));
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: "Hello World."
  }, 3, "ci_0");
}, "browser_component_kckC8kNg5Sk"));
export {
  MyFn,
  browser as default
};
