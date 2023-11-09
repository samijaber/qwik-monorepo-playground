const t = (n) => new Function("return " + n)();
function e(n) {
  return t(n);
}
export {
  e as evaluate
};
