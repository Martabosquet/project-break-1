const API_KEY = "e0f54c0e932f4a1dbbe110338262004"
const city = "Bilbao";
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=no&days=2`; //datos de hoy y mañana

const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const weatherData = document.getElementById("weather-data");
const forecast = document.getElementById("forecast");

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
    imageElement.src = `https:${current.condition.icon}`;
    weatherIcon.appendChild(imageElement);

    weatherData.innerHTML += `
        <p>Temperatura: ${current.temp_c}°C</p>
        <p>Sensación Térmica: ${current.feelslike_c}°C</p>
        <p>Precipitaciones: ${current.precip_mm} mm</p>
        <p>Humedad: ${current.humidity}%</p>
        <p>Viento: ${current.wind_kph} km/h</p>
    `;
}

function displayForecast(data) {
    const now = new Date();
    const currentHour = now.getHours();

    let hours = [];

    // Horas restantes de hoy
    const todayHours = data.forecast.forecastday[0].hour.filter(h => {
        const hourTime = new Date(h.time);
        return hourTime.getHours() >= currentHour;
    });
    hours = hours.concat(todayHours);

    // Si faltan horas, agregar de mañana
    if (hours.length < 24 && data.forecast.forecastday[1]) {
        const tomorrowHours = data.forecast.forecastday[1].hour;
        const needed = 24 - hours.length;
        hours = hours.concat(tomorrowHours.slice(0, needed));
    }

    const title = document.createElement("h3");
    title.innerText = "PRÓXIMAS 24 HORAS";
    forecast.appendChild(title);

    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("forecast-hours");

    hours.slice(0, 24).forEach(hour => {
        const hourBox = document.createElement("div");
        hourBox.classList.add("hour-box");

        const timeOnly = hour.time.split(" ")[1]; //solo quiero ver la hora, no la fecha

        hourBox.innerHTML = `
            <p>${timeOnly}</p>
            <img src="https:${hour.condition.icon}" alt="clima">
            <p>${hour.temp_c}°C</p>
        `;
        hoursContainer.appendChild(hourBox);
    });

    forecast.appendChild(hoursContainer);
}

//iniciamos todo llamando a la función:
getWeather();