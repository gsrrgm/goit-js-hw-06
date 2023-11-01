// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const counter = document.querySelector("#counter");
const value = document.querySelector("#value");
const handleClick = (event) => {
  if (!event.target.hasAttribute("data-action")) {
    return;
  }
  counterValue += Number(event.target.textContent);
  value.textContent = counterValue;
};

counter.addEventListener("click", handleClick);
