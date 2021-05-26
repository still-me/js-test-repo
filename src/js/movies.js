import '../styles.css';
//* moves 
import preloaderFactory from './preloader';
import MoviesService from './services/movies-service';
import moviesListTemplate from '../templates/moviesList.hbs';

const moviesListRef = document.querySelector('.movies_list');
const listObserverRef = document.querySelector('.list-observer')
const preloader = preloaderFactory('.preloader');
const moviesService = new MoviesService();

fetchMovies()

const renderList = movies => {
    const moviesWithPosterPath = movies.map(movie => {
    return {
      ...movie,
        poster_path: `https://www.themoviedb.org/t/p/w500${movie.poster_path}`,
    };
    });
    const moviesList = moviesListTemplate(moviesWithPosterPath);

    moviesListRef.insertAdjacentHTML('beforeend', moviesList);
};

async function fetchMovies () {
    try {
        const { results } = await moviesService.fetchMovies();
    
        
        renderList(results);
        moviesService.page +=1
    } catch (error) {
        preloader.hide()
    } finally {
        preloader.hide();
    }
}

// ! OBSERVER

const observerOptions = {
  rootMargin: '100px',
};

function observerHandler(entries) {
    if (entries[0].isIntersecting) {
        fetchMovies()
    }
    
}

const observer = new IntersectionObserver(observerHandler, observerOptions);
observer.observe(listObserverRef)