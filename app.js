"use strict";
const firstInput = document.querySelector("#input1");
const secondInput = document.querySelector("#input2");
const button = document.querySelector("button");
const calcular = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
if (button) {
    button.addEventListener("click", () => {
        console.log(calcular(Number(firstInput.value), Number(secondInput.value)));
    });
}
