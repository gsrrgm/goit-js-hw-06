// Створить окремий елемент <li>.
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у 
// список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach(element => {
  const liEl = document.createElement('li')
  const ulEl = document.querySelector("#ingredients")
  liEl.textContent = element 
  liEl.classList.add('item')
  ulEl.append(liEl)
  console.log(liEl)
});