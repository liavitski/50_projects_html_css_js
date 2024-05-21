const jokeButton = document.querySelector('#jokeBtn');
const paragraph = document.querySelector('#joke');

jokeButton.addEventListener('click', fetchJoke);

fetchJoke();

// function fetchJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com/', config).then((res) =>
//     res.json().then((data) => (paragraph.textContent = data.joke))
//   );
// }

async function fetchJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const response = await fetch(
      'https://icanhazdadjoke.com/',
      config
    );
    const data = await response.json();
    paragraph.textContent = data.joke;
  } catch (error) {
    console.error('Error fetching the joke', error);
  }
}
