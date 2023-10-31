//Напиши скрипт, який змінює кольори фону елемента
// <body> через інлайн-стиль по кліку на button.change-color
// і виводить значення кольору в span.color.
const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorCode = document.querySelector(".color");
function getRandomHexColor() {
  const mathColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  bodyEl.style.backgroundColor = mathColor;
  colorCode.textContent = mathColor;
}
btnEl.addEventListener("click", getRandomHexColor);
