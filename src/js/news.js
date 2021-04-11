import '../sass/main.scss';
import NewsApiService from './services/news-service.js';
import articlesTpl from '../templates/news.hbs';
import LoadMoreBtn from './components/load-more-btn'

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles); 

function onSearch(e) {
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.query.value;

    if (newsApiService.query === '') {
    return alert('Введи что-то нормальное');
    }
    
    loadMoreBtn.show();
    newsApiService.resetPage();
    clearArticlesContainer();

    fetchArticles();
}

function fetchArticles () {
    loadMoreBtn.disable();
    newsApiService.fetchArticles().then(articles => {
        appendArticlesMarkup(articles);
        loadMoreBtn.enable();
    });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}