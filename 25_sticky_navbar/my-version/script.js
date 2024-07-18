const nav = document.querySelector('header');

window.addEventListener('scroll', fixNav);

function fixNav() {
  console.log(window.scrollY, nav.offsetHeight);
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add('header-active');
  } else {
    nav.classList.remove('header-active');
  }
}
