
async function getWeather() {
    try {
        const response = await fetch(BASE_URL)
        const weather = await response.json()
        currentWeather(weather)
        forescastWeather(weather)
    } catch (error) {
        throw error
    }

}

function currentWeather({ current, location }) {
    const currentWeather = document.getElementById('weather-container');
    const { name, country } = location
    const { condition: { text, icon }, temp_c, humidity, wind_kph, precip_in } = current
    const currentTemplate = ` 
  <h2>${name} / ${country}</h2>
  <p>${text}</p>
    <div class="current-grades">
      <img class="weather-icon" src="http:${icon}" alt="${text}">
      <div>${temp_c}ºC</div>
    </div>
  <div class="current-data">
    <ul>
      <li>Precipitaciones: ${precip_in} mm</li>
      <li>Humedad: ${humidity}%</li>
      <li>Viento: ${wind_kph} Km/h</li>
    </ul>
  </div>
  `
    currentWeather.innerHTML = currentTemplate;
}

function forescastWeather({ forecast }) {
    const forecastWeather = document.getElementById('forecast');
    const forecastDay = forecast.forecastday[0].hour
    forecastDay.forEach(day => {
        const { condition: { text, icon }, time, temp_c } = day
        const timeFormat = time.split(" ")[1]
        forecastTemplate = `
    <li class="forecast-grades">
      <span>${timeFormat}<span>
      <img class="weather-icon" src="http:${icon}" alt="${text}">
      <p>${temp_c} °C</p>
    </li>
    `
        forecastWeather.innerHTML += forecastTemplate
    })

}


getWeather();
















// const weather = document.getElementById("weather");
// const weatherData = document.getElementById("weather-data");
// const forecast = document.getElementById("forecast");

// // Llamada a la API
// document.addEventListener("DOMContentLoaded", getWeather);

// function getWeather() {
//     fetch(BASE_URL)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             displayWeather(data);
//             displayForecast(data);
//         })
//         .catch(error => console.error(error));
// }

// // Mostrar datos de la API en el DOM

// function displayWeather(data) {
//     const location = data.location;
//     const current = data.current;
//     const forecast = data.forecast.forecastday[0];

//     // Mostrar ubicación
//     const locationElement = document.createElement("h3");
//     locationElement.innerHTML = `${location.name.toUpperCase()}, ${location.country.toUpperCase()}`;
//     weather.appendChild(locationElement);

//     // Mostrar estado del clima
//     const conditionElement = document.createElement("p");
//     conditionElement.innerHTML = `${current.condition.text}`;
//     weather.appendChild(conditionElement);

//     // Mostrar imagen
//     const imageElement = document.createElement("img");
//     imageElement.src = current.condition.icon;
//     weather.appendChild(imageElement);

//     // Mostrar precipitaciones, humedad y viento
//     const precipitationElement = document.createElement("p");
//     precipitationElement.innerHTML = `Precipitaciones: ${current.precip_mm} mm`;
//     weatherData.appendChild(precipitationElement);

//     const humidityElement = document.createElement("p");
//     humidityElement.innerHTML = `Humedad: ${current.humidity}%`;
//     weatherData.appendChild(humidityElement);

//     const windElement = document.createElement("p");
//     windElement.innerHTML = `Viento: ${current.wind_kph} km/h`;
//     weatherData.appendChild(windElement);
// }

// // Previsión por horas

// function displayForecast(data) {
//     const forecastData = data.forecast.forecastday[0].hour;
//     const forecastElement = document.createElement("div");
//     forecastElement.innerHTML = `<h3>Previsión por horas del día de hoy en Bilbao</h3>`;

//     forecastData.forEach(hour => {
//         const hourElement = document.createElement("p");
//         hourElement.innerHTML = `${hour.time}: ${hour.temp_c}°C`;
//         forecastElement.appendChild(hourElement);
//     });

//     forecast.appendChild(forecastElement);
// }
