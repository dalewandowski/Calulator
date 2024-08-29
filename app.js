let numberBtn = document.querySelectorAll(".number-button");

let screen = document.querySelector(".screen");

let firstNumber = "";
let secondNumber = "";
let selectedNumber = "";

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (firstNumber === "") {
      firstNumber = btn.value;
      screen.innerHTML = firstNumber;
    } else {
      secondNumber = btn.value;
      screen.innerHTML = secondNumber;
    }
    console.log("Pierwszy: " + firstNumber);
    console.log("Drugi: " + secondNumber);
  });
});
