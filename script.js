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
  } else if (operator === "÷"){
    divide(num1, num2);
  }
}

const events = function() {
  let buttonContent = "";
  const buttons = document.querySelectorAll("button");
  const display = document.querySelector(".display")

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.textContent === "=") userInput(buttonContent);
      buttonContent += (e.target.textContent);
  
      display.textContent = buttonContent;
    });
  });
}

const userInput = function(buttonClick) {
  let num1 = Number(buttonClick.match(/\d*/).join(""));
  let num2 = Number(buttonClick.match(/(?<=[+|\-|÷|x]).*/).join(""));
  let operator = buttonClick.match(/[+|\-|÷|x]/).join("");
  console.log(typeof num1, typeof num2, typeof operator);
  operate(num1, num2, operator);
}





events()