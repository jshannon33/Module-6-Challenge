
let submitBtn = document.getElementById('submitSearch');


submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let cityName = document.getElementById('searchBox');
    console.log(cityName.value);

    const apiKey = '';
    let geocoder = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
})



//key


//example lat, lon, part
let lat = '33.44';
let lon = '94.04';
let part = 'hourly, daily';

let cityname = 'chicago';





let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;


let cityName = document.getElementById('searchBox');
const apiKey = '';

let requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;


fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
