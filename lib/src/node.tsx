import ivm from "isolated-vm";

export function MyFn() {
  const isolate = new ivm.Isolate({ memoryLimit: 128 });
  const context = isolate.createContextSync();
  const resultStr = context.evalSync("1+40");

  console.log("Server MyFn: ", resultStr);
}
