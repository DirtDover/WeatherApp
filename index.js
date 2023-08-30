const container = document.querySelector('main_container');
const search = document.querySelector('search_container button');
const error = document.querySelector('error_container');
const weather = document.querySelector('weather_container');
const details = document.querySelector('weather_details');

search.addEventListener('click',() => {

    const APIKEY =  '88b43b2e5520f11e3f49f479b0ff3fd5'
    const city = document.querySelector('search_container input').value;

    if (city === '')
        return;


    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}&lang=fr`)
    .then(response => response.json)
    .then(json => {
        
    })




})