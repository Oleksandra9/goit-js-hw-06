const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector("#ingredients");
// console.log(ulEl);



const elements = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList.add("item");
  liEl.textContent = `${ingredient}`;  
  // console.log(liEl);
  return liEl;
  
});
console.log(elements);

ulEl.append(...elements);