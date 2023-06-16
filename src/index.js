import Notiflix from 'notiflix';
import axios from "axios";
import Pagination from 'tui-pagination';

import { refs } from './javascript/refs';
import { ThemoviedbAPI } from './javascript/themoviedbAPI';
import { renderGenres } from './javascript/renderGenres';
import { renderMarkup } from './javascript/renderMarkup';



const themoviedbAPI = new ThemoviedbAPI();

console.log(themoviedbAPI.fetchFavouritesMovies(1));
console.log(themoviedbAPI.fetchGenres());

try {
  startPage()
} catch (error) {
  
}

// start page
async function startPage() {
  const genresIds = await themoviedbAPI.fetchGenres();
  const trendMovies = await themoviedbAPI.fetchFavouritesMovies(1);
  console.log(trendMovies.results);

  const markup = trendMovies.results
    .map(movie => {
      const genres = renderGenres(movie, [...themoviedbAPI.genres]);
      console.log(genres);
      return renderMarkup(movie, genres);
    }).join('');
  
  refs.gallery.innerHTML = markup;
}