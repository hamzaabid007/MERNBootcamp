function zero(num) {
  return num ? num(0) : 0;
}

function one(num) {
  return num ? num(1) : 1;
}

function two(num) {
  return num ? num(2) : 2;
}

function three(num) {
  return num ? num(3) : 3;
}

function four(num) {
  return num ? num(4) : 4;
}

function five(num) {
  return num ? num(5) : 5;
}

function six(num) {
  return num ? num(6) : 6;
}

function seven(num) {
  return num ? num(7) : 7;
}

function eight(num) {
  return num ? num(8) : 8;
}
function nine(num) {
  return num ? num(9) : 9;
}

function add(param) {
  return (param1) => param1 + param;
}

function multiply(param) {
  return (param1) => param1 * param;
}

function minus(param) {
  return (param1) => param1 - param;
}

function divide(param) {
  return (param1) => param1 / param;
}

// Callback functions

console.log(nine(minus(eight())));

console.log(zero(multiply(nine())));

console.log(two(divide(four())));

console.log(three(add(six())));
