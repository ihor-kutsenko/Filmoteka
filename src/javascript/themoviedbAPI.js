import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export class ThemoviedbAPI {
  #API_KEY = 'a0a6c6bb266cce33636e335501d23546';
  totalMovies = 0;
  query = '';
  genres = [];

}