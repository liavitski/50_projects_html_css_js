const textArea = document.querySelector('#choices');
const choicesWrapper = document.querySelector('#choices-wrapper');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
  handleKeyPress(e.target.value);
  const inputValue = e.target.value.trim();

  if (!inputValue) {
    // choicesWrapper.innerHTML = '';
    return;
  }

  if (e.key == 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function randomSelect() {
  const times = 10;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.choice');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}

function handleKeyPress(input) {
  const textArray = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  choicesWrapper.innerHTML = '';

  textArray.forEach((el) => {
    const p = document.createElement('p');
    p.classList.add('choice');
    p.innerText = el;
    choicesWrapper.appendChild(p);
  });
}
