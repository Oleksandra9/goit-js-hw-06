
const refs = {
    decrBtnEl : document.querySelector('[data-action="decrement"]'),
    incrBtnEl : document.querySelector(`[data-action="increment"]`),
    spanValueEl: document.querySelector("#value")
}

let counterValue = 0;

refs.decrBtnEl.addEventListener("click",descrement);
function descrement (){
    counterValue -= 1;
    refs.spanValueEl.textContent = counterValue;
    refs.decrBtnEl.classList.add("color-step-minus");
}

refs.incrBtnEl.addEventListener("click",increment);
function increment() {
    counterValue += 1;
    refs.spanValueEl.textContent = counterValue;
    refs.incrBtnEl.classList.add("color-step-plus");

}