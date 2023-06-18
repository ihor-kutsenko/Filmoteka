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

  // search film
  async fetchMoviesByQuery(page) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      query: this.query,
      page: page,
    });

    const { data } = await axios.get('/search/movie', { params });
    return data;
  }


// запит по id  // 
  async fetchMovieById(id) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
    });
    
    return await fetch(
      `https://api.themoviedb.org/3/movie/${id}?${params}`
    ).then(response => {
      if (!response.ok) {
        throw new Error('Oops, there is no movie with that name');
      }
      return response.json();
    });
  }

  // trailer
   async fetchTrailerById(id) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
    });
    return await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?${params}`
    ).then(response => {
      if (!response.ok) {
        throw new Error('Oops, there is no movie with that name');
      }
      return response.json();
    });
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