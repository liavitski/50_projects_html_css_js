const sounds = [
  'applause',
  'boo',
  'gasp',
  'tada',
  'victory',
  'wrong',
];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add(sound);
  btn.innerText = sound;

  btn.addEventListener('click', playSound);

  document.body.appendChild(btn);
  // document.querySelector('body').appendChild(btn);
});

function playSound(e) {
  const currentBtnClass = e.target.className;
  const sound = document.getElementById(currentBtnClass);

  stopSongs();
  sound.play();
}

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
