import { componentQrl, inlinedQrl, useTaskQrl, useVisibleTaskQrl, _jsxC } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik/jsx-runtime";
import ivm from "isolated-vm";
import { isServer } from "@builder.io/qwik/build";
function MyFn$1() {
  console.log("Browser MyFn");
}
function MyFn() {
  const isolate = new ivm.Isolate({
    memoryLimit: 128
  });
  const context = isolate.createContextSync();
  const resultStr = context.evalSync("1+40");
  console.log("Server MyFn: ", resultStr);
}
const universal = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(() => {
  useTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    if (isServer)
      MyFn();
    else
      MyFn$1();
  }, "universal_component_useTask_E3NS3yp0Qp4"));
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    if (isServer)
      MyFn();
    else
      MyFn$1();
  }, "universal_component_useVisibleTask_0o7Tnqbmti8"));
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: "Hello World."
  }, 3, "oA_0");
}, "universal_component_PP6FhSX8X3w"));
export {
  universal as default
};
