const changeBtn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

changeBtn.addEventListener("click", (event) => {
  const getColor = getRandomHexColor();
  document.body.style.backgroundColor = getColor;
  spanEl.textContent = getColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
