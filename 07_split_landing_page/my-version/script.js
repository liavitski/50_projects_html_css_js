const container = document.querySelector('body');

container.addEventListener('click', resize);

function resize(e) {
  const clickedEl = e.target;
  const bodyContainer = this;
  const elements = bodyContainer.querySelectorAll('section');

  if (Array.from(elements).includes(clickedEl)) {
    // index of clicked el
    const index = Array.from(elements).indexOf(clickedEl);
    // index of neighboring element
    const nearIndex = index === 0 ? 1 : 0;
    // target neighboring element
    const neighboringEl = elements[nearIndex];

    clickedEl.style.flex = 3;
    neighboringEl.style.flex = 1;
  }
}
