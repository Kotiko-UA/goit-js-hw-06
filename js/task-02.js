const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientItemListEl = [];

ingredients.forEach((ingredient) => {
  const addInredientEl = document.createElement('li');

  addInredientEl.textContent = `${ingredient}`;

  addInredientEl.classList.add('item');

  ingredientItemListEl.push(addInredientEl);
});

const allIngridientsEl = document.querySelector('#ingredients');
allIngridientsEl.append(...ingredientItemListEl);
console.log(allIngridientsEl);
