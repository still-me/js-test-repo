import pockemonCardTpl from "../templates/pokemon.hbs";
import '../styles.css';

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form'),
    input: document.querySelector('.form-control')
}

refs.searchForm.addEventListener('submit', onSearch)

function onSearch(evt) {
    evt.preventDefault()

    const form = evt.currentTarget
    const searchQuery = form.elements.query.value

    fetchPockemon(searchQuery)
        .then(renderPockemonCard)
        .catch(onFetchError)
        .finally(() => form.reset());
}

function fetchPockemon(pockemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pockemonId}`;
    
    return fetch(url)
        .then(response => response.json());
}

function renderPockemonCard(pockemon) {
        const markup = pockemonCardTpl(pockemon);
        refs.cardContainer.innerHTML = markup;
}

function onFetchError() {
    alert('Такого покемона нет в списке🙊!')
}

