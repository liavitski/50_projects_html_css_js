const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 1000);

function run() {
  idx++;
  animate();
}

function animate() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 1000);
}

leftBtn.addEventListener('click', () => {
  idx--;
  animate();
  resetInterval();
});

rightBtn.addEventListener('click', () => {
  idx++;
  animate();
  resetInterval();
});
