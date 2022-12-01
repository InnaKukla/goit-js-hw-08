const throttle = require('lodash.throttle');

const form = document.querySelector('form')
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);



const userData = {};


function onInput(e) {
    userData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData)); 
};


onRestartedPage();


function onSubmit(event) {
    event.preventDefault();

    console.log(userData);
    
    localStorage.removeItem(STORAGE_KEY);

    form.reset();
};


function onRestartedPage() {
    const localStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY)); 

    if(localStorageData){
        form.email.value = localStorageData.email;
        form.message.value = localStorageData.message;
    }
} ;