const weatherApi = {
    key: '50b81b73775ede9d2f16c0985e633a8b',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}

const searchInputButton = document.getElementById("input-button");
const searchInputBox = document.getElementById("input-box");
searchInputButton.addEventListener("click", function (event) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
    // alert('clicked');
});
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then((weather) => {
            return weather.json();
        }).then(showWeatherReport);
}
function showWeatherReport(weather) {
    console.log(weather);
    document.getElementById('city').innerHTML = `${weather.name},${weather.sys.country}`;
    document.getElementById('temp').innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    document.getElementById("max-min").innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min)/${Math.ceil(weather.main.temp_max)}&deg;C(max)`;
    document.getElementById("weathers").innerHTML = `${weather.weather[0].main}`;
    // document.getElementById("date").innerHTML = new Date();
    if (document.getElementById("weathers").textContent == 'Clear')
        document.body.style.backgroundImage = "url(Clear.jfif)";
    else if (document.getElementById("weathers").textContent == 'Clouds') {
        document.body.style.backgroundImage = "url(cloudy.jpg)";
    }
    else if (document.getElementById("weathers").textContent == 'Rain') {
        document.body.style.backgroundImage = "url(rainy.jpg)";
    }
    else if (document.getElementById("weathers").textContent == 'Snow') {
        document.body.style.backgroundImage = "url(snow.jpg)";
    }
    else if (document.getElementById("weathers").textContent == 'Thudnerstorm') {
        document.body.style.backgroundImage = "url(thunderstorm.jpg)";
    }
    else {
        document.body.style.backgroundImage = "url(1.jpg)";
    }



}
