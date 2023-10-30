// 1. Обробка відправлення форми form.login-form повинна 
//       відбуватися відповідно до події submit.

// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.

// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//          що всі поля повинні бути заповнені.

// 4. Якщо користувач заповнив усі поля і відправив форму, 
//   збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
//   а значення поля - значенням властивості. 
//    Для доступу до елементів форми використовуй властивість elements.

// 5. Виведи об'єкт із введеними даними в консоль 
//       і очисти значення полів форми методом reset.

const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (email === "" || password === "") {
      return alert("Please fill in all the fields!");
    }
      const formObject = {
        email: `${email}`, 
        password: `${password}`
      }
      console.log(formObject);
    // console.log(formObject);
    form.reset();
  }

