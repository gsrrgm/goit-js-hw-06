const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// images.forEach((element) => {
//   const urlEl = element.url;
//   const altEl = element.alt;
//   const liEl = `<li "><img src="${urlEl}" alt="${altEl}"></li>`;
//   const ulEl = document.querySelector(".gallery");
//   ulEl.insertAdjacentHTML("beforeend", liEl);
// });

const list = document.querySelector(".gallery");
creatMarkup(images);
function creatMarkup(arr) {
  const markup = arr
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
    .join("");

  list.insertAdjacentHTML("beforeend", markup);
}
