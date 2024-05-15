const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('#search-input');
const searchWrapper = document.querySelector('.search-wrapper');

searchBtn.addEventListener('click', () => {
  searchWrapper.classList.toggle('open');
  searchInput.focus();
});
