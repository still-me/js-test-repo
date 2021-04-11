import throttle from 'lodash.throttle'

const form = document.querySelector('.js-form');
const textarea = document.querySelector('.js-textarea');
const STORAGE_KEY = 'text'

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        textarea.value = savedMessage    
    }  
}

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
    // ! для throttle нужен target, а не currentTarget
    //! throttle можно установить через npm отдельно

    const value = evt.target.value
    localStorage.setItem(STORAGE_KEY, value);
}

