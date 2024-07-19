const btn = document.querySelector('.btn');
const messagesArea = document.querySelector('.notification-wrapper');

const messagesObj = ['One', 'Two', 'Three', 'Four'];
const colorsObj = [
  'yellow',
  'red',
  'white',
  'deeppink',
  'aqua',
  'blue',
  'grey',
];

btn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.classList.add('notification');
  const randomIndexMsg = Math.floor(
    Math.random() * messagesObj.length
  );
  const randomIndexCol = Math.floor(Math.random() * colorsObj.length);

  div.innerText = `Message ${messagesObj[randomIndexMsg]}`;
  div.style.backgroundColor = `${colorsObj[randomIndexCol]}`;
  messagesArea.appendChild(div);

  setTimeout(() => removingMsg(div), 2000);
});

function removingMsg(message) {
  message.remove();
}
