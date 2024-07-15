const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const inputColor = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const spanSize = document.getElementById('size');

let size = 20;
let color = 'black';
let x;
let y;
let isPressed = false;

console.dir(canvas);

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

increase.addEventListener('click', () => {
  if (size < 50) {
    size += 10;
    spanSize.innerText = size;
  }
});

decrease.addEventListener('click', () => {
  if (size > 10) {
    size -= 10;
    spanSize.innerText = size;
  }
});

inputColor.addEventListener('input', (e) => {
  color = e.target.value;
});

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = null;
  y = null;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
