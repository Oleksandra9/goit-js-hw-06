const categoriesList = document.querySelectorAll(".item");
// console.log(categoriesList);
const numberOfCategory = categoriesList.length;
console.log(`Number of categories: ${numberOfCategory};`);

categoriesList.forEach(number => {
    
    const h2El = number.querySelector("h2");
    const liEl = number.querySelectorAll("li");

    console.log(` - Category: ${h2El.textContent}, Elements: ${liEl.length};`);
  });
