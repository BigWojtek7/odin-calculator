const display = document.querySelector(".display");

let count = 0;

let mathResult = "";
let displayContent = "";

const add = function(num1, num2) {
  mathResult = num1 + num2;
  console.log("3", mathResult)
}

const subtract = function(num1, num2) {
  mathResult = num1 - num2;
}

const multiply = function(num1, num2) {
  mathResult = Math.round((num1 * num2) * 1000) / 1000
  console.log("5", mathResult)
}

const divide = function(num1, num2) {
  if (num2 === 0){
    mathResult = "Very Funny :)"
  } else {
    mathResult = Math.round((num1 / num2) * 100000) / 100000
    console.log(mathResult)
  }
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
  const dot = document.querySelector("#dot")
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const input = e.target.textContent;
      if (input === "="){
       userInput(mathResult);
       displayContent = mathResult
       display.textContent = displayContent;
       dot.disabled = false;
      } else if (input === "AC") {
        displayContent = "";
        mathResult = "";
        display.textContent = "";
        count = 0;
        dot.disabled = false;
      } else if (input === "."){
        mathResult += input;
        displayContent += input;
        display.textContent = displayContent;
        dot.disabled = true;

      } else if (input === "+" || input === "-" || input === "÷" ||input === "x" ){
        if (count === 0){
          console.log(count)
          mathResult += input;
          count++
          displayContent = "";
          dot.disabled = false;
          console.log(count, mathResult)

        } else if (count > 0){
          userInput(mathResult)
          displayContent = mathResult;
          mathResult += input;
          display.textContent = displayContent;
          displayContent = "";
          dot.disabled = false;

        }
      } else if(count === 0)  {
        mathResult += input;
        displayContent += input;
        console.log("1", displayContent)
        display.textContent = displayContent;
      } else if(count > 0){
        mathResult += input;
        displayContent += input;
        display.textContent = displayContent;
        
      }
    });
  });
}

const userInput = function(matchResult) {
  console.log("2", mathResult)
  let num1 = Number(matchResult.match(/\d*\.?\d/).join(""));
  let num2 = Number(mathResult.match(/(?<=[+|\-|÷|x]).*/).join(""));
  let operator = mathResult.match(/[+|\-|÷|x]/).join("");
  console.log(num1, num2, operator);
  operate(num1, num2, operator);
}





events()