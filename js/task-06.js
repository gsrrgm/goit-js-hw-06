const inpEl = document.querySelector("#validation-input");
//inpEl.classList.add('#validation-input')
inpEl.addEventListener("blur", (event) => {
  const inputLength = event.currentTarget.value.length;
  const dataLength = Number(event.currentTarget.dataset.length);
  if (inputLength === dataLength) {
    inpEl.classList.remove("invalid");
    inpEl.classList.add("valid");
    console.log("valid");
    return;
  }
  inpEl.classList.remove("valid");
  inpEl.classList.add("invalid");
  console.log("invalid");
  return;
});
