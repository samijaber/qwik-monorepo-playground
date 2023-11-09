import o from "isolated-vm";
const r = (t) => {
  const e = new o.Isolate({ memoryLimit: 128 }), n = e.createContextSync();
  return e.compileScriptSync(t).runSync(n);
};
function u(t) {
  return r(t);
}
export {
  u as evaluate
};
