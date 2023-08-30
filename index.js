const container = document.querySelector('.main_container');
const search = document.querySelector('.search_container button');
const error = document.querySelector('.error_container');
const weather = document.querySelector('.weather_container');
const details = document.querySelector('.weather_details');

search.addEventListener('click',() => {

    const APIKEY =  '88b43b2e5520f11e3f49f479b0ff3fd5'
    const city = document.querySelector('.search_container input').value;

    if (city === '')
        return;


    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}&lang=fr`)
    .then(response => response.json())
    .then(json => {
        
        if(json.cod=== '404'){
            container.style.height = '400px';
            weather.style.display = 'none';
            details.style.display = 'none';
            error.style.display = 'block';
            error.classList.add('fadeIn')
            return; 
        }
        error.classList.remove('fadeIn');
        error.style.display = 'none';

        const image = document.querySelector('.weather_container img')
        const temperature = document.querySelector('.weather_container .temp')
        const description = document.querySelector('.weather_container .description')
        const humidity = document.querySelector('.weather_details .humidity span')
        const wind = document.querySelector('.weather_details .wind span')
        const pressure = document.querySelector('.weather_details .pressure span')

        switch(json.weather[0].main){
            
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            
                case 'Clouds':
                image.src = 'images/cloud.png';
                break;
            
                case 'Mist':
                image.src = 'images/mist.png';
                break;
            
                case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/snow.png';
                break;

            default :
                image.src = ''
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weather.style.display = '';
        details.style.display = '';
        weather.classList.add('fadeIn');
        details.classList.add('fadeIn');
        container.style.height = '590px';
    });




});