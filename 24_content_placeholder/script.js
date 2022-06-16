const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name_s = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="pic/Camille_Pissarro.jpg" alt="">'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, quaerat?'
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
  name_s.innerHTML = 'John Doe'
  date.innerHTML = 'Oct 08, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
