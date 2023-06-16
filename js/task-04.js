const refs = {
  value: document.querySelector('#value'),
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
};
let counterValue = 0;

refs.buttonDecrement.addEventListener('click', valueDecrement);
refs.buttonIncrement.addEventListener('click', valueIncrement);

function valueDecrement() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function valueIncrement() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
