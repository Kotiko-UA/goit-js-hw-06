function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  buttonEl: document.querySelector('.change-color'),
  textCollorEl: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  refs.bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  refs.textCollorEl.textContent = `${getRandomHexColor()}`;
}
