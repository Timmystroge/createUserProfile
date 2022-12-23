const pi = 3.1415962;

function doublePi(text) {
  return pi * text;
}
function tripplePi(text) {
  return pi * text;
}

// simple calculation

function add(n1, n2) {
  return n1 + n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function subtract(n1, n2) {
  return n1 - n2;
}
function divide(n1, n2) {
  return n1 / n2;
}

export { pi as default, doublePi, tripplePi, add, multiply, subtract, divide };
