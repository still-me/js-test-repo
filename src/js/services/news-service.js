const API_KEY = '9a227ce26df444e9ad370fac96fa1b26';
const BASE_URL = 'https://newsapi.org/v2'
 const options = {
            headers: {
                Authorization: API_KEY,
            },
        };

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    fetchArticles() {
       
        const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=4&page=${this.page}`;
        
       return fetch(url, options)
            .then(response => response.json())
            .then(({articles}) => {
                this.incrementPage()
                return articles;
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
            return this.searchQuery;
        }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}