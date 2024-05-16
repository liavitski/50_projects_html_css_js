const loader = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let numbers = 0;

const interval = setInterval(load, 30);

function load() {
  numbers++;

  if (numbers === 100) {
    clearInterval(interval);
  }

  loader.innerText = numbers + '%';
  loader.style.opacity = scale(numbers, 0, 100, 1, 0);

  background.style.filter = `blur(${scale(
    numbers,
    0,
    100,
    30,
    0
  )}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (
    ((num - in_min) * (out_max - out_min)) / (in_max - in_min) +
    out_min
  );
};
