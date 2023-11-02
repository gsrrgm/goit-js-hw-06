

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.querySelector("#ingredients");

// createMarkup(ingredients);
// function createMarkup(array) {

//   const nodeArray = array.map((ingridient) => {

//     const liItem = document.createElement("li");
//     liItem.textContent = `${ingridient}`;
//     liItem.classList.add("item");
//     return liItem;
//   });

//   ulList.append(...nodeArray);
// }



  const nodeArray = ingredients.map((ingridient) => {

    const liItem = document.createElement("li");
    liItem.textContent = `${ingridient}`;
    liItem.classList.add("item");
    return liItem;
  });

  ulList.append(...nodeArray);

