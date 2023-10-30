// 1). під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// кількість символів в інпуті, в його атрибуті data-length.

// правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
  

const inpEl = document.querySelector('#validation-input')
inpEl.style.border = '3px solid #bdbdbd'
inpEl.addEventListener('blur', () => {
    if(inpEl.value.length === Number(inpEl.dataset.length)){
        inpEl.style.borderColor = "#4caf50"
         } else {inpEl.style.borderColor = "#f44336"}
         
})
