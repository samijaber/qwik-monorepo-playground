import Interpreter from "./acorn-interpreter.js";

export const evaluator = (code: string) => {
  const transformed = `
function theFunction() {
  ${code}
}
theFunction();
`;
  const myInterpreter = new Interpreter(transformed);
  myInterpreter.run();
  const output = myInterpreter.pseudoToNative(myInterpreter.value);
  return output;
};
