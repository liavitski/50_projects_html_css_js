const modeEl = document.querySelector('.mode-btn');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const htmlEl = document.querySelector('html');

// State variables to track cumulative rotation
let previousHourRotation = 0;
let previousMinuteRotation = 0;
let previousSecondRotation = 0;

modeEl.addEventListener('click', (e) => {
  if (htmlEl.classList.contains('dark')) {
    htmlEl.classList.remove('dark');
    modeEl.innerText = 'Dark mode';
  } else {
    htmlEl.classList.add('dark');
    modeEl.innerText = 'Light mode';
  }
});

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const monthsOfYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

setTime();
setInterval(setTime, 1000);

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${mapRange(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${mapRange(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${mapRange(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? '0' + minutes : minutes
  } ${ampm}`;

  dateEl.innerHTML = `${daysOfWeek[day]}, ${monthsOfYear[month]} <span>${day}</span>`;
}

function mapRange(value, min1, max1, min2, max2) {
  return ((value - min1) * (max2 - min2)) / (max1 - min1) + min2;
}
