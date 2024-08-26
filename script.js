const html = document.querySelector('html');
const button = document.querySelector('.bx-sun');

button.addEventListener('click', () => {
  html.classList.toggle('light');
});
