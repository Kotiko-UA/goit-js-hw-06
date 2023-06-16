const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return window.alert('Please fill in all the fields!');
  }
  const formFills = {};
  formFills[email.name] = email.value;
  formFills[password.name] = password.value;
  console.log(formFills);
  event.currentTarget.reset();
}
