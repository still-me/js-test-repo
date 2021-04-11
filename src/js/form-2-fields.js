import '../styles.css';


const form = document.querySelector('.js-form');
const textarea = document.querySelector('.js-textarea');
const inputRef = document.querySelector('.js-input');
const STORAGE_KEY = 'inputData';

let formData = {};

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
})

populateFormFields();

function populateFormFields() {
    const savedDate = localStorage.getItem(STORAGE_KEY);
    
    if (savedDate) {
        const parsedData = JSON.parse(savedDate);
        formData = { ...parsedData };
        
        if (parsedData.text) {
            textarea.value = parsedData.text;
        }
        if (parsedData.name) {
           inputRef.value = parsedData.name;
        }
         
    }
}

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}


