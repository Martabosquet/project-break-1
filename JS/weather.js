const API_KEY = "e0f54c0e932f4a1dbbe110338262004"
const city = "Bilbao";
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=no`;

const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const weatherData = document.getElementById("weather-data");
const forecast = document.getElementById("forecast");

document.addEventListener("DOMContentLoaded", getWeather);

async function getWeather() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
        displayWeather(data);
        displayForecast(data);

    } catch (error) {
        console.error("Hubo un problema al obtener los datos:", error);
    }
}

// FUNCIONES --------------------------------------------------------------------------------------------

function displayWeather(data) {
    const { location, current } = data;

    const locationElement = document.createElement("h3");
    locationElement.innerHTML = `${location.name.toUpperCase()}, ${location.country.toUpperCase()}`;
    weather.appendChild(locationElement);

    const conditionElement = document.createElement("p");
    conditionElement.innerHTML = `<i>${current.condition.text}</i>`;
    weather.appendChild(conditionElement);

    const imageElement = document.createElement("img");
    imageElement.src = current.condition.icon;
    weatherIcon.appendChild(imageElement);

    weatherData.innerHTML += `
        <p>Precipitaciones: ${current.precip_mm} mm</p>
        <p>Humedad: ${current.humidity}%</p>
        <p>Viento: ${current.wind_kph} km/h</p>
    `;
}

function displayForecast(data) {
    const forecastData = data.forecast.forecastday[0].hour;

    const title = document.createElement("h3");
    title.innerText = "PREVISIÓN POR HORAS";
    forecast.appendChild(title);

    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("forecast-hours");

    forecastData.forEach(hour => {
        const hourBox = document.createElement("div");
        hourBox.classList.add("hour-box");

        const timeOnly = hour.time.split(" ")[1]; //solo quiero ver la hora, no la fecha

        hourBox.innerHTML = `
            <p>${timeOnly}</p>
            <img src="${hour.condition.icon}" alt="clima">
            <p>${hour.temp_c}°C</p>
        `;
        hoursContainer.appendChild(hourBox);
    });

    forecast.appendChild(hoursContainer);
}