const display = document.querySelector(".display");

let count = 0;

let mathResult = "";
let displayContent = "";

const add = function(num1, num2) {
  mathResult = num1 + num2;
  console.log(mathResult)
}

const subtract = function(num1, num2) {
  mathResult = num1 - num2;
}

const multiply = function(num1, num2) {
  mathResult = num1 * num2;
  console.log(mathResult)
}

const divide = function(num1, num2) {
  mathResult = num1 / num2;
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
      const input = e.target.textContent;
      if (input === "="){
      //  userInput(mathResult);
       display.textContent = mathResult;
      } else if (input === "AC") {
        displayContent = "";
        mathResult = "";
        display.textContent = "";
        count = 0;
      } else if (input === "+" || input === "-" || input === "÷" ||input === "x" ){
        if (count === 0){
          console.log(count)
          mathResult += input;
          count++
          console.log(count, mathResult)
        } else if (count > 0){
          displayContent = mathResult;
          mathResult += input;
          display.textContent = displayContent;
          // userInput(mathResult);
          // display.textContent = mathResult; 

        }
      } else if(count === 0)  {
        mathResult += input;
        displayContent = input;
        display.textContent = displayContent;
      } else if(count > 0){
        mathResult += input;
        displayContent = input;
        userInput(mathResult);
        // display.textContent = mathResult; 
      }
    });
  });
}

const userInput = function(matchResult) {
  console.log("2", mathResult)
  let num1 = Number(matchResult.match(/\d*/).join(""));
  let num2 = Number(mathResult.match(/(?<=[+|\-|÷|x]).*/).join(""));
  let operator = mathResult.match(/[+|\-|÷|x]/).join("");
  console.log(num1, num2, operator);
  operate(num1, num2, operator);
}





events()