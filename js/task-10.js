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

refs.buttonCreate.addEventListener('click', createBoxes);

refs.inputEl.addEventListener('change', onInputValue);

function onInputValue(event) {
  event.currentTarget.value;
}
const arrDivEl = [];
function createBoxes(amount) {
  let sizeDivEl = 30;

  for (let i = 0; i < amount; i += 1) {
    arrDivEl.push(
      `<div style ='width:${sizeDivEl + 10 * i}px; height:${
        sizeDivEl + 10 * i
      }px;background-color: ${getRandomHexColor()};'></div>`
    );
  }
}
createBoxes(6);
refs.boxEl.insertAdjacentHTML('beforeend', arrDivEl.join(''));
console.log(refs.boxEl);
