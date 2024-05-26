const nav = document.querySelector('.navigation');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
