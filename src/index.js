import Notiflix from 'notiflix';
import axios from "axios";
import Pagination from 'tui-pagination';

import { refs } from './javascript/refs';
import { ThemoviedbAPI } from './javascript/themoviedbAPI';
import { renderGenres } from './javascript/renderGenres';
import { renderMarkup } from './javascript/renderMarkup';
import { paginOptions, paginOptionsLess } from './javascript/paginOptions';
import { scrollFunction } from './javascript/scroll';
import { spinnerPlay, spinnerStop } from './javascript/spiner';
import { getItems } from './javascript/movieModal';
import { checkBox, onChange, isTheme, } from './javascript/theme';



const themoviedbAPI = new ThemoviedbAPI();
export let allFilms = null;

let options = null;
if (window.screen.width <= 580) {
  options = paginOptionsLess;
} else {
  options = paginOptions;
}

const pagination = new Pagination(refs.paginationContainer, options);
const page = pagination.getCurrentPage();


try {
  spinnerPlay();
  startPage();
  window.addEventListener('scroll', scrollFunction);
} catch (error) {
  Notify.failure('Ооps, something went wrong, please try again');
} finally {
  spinnerStop();
}


refs.formEl.addEventListener('submit', onSearchFormSubmit);


pagination.on('beforeMove', loadMoreFavouritesMovies);
pagination.on('afterMove', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// start page
async function startPage() {
  const genresIds = await themoviedbAPI.fetchGenres();
  const trendMovies = await themoviedbAPI.fetchFavouritesMovies(page);
  
  pagination.reset(trendMovies.total_results);
  
  const markup = trendMovies.results
    .map(movie => {
      const genres = renderGenres(movie, [...themoviedbAPI.genres]);
      
      return renderMarkup(movie, genres);
    }).join('');
  
  refs.gallery.innerHTML = markup;
  allFilms = [...getItems(refs.gallery)];
}


// find movies
async function onSearchFormSubmit(event) {
  event.preventDefault();
  
  themoviedbAPI.query = event.target.elements.search.value;

  if (!themoviedbAPI.query) {
    return '';
  }
    try {

    if (document.querySelector('.input-error')) {
      document.querySelector('.input-error').remove();
    }
    spinnerPlay();
    const searchMovies = await themoviedbAPI.fetchMoviesByQuery(page);
    
    const markup = searchMovies.results
      .map(movie => {
        const genres = renderGenres(movie, [...themoviedbAPI.genres]);
        return renderMarkup(movie, genres);
      })
      .join('');
    
    pagination.off('beforeMove', loadMoreFavouritesMovies);
    pagination.off('beforeMove', loadMoreMoviesByQuery);
    pagination.on('beforeMove', loadMoreMoviesByQuery);
    pagination.reset(searchMovies.total_results);
    
    refs.gallery.innerHTML = markup;
    allFilms = [...getItems(refs.gallery)];

    refs.noResultsTitle.classList.add('visually-hidden');
    refs.noResultsImg.classList.add('visually-hidden');

    if (searchMovies.total_results === 0) {
      refs.formEl.insertAdjacentHTML('afterend',
        `<div class="input-error">
       Search result not successful. Enter the correct movie name  
      </div>`
      );

      refs.noResultsTitle.classList.remove('visually-hidden');
      refs.noResultsImg.classList.remove('visually-hidden');
      refs.paginationContainer.style.display = 'none';
    } else {
      refs.paginationContainer.style.display = 'block';
    }
       
  } catch (error) {
    Notify.failure('Ооps, something went wrong, please try again');
  } finally {
    spinnerStop();
  }
  event.target.reset();
}


// next pages
async function loadMoreFavouritesMovies(event) {
  const currentPage = event.page;
  
  try {
    spinnerPlay();
    const genresIds = await themoviedbAPI.fetchGenres();
    const trendMovies = await themoviedbAPI.fetchFavouritesMovies(currentPage);
    
    const markup = trendMovies.results
    .map(movie => {
      const genres = renderGenres(movie, [...themoviedbAPI.genres]);
      
      return renderMarkup(movie, genres);
    }).join('');
  
    refs.gallery.innerHTML = markup;
    allFilms = [...getItems(refs.gallery)];
    
  } catch (error) {
    Notify.failure('Ооps, something went wrong, please try again');
  } finally {
    spinnerStop();
  }
}

// next pages for search
async function loadMoreMoviesByQuery(event) {
  const currentPage = event.page;
  try {
    spinnerPlay();
    const searchMovies = await themoviedbAPI.fetchMoviesByQuery(currentPage);
    const markup = searchMovies.results
      .map(movie => {
        const genres = renderGenres(movie, [...themoviedbAPI.genres]);
        return renderMarkup(movie, genres);
      })
      .join('');
    refs.gallery.innerHTML = markup;
    allFilms = [...getItems(refs.gallery)];
  } catch (error) {
    Notify.failure('Ооps, something went wrong, please try again');
  } finally {
    spinnerStop();
  }
}


// filter bar

function onFilterFormSubmit(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  
  const genre = refs.filterGenres.value;
  const year = refs.filterYears.value;
  const language = refs.filterLanguage.value;
  const sort = refs.filtersSort.value;
  const page = pagination.getCurrentPage();

  fetchMoviesByFilters(genre, year, language, sort, page);
}


refs.filterForm.addEventListener('submit', onFilterFormSubmit);

async function fetchMoviesByFilters(genre, year, language, sort, page) {
  
  lastGenre = genre;
  lastYear = year;
  lastLanguage = language;
  lastSort = sort;
  refs.gallery.innerHTML = "";

  try {
    spinnerPlay();
    const searchMovies = await themoviedbAPI.fetchFilters(genre, year, language, sort, 1);
    
    const markup = searchMovies.results
      .map(movie => {
        const genres = renderGenres(movie, [...themoviedbAPI.genres]);
        return renderMarkup(movie, genres);
      })
      .join('');
    refs.gallery.innerHTML = markup;
    allFilms = [...getItems(refs.gallery)];
    
    pagination.off('beforeMove', loadMoreFavouritesMovies);
    pagination.off('beforeMove', loadMoreMoviesByQuery);
    pagination.on('beforeMove', loadMoreFilteredMovies);
    pagination.reset(searchMovies.total_results);

    refs.noResultsTitle.classList.add('visually-hidden');
    refs.noResultsImg.classList.add('visually-hidden');

    if (searchMovies.total_results === 0) {
      refs.noResultsTitle.classList.remove('visually-hidden');
      refs.noResultsImg.classList.remove('visually-hidden');
      refs.paginationContainer.style.display = 'none';
    } else {
      refs.paginationContainer.style.display = 'block';
    }
    
  } catch (error) {
    Notify.failure('Oops, something went wrong');
  } finally {
    spinnerStop();
  }

}


// next page filter bar
let lastGenre = '';
let lastYear = '';
let lastLanguage = '';
let lastSort = '';


async function loadMoreFilteredMovies( event) {
  const currentPage = event.page;
     try {
    spinnerPlay();
    const searchMovies = await themoviedbAPI.fetchFilters(lastGenre, lastYear, lastLanguage, lastSort, currentPage);
    
    const markup = searchMovies.results
      .map(movie => {
        const genres = renderGenres(movie, [...themoviedbAPI.genres]);
        return renderMarkup(movie, genres);
      })
      .join('');

    refs.gallery.innerHTML = markup;
    allFilms = [...getItems(refs.gallery)];
  } catch (error) {
    Notify.failure('Ооps, something went wrong, please try again');
  } finally {
    spinnerStop();
  }
}




// theme 

 

checkBox.addEventListener('change', onChange);
isTheme();


