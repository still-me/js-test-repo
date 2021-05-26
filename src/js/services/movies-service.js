const API_KEY = '4f0ff036e104f19ed384b069714027d3';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class MoviesService {
  constructor() {
    this.page = 1;
  }

  async fetchMovies() {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${this.page}`,
    );
    if (!response.ok) {
      throw response;
    }

    const result = await response.json();
    return result;
  }
}
