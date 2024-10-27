// Elements
const passInput = document.querySelector('[name="userPass"]');
const eyeIcon = document.querySelector('[alt="eye icon"]');

// Events
let mode = 'locked';
eyeIcon.addEventListener('click', () => {
  if (mode === 'locked') {
    passInput.type = 'text';
    eyeIcon.src = './assets/icons/hidden.svg';
    mode = 'unlocked';
  }else {
    passInput.type = 'password';
    eyeIcon.src = './assets/icons/visible.svg';
    mode = 'locked';
  }
});