"use strict";
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const ivm = require("isolated-vm");
const build = require("@builder.io/qwik/build");
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
const universal = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    if (build.isServer)
      MyFn();
    else
      MyFn$1();
  }, "universal_component_useTask_E3NS3yp0Qp4"));
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    if (build.isServer)
      MyFn();
    else
      MyFn$1();
  }, "universal_component_useVisibleTask_0o7Tnqbmti8"));
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: "Hello World."
  }, 3, "oA_0");
}, "universal_component_PP6FhSX8X3w"));
module.exports = universal;
