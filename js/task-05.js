const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInput);

function onInput(event) {
  if (!event.currentTarget.value.length) {
    refs.output.textContent = 'Anonymous';
  } else {
    refs.output.textContent = event.currentTarget.value;
  }
}
