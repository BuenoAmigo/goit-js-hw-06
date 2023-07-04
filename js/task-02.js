const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const products = ingredients.map(ingredient => {
  const product = document.createElement("li");

  product.classList.add("item");

  product.textContent = ingredient;
  return product;
})

const allIngridients = document.querySelector("ul");
allIngridients.append(...products)