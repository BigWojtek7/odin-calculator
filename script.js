const add = function(num1, num2) {
  return num1 + num2;
}

const subtract = function(num1, num2) {
  return num1 - num2;
}

const multiply = function(num1, num2) {
  return num1 * num2;
}

const divide = function(num1, num2) {
  return num1 / num2;
}

let num1;
let num2;
let operator;

const operate = function(num1, num2, operator) {
  if (operator === "+"){
    add(num1, num2);
  } else if (operator === "-"){
    subtract(num1, num2);
  } else if (operator === "*"){
    multiply(num1, num2);
  } else if (operator === "/"){
    divide(num1, num2);
  }
}