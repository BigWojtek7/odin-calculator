

const display = document.querySelector(".display");
let count = 0;


let mathResult = "";
let displayContent = "";


const getMouseInput = function() {
  getKeyboardInput()
  const buttons = document.querySelectorAll("button");
  const dot = document.querySelector("#dot")
  buttons.forEach((button) => {
   
    button.addEventListener("click", (e) => {
      button.style.filter = "brightness(130%)"
      setTimeout(() => button.style.filter = "brightness(100%)", 100)

      const input = e.target.textContent;
      if (input === "="){
        saveEqual();
      } else if (input === "AC") {
        allClear();
      } else if (input === "."){
        saveDot(input);
      } else if (input === "C") {
        clear();
      } else if (input === "+" || input === "-" || input === "÷" ||input === "x" ){
        saveOperator(input);
      } else {
        saveNumber(input);   
      }
    });
  });
}

const saveEqual = function (){
  userInput(mathResult);
  displayContent = mathResult;
  display.textContent = displayContent;
  dot.disabled = false;
  count = 0;
  console.log(mathResult)
}

const clear = function (){
  if (count > 0){
    console.log(mathResult)
    mathResult = mathResult.match(/\d*\.?\d*./)[0];
    displayContent = "";
    display.textContent = displayContent;
  } else {
    allClear()
  }
}

const allClear = function () {
  displayContent = "";
  mathResult = "";
  display.textContent = "";
  count = 0;
  dot.disabled = false;
}

const saveDot = function (input) {
  mathResult += input;
  displayContent += input;
  display.textContent = displayContent;
  dot.disabled = true;
}

const saveOperator = function (input) {
  if (count === 0){
    console.log(count)
    mathResult += input;
    count++
    displayContent = "";
    dot.disabled = false;
    dotUse = 0

  } else if (count > 0){
    userInput(mathResult)
    displayContent = mathResult;
    mathResult += input;
    display.textContent = displayContent;
    displayContent = "";
    dot.disabled = false;
    console.log(mathResult)
    dotUse=0;
    console.log(count)

  }

}
const saveNumber = function (input) {
  // if (count === 0) allClear()
  mathResult += input;
  displayContent += input;
  console.log("input", input)
  console.log("co tu sie", displayContent)
  display.textContent = displayContent;
}

const userInput = function(matchResult) {
  console.log("2", mathResult)
  let num1 = matchResult.match(/\d*\.?\d/);
  let num2 = mathResult.match(/(?<=[+|\-|÷|x]).*/);
  let operator = mathResult.match(/[+|\-|÷|x]/);
  if (num1 !== null && num2 !== null && operator !== null){
    if(num2[0] !== ""){
      console.log(num1, num2, operator);
      num1 = Number(num1.join(""));
      num2 = Number(num2.join(""));
      operator = operator.join("");
      console.log(num2);
      operate(num1, num2, operator);      
    } else{
      mathResult = num1[0];
    } 
  }
}

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
    mathResult = "Nice Try :)"
  } else {
    mathResult = Math.round((num1 / num2) * 100000) / 100000
    console.log(mathResult)
  }
}

const getKeyboardInput = function (){
  document.addEventListener("keydown", (e) => {
    
    e.preventDefault();
    if (e.key < 10){
      saveNumber(e.key);
    } else if ( e.key === "Enter"){
      saveEqual();
      dotUse = 0
      console.log("count", count);
    } else if (e.key === "Backspace"){
      clear();
      dotUse = 0;
    } else if (e.key === "."){
      dotUse === 0 ? saveDot(e.key): false;
      dotUse++; 
    }
  });
}


getMouseInput()
