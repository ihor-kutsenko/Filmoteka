import { getOneMovieInfo } from './getMovieInfo'; 
import { allFilms } from '/src/index';
import { createModalMarkUp } from './renderModalMarkUp';
import { ThemoviedbAPI } from './themoviedbAPI';
import { save, load } from './localStorage';
import { spinnerPlay, spinnerStop } from './spiner';
import { getTrailer } from './getTrailer';


import Notiflix from 'notiflix';



const movieAPI = new ThemoviedbAPI();

export function getItems(parent) {
  const lightboxedCard = parent.childNodes;
  const allFilms = [...lightboxedCard];
  lightboxedCard.forEach(item => item.addEventListener('click', openLightbox));
  return allFilms;
}


function getSelectedItem(event, array) {
  const selectedProduct = array.find(
    item => item.dataset.id === event.currentTarget.dataset.id
  );
  return selectedProduct;
}


function openLightbox(event) {
  event.preventDefault();
  let innerElements = [];
  [...event.currentTarget.children].forEach(el =>
    innerElements.push([...el.children])
  );
  innerElements = innerElements.flatMap(el => el);
  if (
    event.target === event.currentTarget ||
    [...event.currentTarget.children].includes(event.target) ||
    innerElements.includes(event.target)
  ) {
    onFilmCardClick(event);
  }
  return;  
}


// click card
async function onFilmCardClick(event) {
  const selectedProduct = await getSelectedItem(event, allFilms);
  const filmId = selectedProduct.dataset.id;

  try {
    spinnerPlay();
    
    movieAPI.fetchMovieById(filmId).then(result => {
      const data = result;

      const posterPath = data.poster_path
        ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
        : `https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png`;

      const releaseYear = new Date(Date.parse(data.release_date)).getFullYear();
      
      const filmData = {
        id: data.id,
        poster: posterPath,
        title: data.title.replaceAll("'", '`'),
        originalTitle: data.original_title.replaceAll("'", '`'),
        genres: [],
        popularity: data.popularity.toFixed(1),
        overview: data.overview.replaceAll("'", '`'),
        vote_average: data.vote_average.toFixed(1),
        vote_count: data.vote_count,
        release_date: releaseYear,
      };

      data.genres.forEach(genre => {
        filmData.genres.push(genre.name);
      });
      filmData.genres = filmData.genres.join(', ');

      const stringifiedJSONFilmData = JSON.stringify(filmData);
      const filmDataObj = getOneMovieInfo(data);

      save('modalInfo', filmDataObj);


      createModalMarkUp(filmData, filmDataObj);

      getTrailer(filmId, movieAPI);

      const addToWatchedBtn = document.querySelector(
        '.lightbox-modal__watched-button'
      );

      const addToQueueBtn = document.querySelector(
        '.lightbox-modal__queque-button'
      );
      checkLocalStorage(
        'watched',
        filmDataObj,
        addToWatchedBtn,
        'Added to watched'
      );
      checkLocalStorage(
        'queue',
        filmDataObj,
        addToQueueBtn,
        'Added to queue'
      );

      addToWatchedBtn.addEventListener('click', onModalBtnClick);
      addToQueueBtn.addEventListener('click', onModalBtnClick);

    });
    
  } catch (error) {
    Notiflix.Notify.failure('Ооps, something went wrong, please try again');
  } finally {
    spinnerStop();
  }

}


// click btn
function onModalBtnClick(event) {
  addToLocalStorage(
    +event.target.dataset.btn,
    event.target.dataset.type,
    event.target.dataset.id
  );
  if ((event.target.dataset.type === 'watched')) {
    event.target.textContent = 'Added to watched';
  }
  if ((event.target.dataset.type === 'queue')) {
    event.target.textContent = 'Added to queue';
  }
  event.target.disabled = true;
}

function checkLocalStorage(key, filmData, btn, btnText) {
  const locStorage = load(key);
  const currentFilm = filmData;
  const includesFilm = locStorage.find(film => film.id === currentFilm.id);

  if (includesFilm) {
    btn.textContent = `${btnText}`;
    btn.disabled = true;
  }
}

function addToLocalStorage(id, type, data) {
  const localStorageItem = load(type) || [];
  if (localStorageItem.find(info => info?.id === id)) return;
  const movieInfo = load('modalInfo');
  localStorageItem.push(movieInfo);
  save(type, localStorageItem);
}