

const inpEl = document.querySelector("#validation-input");

inpEl.addEventListener("blur", (event) => {
  const inputLength = event.currentTarget.value.length;
  const dataLength = Number(event.currentTarget.dataset.length);
  if (inputLength === dataLength) {
    inpEl.classList.add('valid')
    inpEl.classList.replace("invalid", "valid");
    return;
  }
  inpEl.classList.add("invalid");
  
});
