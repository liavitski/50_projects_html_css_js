const openEls = document.querySelectorAll('.open');
const closeEls = document.querySelectorAll('.close');

openEls.forEach((open) => {
  open.addEventListener('click', (e) => {
    // const currentCard = e.target.closest('.card');
    // currentCard.classList.add('visible');
    open.parentNode.classList.toggle('visible');
  });
});

closeEls.forEach((close) => {
  close.addEventListener('click', (e) => {
    // const currentCard = e.target.closest('.card.visible');
    // currentCard.classList.remove('visible');
    close.parentNode.classList.toggle('visible');
  });
});
