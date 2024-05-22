const proposal = document.querySelector('.proposal');
const codesWrapper = document.querySelector('.codes-wrapper');
const eventKeyCard = document.querySelector('#event-key');
const eventKeyCodeCard = document.querySelector('#event-key-code');
const eventCodeCard = document.querySelector('#event-code');

window.addEventListener('keydown', keyPressed);

// function keyPressed(e) {
//   proposal.style.display = 'none';
//   codesWrapper.style.display = 'flex';

//   if (e.key === ' ') {
//     eventKeyCard.textContent = 'Space';
//   }

//   eventKeyCard.textContent = e.key;
//   eventKeyCodeCard.textContent = e.keyCode;
//   eventCodeCard.textContent = e.code;
// }

function keyPressed(event) {
  codesWrapper.innerHTML = `
      <div class="card-wrapper">
        <span>event.key</span>
        <div class="card" id="event-key">${
          event.key === ' ' ? 'Space' : event.key
        }</div>
      </div>

      <div class="card-wrapper">
        <span>event.keyCode</span>
        <div class="card" id="event-key-code">${event.keyCode}</div>
      </div>

      <div class="card-wrapper">
        <span>event.code</span>
        <div class="card" id="event-code">${event.code}</div>
      </div>
    `;
}
