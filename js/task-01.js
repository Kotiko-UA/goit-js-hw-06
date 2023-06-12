const allCategoriesEl = document.querySelector('#categories');
const allCategoriesListEl = allCategoriesEl.children.length;
console.log('Number of categories:', allCategoriesListEl);
const allItemListEl = document.querySelectorAll('.item');
allItemListEl.forEach((element) => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});
