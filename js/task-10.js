function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl : document.querySelector("input"),
  btnCreate : document.querySelector(`[data-create]`),
  btnDestroy : document.querySelector(`[data-destroy]`),
  divBoxesEl : document.querySelector("#boxes")
}

refs.btnCreate.addEventListener("click",getAmount);

function getAmount() {
  let amount = Number(refs.inputEl.value);
  onCreateBoxes(amount);
};

function onCreateBoxes (amount) {
  let widthHeight = 30;
    for (let i = 0; i < amount; i+=1) { 
      widthHeight += 10;
  const newDiv = document.createElement('div');
  newDiv.style.width = `${widthHeight}px`;
  newDiv.style.height = `${widthHeight}px`;
  newDiv.style.background = getRandomHexColor();
  
  refs.divBoxesEl.append(newDiv); 
};
};

refs.btnDestroy.addEventListener("click",onDestroy);
function onDestroy () {
  refs.divBoxesEl.innerHTML= " ";
}
