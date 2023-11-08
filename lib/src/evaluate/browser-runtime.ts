export const evaluator = (code: string) => {
  return new Function("return " + code)();
};
