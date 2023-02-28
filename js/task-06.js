const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (event.target.value.length < input.dataset.length) {
    event.target.style.borderColor = "#f44336";
  } else {
    event.target.style.borderColor = "#4caf50";
  }
});
