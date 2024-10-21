// Elements
const likeBtn = document.querySelector('.like');
const heartImg = likeBtn.querySelector('img');

// Events
let isClicked = false;

likeBtn.addEventListener('click', () => {
  if (!isClicked) {
    heartImg.src = './assets/icons/liked.svg';
    isClicked = !isClicked;
  } else {
    heartImg.src = './assets/icons/like.svg';
    isClicked = !isClicked;
  }
});