const apiKey = "ef53c2134a33a6798753c1c3ff17d79c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=islamabad";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
}

checkWeather();