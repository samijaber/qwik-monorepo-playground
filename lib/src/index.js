import ivm from "isolated-vm";

export const evaluate = (code) => {
  const isolate = new ivm.Isolate({ memoryLimit: 128 });
  const context = isolate.createContextSync();
  const script = isolate.compileScriptSync(code);
  const result = script.runSync(context);
  return result;
};
