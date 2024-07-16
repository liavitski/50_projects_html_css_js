const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll(
  '.animated-bg-text'
);

setTimeout(getDate, 2000);

function getDate() {
  header.innerHTML = `<img
    src="/24_content_placeholder/pic/Camille_Pissarro.jpg"
    alt="test image"/>`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.`;
  profile_img.innerHTML = ` <img
  src="/05_blurry_loading/pic/IMG_4403.JPG"
  alt=""/>`;
  name.innerHTML = `John Doe`;
  date.innerHTML = `Oct, 08, 2024`;

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) =>
    bg.classList.remove('animated-bg-text')
  );
}
