import Notiflix from 'notiflix';
import axios from "axios";
import Pagination from 'tui-pagination';

import { refs } from './javascript/refs';
import { ThemoviedbAPI } from './javascript/themoviedbAPI';
import { renderGenres } from './javascript/renderGenres';
import { renderMarkup } from './javascript/renderMarkup';
import { options } from './javascript/paginOptions';



const themoviedbAPI = new ThemoviedbAPI();

// let options = null;

const pagination = new Pagination(refs.paginationContainer, options);
const page = pagination.getCurrentPage();

console.log(themoviedbAPI.fetchFavouritesMovies(1));
console.log(themoviedbAPI.fetchGenres());

try {
  startPage()
} catch (error) {
  Notify.failure('Ооps, something went wrong, please try again');
}

pagination.on('beforeMove', loadMoreFavouritesMovies);

// pagination.on('afterMove', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });


// start page
async function startPage() {
  const genresIds = await themoviedbAPI.fetchGenres();
  const trendMovies = await themoviedbAPI.fetchFavouritesMovies(page);
  console.log(trendMovies.results);

  pagination.reset(trendMovies.total_results);

  const markup = trendMovies.results
    .map(movie => {
      const genres = renderGenres(movie, [...themoviedbAPI.genres]);
      
      return renderMarkup(movie, genres);
    }).join('');
  
  refs.gallery.innerHTML = markup;
}

// next pages
async function loadMoreFavouritesMovies(event) {
  const currentPage = event.page;

  try {
    const genresIds = await themoviedbAPI.fetchGenres();
    const trendMovies = await themoviedbAPI.fetchFavouritesMovies(currentPage);
    
    const markup = trendMovies.results
    .map(movie => {
      const genres = renderGenres(movie, [...themoviedbAPI.genres]);
      
      return renderMarkup(movie, genres);
    }).join('');
  
  refs.gallery.innerHTML = markup;
  } catch (error) {
    Notify.failure('Ооps, something went wrong, please try again');
  }
}