const cards = document.querySelectorAll('.card');
console.log(cards);

cards.forEach((card) => {
  card.addEventListener('click', showImage);
});

function showImage(e) {
  const card = e.currentTarget;
  const p = card.querySelector('p');
  if (card.classList.contains('selected')) {
    card.classList.remove('selected');
    p.style.opacity = 0;
  } else {
    removeActiveClasses();
    card.classList.add('selected');
    p.style.opacity = 1;
  }
}

function removeActiveClasses(e) {
  cards.forEach((card) => {
    const p = card.querySelector('p');
    card.classList.remove('selected');
    p.style.opacity = 0;
  });
}
