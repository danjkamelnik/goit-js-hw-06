const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((item) => {
  const titleEl = item.firstElementChild;
  console.log(`Category: ${titleEl.textContent}`);
  const elements = item.lastElementChild.children;
  console.log(`Elements: ${elements.length}`);
});
