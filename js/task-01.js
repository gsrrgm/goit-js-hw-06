


const itemEl = document.querySelectorAll('.item')
console.log(` Number of categories: ${itemEl.length}`);

itemEl.forEach(element => {
    const categoryName = element.querySelector('h2')
    console.log(`Category: ${categoryName.textContent}`);
    const categoryLength = element.querySelectorAll('li')
    console.log(`Elements: ${categoryLength.length}`);

});

