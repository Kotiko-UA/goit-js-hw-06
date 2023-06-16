function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  inputEl: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
};

refs.inputEl.addEventListener('change', onInputValue);
let counter = 0;
function onInputValue(event) {
  counter = event.currentTarget.value;
}

const arrDivEl = [];

refs.buttonCreate.addEventListener('click', () => createBoxes(counter));
function createBoxes(amount) {
  let sizeDivEl = 30;

  for (let i = 0; i < amount; i += 1) {
    arrDivEl.push(
      `<div style ='width:${sizeDivEl + 10 * i}px; height:${
        sizeDivEl + 10 * i
      }px;background-color: ${getRandomHexColor()};'></div>`
    );
  }
  refs.boxEl.innerHTML = '';
  refs.boxEl.insertAdjacentHTML('beforeend', arrDivEl.join(''));
  arrDivEl.length = 0;
}

refs.buttonDestroy.addEventListener('click', onDestroyButton);

function onDestroyButton() {
  refs.boxEl.innerHTML = '';
}
