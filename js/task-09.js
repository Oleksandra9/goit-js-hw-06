function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const refs = {
  bodyEl : document.querySelector("body"),
  spanEl : document.querySelector(".color"),
  btnCgangeColorEl: document.querySelector(".change-color")
}

console.log(refs.btnCgangeColorEl);
console.log(refs.spanEl);
console.log(refs.bodyEl);

refs.btnCgangeColorEl.addEventListener("click",onChangeColor);
function onChangeColor () {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
}