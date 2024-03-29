const display = document.querySelector(".display");
let count = 0;
let equalNumber = 0;

let mathResult = "";
let displayContent = "";

const getMouseInput = function () {
  getKeyboardInput();
  const buttons = document.querySelectorAll("button");
  const dot = document.querySelector("#dot");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      button.style.filter = "brightness(130%)";
      setTimeout(() => (button.style.filter = "brightness(100%)"), 100);

      const input = e.target.textContent;
      if (input === "=") {
        saveEqual();
      } else if (input === "AC") {
        allClear();
      } else if (input === ".") {
        saveDot(input);
      } else if (input === "C") {
        clear();
      } else if (
        input === "+" ||
        input === "-" ||
        input === "÷" ||
        input === "x"
      ) {
        saveOperator(input);
      } else {
        saveNumber(input);
      }
    });
  });
};

const saveEqual = function () {
  userInput(mathResult);
  displayContent = mathResult;
  display.textContent = displayContent;
  dot.disabled = false;
  count = 0;
  equalNumber++;
};

const clear = function () {
  if (count > 0) {
    mathResult = mathResult.match(/\d*\.?\d*./)[0];
    displayContent = "";
    display.textContent = displayContent;
    display.textContent = "0";
  } else {
    allClear();
  }
};

const allClear = function () {
  displayContent = "";
  mathResult = "";
  display.textContent = "";
  count = 0;
  equalNumber = 0;
  dot.disabled = false;
  display.textContent = "0";
};

const saveDot = function (input) {
  mathResult += input;
  displayContent += input;
  display.textContent = displayContent;
  dot.disabled = true;
};

const saveOperator = function (input) {
  if (count === 0) {
    mathResult += input;
    count++;
    displayContent = "";
    dot.disabled = false;
    dotUse = 0;
    equalNumber = 0;
  } else if (count > 0) {
    userInput(mathResult);
    displayContent = mathResult;
    mathResult += input;
    display.textContent = displayContent;
    displayContent = "";
    dot.disabled = false;
    dotUse = 0;
    equalNumber = 0;
  }
};
const saveNumber = function (input) {
  if (equalNumber === 1) allClear();
  mathResult += input;
  displayContent += input;
  display.textContent = displayContent;
};

const userInput = function (matchResult) {
  let num1 = matchResult.match(/\d*\.?\d/);
  let num2 = mathResult.match(/(?<=[+|\-|÷|x]).*/);
  let operator = mathResult.match(/[+|\-|÷|x]/);
  if (num1 !== null && num2 !== null && operator !== null) {
    if (num2[0] !== "") {
      num1 = Number(num1.join(""));
      num2 = Number(num2.join(""));
      operator = operator.join("");
      operate(num1, num2, operator);
    } else {
      mathResult = num1[0];
    }
  }
};

const operate = function (num1, num2, operator) {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "x") {
    multiply(num1, num2);
  } else if (operator === "÷") {
    divide(num1, num2);
  }
};

const add = function (num1, num2) {
  mathResult = num1 + num2;
  if (mathResult > 99999999) mathResult = changeToExponential(mathResult);
};

const subtract = function (num1, num2) {
  mathResult = num1 - num2;
};

const multiply = function (num1, num2) {
  mathResult = Math.round(num1 * num2 * 100000) / 100000;
  if (mathResult > 99999999) mathResult = changeToExponential(mathResult);
};

const divide = function (num1, num2) {
  if (num2 === 0) {
    mathResult = "Nice Try :)";
  } else {
    mathResult = Math.round((num1 / num2) * 100000) / 100000;
  }
};

const getKeyboardInput = function () {
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key < 10) {
      saveNumber(e.key);
    } else if (e.key === "Enter") {
      saveEqual();
      dotUse = 0;
    } else if (e.key === "Backspace") {
      clear();
      dotUse = 0;
    } else if (e.key === ".") {
      dotUse === 0 ? saveDot(e.key) : false;
      dotUse++;
    }
  });
};

const changeToExponential = function (number) {
  return (number = number.toExponential(3));
};

getMouseInput();
