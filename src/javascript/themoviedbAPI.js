import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export class ThemoviedbAPI {
  #API_KEY = 'a0a6c6bb266cce33636e335501d23546';
  totalMovies = 0;
  query = '';
  genres = [];

  constructor() {
    this.WATCH_KEY = 'watched';
    this.QUEUE_KEY = 'queue';
  }
// запит на кращі фільми
  async fetchFavouritesMovies(page) {
    const params =  new URLSearchParams({
      api_key: this.#API_KEY,
      page: page,
    });

    const { data } = await axios.get('/trending/movie/week', { params });
    return data;
  }


// запит на ві жанри
  async fetchGenres() {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
    });

    const allGenres = await axios.get('genre/movie/list', { params });
    this.genres = allGenres.data.genres;
    return allGenres;
  }

}