const slides = document.querySelectorAll('.slide');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');
const body = document.querySelector('body');

let activeSlide = 0;

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage =
    slides[activeSlide].style.backgroundImage;
}

function updateSlide(direction) {
  slides[activeSlide].classList.remove('active');

  if (direction == 'right') {
    if (activeSlide < slides.length - 1) {
      activeSlide++;
    } else {
      activeSlide = 0;
    }
  } else if (direction == 'left') {
    if (activeSlide <= 0) {
      activeSlide = slides.length - 1;
    } else {
      activeSlide--;
    }
  }

  slides[activeSlide].classList.add('active');
  body.style.backgroundImage =
    slides[activeSlide].style.backgroundImage;
}

btnLeft.addEventListener('click', () => updateSlide('left'));
btnRight.addEventListener('click', () => updateSlide('right'));

window.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowRight') {
    updateSlide('left');
  } else if (e.key == 'ArrowLeft') {
    updateSlide('right');
  }
});
