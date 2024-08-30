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
    console.log("Pierwszy: " + firstNumber);
    console.log("Drugi: " + secondNumber);
  });
});

let operator = document.querySelectorAll(".operator");

operator.forEach((oper) => {
  oper.addEventListener("click", catchOperetor);
});

// catching selected operator //
function catchOperetor(oper) {
  selectedOperator = oper.target.value;
  console.log(selectedOperator);
}

function calculate() {}

let equality = document.getElementById("result");

equality.addEventListener("click", () => {
  console.log(equality.value);
});
