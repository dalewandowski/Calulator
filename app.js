let numberBtn = document.querySelectorAll(".number-button");

let screen = document.querySelector(".screen");

let firstNumber = "";
let secondNumber = "";

let selectedOperator = null;

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (selectedOperator == null) {
      firstNumber += btn.value;
      screen.innerHTML = firstNumber;
    } else {
      secondNumber += btn.value;
      screen.innerHTML = secondNumber;
    }

    console.log("First: ", firstNumber);
    console.log("Second: ", secondNumber);
  });
});

let operator = document.querySelectorAll(".operator");

operator.forEach((oper) => {
  oper.addEventListener("click", catchOperetor);
});

// catching selected operator //
function catchOperetor(oper) {
  selectedOperator = oper.target.value;

  console.log("Operator: ", selectedOperator);
}

function calculate() {
  let calculateResult = 0;
  let fNumber = parseFloat(firstNumber);
  let sNumber = parseFloat(secondNumber);
  switch (selectedOperator) {
    case "+":
      calculateResult = fNumber + sNumber;
      screen.innerHTML = calculateResult;
      break;
    case "-":
      calculateResult = fNumber - sNumber;
      screen.innerHTML = calculateResult;
      break;
    case "*":
      calculateResult = fNumber * sNumber;
      screen.innerHTML = calculateResult;
      break;
    case "/":
      calculateResult = fNumber / sNumber;
      screen.innerHTML = calculateResult;
      if (sNumber == 0) {
        screen.innerHTML = "ERROR";
      }
      break;
  }
  if (calculateResult) {
    firstNumber = calculateResult;
    secondNumber = "";
    firstNumber += secondNumber;
  }
  console.log("Result: ", calculateResult);
}

let equality = document.getElementById("result");

equality.addEventListener("click", calculate);

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  selectedOperator = null;
  screen.innerHTML = "0";
});
