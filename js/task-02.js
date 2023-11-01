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

const ulList = document.querySelector("#ingredients");
console.log("ulList: ", ulList);

ingredients.map((ingridient) => {
  const liItem = document.createElement("li");
  liItem.textContent = `${ingridient}`;
  liItem.classList.add("item");
  ulList.append(liItem);
  return ulList;
});
