import Notiflix from 'notiflix';
import { libraryRefs } from './libraryRefs';
import { ThemoviedbAPI } from './themoviedbAPI';
import { spinnerPlay, spinnerStop } from './spiner';
import { scrollFunction } from './scroll';
import { createModalMarkUp } from './renderModalMarkUp';
import { renderLibraryMarkup } from './renderLibraryMarkUp';
import { getTrailer } from './getTrailer';
import {  load, removeLocal } from './localStorageuse';



// fised bug

const themoviedbAPI = new ThemoviedbAPI();

libraryRefs.watchBtn.classList.add('is-active-library');


try {
  spinnerPlay();
  renderWatchedMovies();
  window.addEventListener('scroll', scrollFunction);

} catch (error) {
  Notify.failure('Ооps, something went wrong, please try again');
} finally {
  spinnerStop();
}

libraryRefs.watchBtn.addEventListener('click', () => {
  libraryRefs.queueBtn.classList.remove('is-active-library');
  libraryRefs.watchBtn.classList.add('is-active-library');
  renderWatchedMovies();
});

libraryRefs.queueBtn.addEventListener('click', () => {
  libraryRefs.watchBtn.classList.remove('is-active-library');
  libraryRefs.queueBtn.classList.add('is-active-library');
  renderQueueMovies();
});

libraryRefs.library.addEventListener('click', onMovieCardClick);


// export?
 function displayBg(array) {
  const emptyTitle = document.querySelector('.js-title-queue');
  const emptyImg = document.querySelector('.js-library-bg-image');
  const mainEl = document.querySelector('main');
  if (array.length > 0) {
    emptyTitle.classList.add('visually-hidden');
    emptyImg.classList.add('visually-hidden');
    mainEl.classList.remove('perspective');
  }
  if (array.length === 0) {
    emptyTitle.classList.remove('visually-hidden');
    emptyImg.classList.remove('visually-hidden');
    mainEl.classList.add('perspective');
  }
}

// export?
 async function renderWatchedMovies() {
  libraryRefs.library.innerHTML = '';
  const watchedMovies = load(themoviedbAPI.WATCH_KEY);
  displayBg(watchedMovies);
  try {
    const watchedMoviesIds = watchedMovies.map(movie => movie.id);
    watchedMoviesIds.forEach(async id => {
      const movie = await themoviedbAPI.fetchMovieById(id);
      const genre = movie.genres.map(genre => genre.name);
      if (genre.length > 2) {
        genre.splice(2, genre.length - 1, 'Other');
      }
      if (genre.length === 0) {
        genre.push('Other');
      }
      libraryRefs.library.insertAdjacentHTML(
        'beforeend',
        renderLibraryMarkup(movie, genre.join(', '))
      );
      libraryRefs.library.lastElementChild.setAttribute('data-status', 'watched');
    });
  } catch (error) {
    Notify.failure('Ооps, something went wrong, please try again');
  }
}


// export?
 async function renderQueueMovies() {
  spinnerPlay();
  libraryRefs.library.innerHTML = '';
  const queueMovies = load(themoviedbAPI.QUEUE_KEY);
  displayBg(queueMovies);
  const queueMoviesIDes = queueMovies.map(movie => movie.id);
  try {
    queueMoviesIDes.forEach(async id => {
      const movie = await themoviedbAPI.fetchMovieById(id);
      const genre = movie.genres.map(genre => genre.name);
      if (genre.length > 2) {
        genre.splice(2, genre.length - 1, 'Other');
      }
      if (genre.length === 0) {
        genre.push('Other');
      }
      libraryRefs.library.insertAdjacentHTML(
        'beforeend',
        renderLibraryMarkup(movie, genre.join(', '))
      );
      libraryRefs.library.lastElementChild.setAttribute('data-status', 'queue');
    });
  } catch (error) {
    console.log(error);
    Notify.failure('Ооps, something went wrong, please try again');
  } finally {
    spinnerStop();
  }
}


// click card
async function onMovieCardClick(event) {
  const movieCard = event.target.closest('.gallery__item');
  try {
    spinnerPlay();
    const movieId = movieCard.dataset.id;

    const movieStatus = movieCard.dataset.status;

    await themoviedbAPI.fetchMovieById(movieId).then(data => {
      const posterPath = data.poster_path
        ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
        : `https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png`;
      const releaseYear = new Date(Date.parse(data.release_date)).getFullYear();
      const filmData = {
        id: data.id,
        poster: posterPath,
        title: data.title,
        originalTitle: data.original_title,
        genres: [],
        popularity: data.popularity.toFixed(1),
        overview: data.overview,
        vote_average: data.vote_average.toFixed(1),
        vote_count: data.vote_count,
        release_date: releaseYear,
      };

      data.genres.forEach(genre => {
        filmData.genres.push(genre.name);
      });
      filmData.genres = filmData.genres.join(', ');

      getTrailer(movieId, themoviedbAPI);
      createModalMarkUp(filmData);

      const removeFromWatchedBtn = document.querySelector(
        '.lightbox-modal__watched-button'
      );
      const removeFromQuequeBtn = document.querySelector(
        '.lightbox-modal__queque-button'
      );

      removeFromWatchedBtn.addEventListener('click', onRemoveFromWatchedClick);
      removeFromQuequeBtn.addEventListener('click', onRemoveFromQueueClick);

      checkLocalStorageLibrary(
        themoviedbAPI.WATCH_KEY,
        filmData,
        removeFromWatchedBtn,
        'Remove from Watched',
        'watched'
      );

      checkLocalStorageLibrary(
        themoviedbAPI.QUEUE_KEY,
        filmData,
        removeFromQuequeBtn,
        'Remove from Queue',
        'queue'
      );

      function onRemoveFromWatchedClick(e) {
        const movieId = e.target.dataset.btn;

        removeLocal(themoviedbAPI.WATCH_KEY, movieId);
        e.target.textContent = 'Removed from Watched';
        e.target.disabled = true;
        if (e.target.dataset.list === movieStatus) {
          movieCard.remove();
        }
        if (libraryRefs.watchBtn.classList.contains('is-active-library')) {
          displayBg(load(themoviedbAPI.WATCH_KEY));
        } else {
          displayBg(load(themoviedbAPI.QUEUE_KEY));
        }
      }

      function onRemoveFromQueueClick(e) {
        const movieId = e.target.dataset.btn;
        removeLocal(themoviedbAPI.QUEUE_KEY, movieId);
        e.target.textContent = 'Removed from Queue';
        e.target.disabled = true;
        if (e.target.dataset.list === movieStatus) {
          movieCard.remove();
        }
        if (libraryRefs.watchBtn.classList.contains('is-active-library')) {
          displayBg(load(themoviedbAPI.WATCH_KEY));
        } else {
          displayBg(load(themoviedbAPI.QUEUE_KEY));
        }
      }
    });
  } catch (error) {
    console.log(error);
    Notify.failure('Ооps, something went wrong, please try again');
  } finally {
    spinnerStop();
  }
}

function checkLocalStorageLibrary(key, filmData, btn, btnText, status) {
  const locStorage = load(key);
  const currentFilm = filmData;
  const includesFilm = locStorage.find(film => film.id === currentFilm.id);

  if (includesFilm) {
    btn.dataset.list = `${status}`;
    btn.textContent = `${btnText}`;
  }
  if (!includesFilm) {
    btn.classList.add('visually-hidden');
  }
}