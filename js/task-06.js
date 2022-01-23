const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    inputEl.classList.add('invalid');
    if (event.currentTarget.value.length === Number(inputLength)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
}