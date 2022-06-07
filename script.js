
let cityName = document.getElementById('searchBox');
let submitBtn = document.getElementById('submitSearch');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(cityName.value);
   
})



//key
const apiKey = '';

//example lat, lon, part
let lat = '33.44';
let lon = '94.04';
let part = 'hourly, daily';

//api links
// let geocoder = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=${limit}&appid=${APIkey}`;


// let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;


