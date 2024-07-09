const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6419a09ea70087220a8d87a6033faa8b&page=';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=6419a09ea70087220a8d87a6033faa8b&query=';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const pageInfo = document.getElementById('page-info');

let currentPage = 1;
let totalPages = 1;
let currentSearchTerm = '';

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  totalPages = data.total_pages;
  showMovies(data.results);
  updatePageInfo();
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}" />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

function updatePageInfo() {
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();
  if (searchTerm && searchTerm !== '') {
    currentSearchTerm = searchTerm;
    currentPage = 1;
    getMovies(`${SEARCH_API}${searchTerm}&page=${currentPage}`);
    search.value = '';
  } else {
    window.location.reload();
  }
});

prev.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    if (currentSearchTerm) {
      getMovies(`${SEARCH_API}${currentSearchTerm}&page=${currentPage}`);
    } else {
      getMovies(`${API_URL}${currentPage}`);
    }
  }
});

next.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    if (currentSearchTerm) {
      getMovies(`${SEARCH_API}${currentSearchTerm}&page=${currentPage}`);
    } else {
      getMovies(`${API_URL}${currentPage}`);
    }
  }
});

// Get initial movies
getMovies(`${API_URL}${currentPage}`);
