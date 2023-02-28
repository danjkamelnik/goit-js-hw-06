const control = document.querySelector("#font-size-control");
const text = document.querySelector("span#text");

control.addEventListener("input", (event) => {
  const newSize = event.target.value;
  text.style.fontSize = `${newSize}px`;
});
