import * as ivm from "isolated-vm";

export const evaluator = (code: string) => {
  const isolate = new ivm.Isolate({ memoryLimit: 128 });
  const context = isolate.createContextSync();
  const script = isolate.compileScriptSync("1 + 2");
  const result = script.runSync(context);
  return result;
};
