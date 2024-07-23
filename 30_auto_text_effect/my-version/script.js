const text = document.querySelector('.text');
const input = document.getElementById('speed');

const banner = 'We Love Programming!';
let index = 0;
const speeds = [200, 150, 100, 50];
let speed = speeds[0];

function createBanner() {
  if (index < banner.length) {
    text.textContent += banner[index];
    index++;
    setTimeout(createBanner, speed);
  } else {
    index = 0;
    text.textContent = '';
    setTimeout(createBanner, speed);
  }
}

input.addEventListener('input', function () {
  speed = speeds[this.value - 1];
});

createBanner();
