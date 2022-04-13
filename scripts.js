const menuNav = document.querySelector('.headline-nav');
const menuBtn = document.querySelector('.bars-menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle('active');
  body.classList.toggle('overflow-disabled');
});