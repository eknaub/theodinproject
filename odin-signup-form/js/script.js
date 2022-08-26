const myForm = document.querySelector('#myForm');
myForm.addEventListener('submit', validate);

function validate() {
  let confirmPassword = document.querySelector('#confirmPassword');
  let password = document.querySelector('#password');
  let errorMsg = document.querySelector('.passwordError');
  if(confirmPassword.value !== password.value) {
    confirmPassword.classList.add('error');
    password.classList.add('error');
    errorMsg.classList.add('passwordErrorShow');
    return false;
  }
  confirmPassword.classList.remove('error');
  password.classList.remove('error');
  errorMsg.classList.remove('passwordErrorShow');
  return true;
}