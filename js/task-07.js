const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};
refs.inputEl.addEventListener('input', onItput);
function onItput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
