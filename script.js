const display = document.querySelector(".display");

let buttonContent = "";
const add = function(num1, num2) {
  buttonContent = num1 + num2;
  console.log(buttonContent)
}

const subtract = function(num1, num2) {
  buttonContent = num1 - num2;
}

const multiply = function(num1, num2) {
  buttonContent = num1 * num2;
  console.log(buttonContent)
}

const divide = function(num1, num2) {
  buttonContent = num1 / num2;
}

let num1;
let num2;
let operator;

const operate = function(num1, num2, operator) {
  if (operator === "+"){
    add(num1, num2);
  } else if (operator === "-"){
    subtract(num1, num2);
  } else if (operator === "x"){
    multiply(num1, num2);
  } else if (operator === "÷"){
    divide(num1, num2);
  }
}

const events = function() {
  
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const text = e.target.textContent;
      if (text === "="){
       userInput(buttonContent);
       display.textContent = buttonContent;
      } else if (text === "AC") {
        buttonContent = "";
        display.textContent = "";


      } else  {
      buttonContent += (text);
      display.textContent = buttonContent;
      }
    });
  });
}

const userInput = function(buttonContent) {
  let num1 = Number(buttonContent.match(/\d*/).join(""));
  let num2 = Number(buttonContent.match(/(?<=[+|\-|÷|x]).*/).join(""));
  let operator = buttonContent.match(/[+|\-|÷|x]/).join("");
  console.log(num1, num2, operator);
  operate(num1, num2, operator);
}





events()