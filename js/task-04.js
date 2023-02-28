let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
console.log(increment);

decrement.addEventListener("click", (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
});

increment.addEventListener("click", (event) => {
  counterValue += 1;
  value.textContent = counterValue;
});
