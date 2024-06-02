const cups = document.querySelectorAll('.cup');
const liters = document.querySelector('#liters');
const persentage = document.getElementById('persentage');
const remained = document.getElementById('remained');

updateBigCup();

cups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    cups[idx].classList.contains('selected') &&
    (idx === cups.length - 1 ||
      !cups[idx].nextElementSibling.classList.contains('selected'))
  ) {
    idx--;
  }

  cups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('selected');
    } else {
      cup.classList.remove('selected');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup.selected').length;
  const totalCups = cups.length;

  if (fullCups === 0) {
    persentage.style.visibility = 'hidden';
    persentage.style.height = 0;
  } else {
    persentage.style.visibility = 'visible';
    persentage.style.height = `${(fullCups / totalCups) * 300}px`;
    persentage.innerText =
      +Math.ceil((fullCups / totalCups) * 100) + '%';
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (fullCups / totalCups) * 2} L`;
  }
}