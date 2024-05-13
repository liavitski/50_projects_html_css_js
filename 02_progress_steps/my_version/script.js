const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const progress = document.querySelector('.progress');
const liElements = document.querySelectorAll('.circle');

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

let circleNumber = 1;

function next() {
  circleNumber++;
  if (circleNumber > liElements.length) {
    circleNumber = liElements.length;
  }

  update();
}

function prev() {
  circleNumber--;
  if (circleNumber < 1) {
    circleNumber = 1;
  }

  update();
}

function update() {
  if (circleNumber === liElements.length) {
    nextBtn.disabled = true;
  } else if (circleNumber === 1) {
    prevBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }

  liElements.forEach((el, idx) => {
    if (circleNumber > idx) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });

  let activeCircles = document.querySelectorAll('.selected').length;
  const allCircles = liElements.length;

  const progressWidth =
    ((activeCircles - 1) / (allCircles - 1)) * 100 + '%';
  progress.style.width = progressWidth;
}
