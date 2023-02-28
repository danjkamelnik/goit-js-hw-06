const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const listItemEl = document.createElement("li");
  listEl.append(listItemEl);
  listItemEl.classList.add("item");
  listItemEl.append(element);
});
