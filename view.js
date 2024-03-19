updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    
    ${createWeatherFormHtml()}
    ${createCardHtml()}

    `;
    app.innerHTML = html;
}

function createWeatherFormHtml() {
    return /*HTML*/ `
    <div class="weatherForm">
        <input type="text" oninput="cityInput = this.value" class="cityInput" placeholder ="Enter city"/>
        <button type="submit" onclick="getWeatherFormData()">Get Weather</button>
    </div>
    `;
}

function createCardHtml() {
    return /*HTML*/ `
    <div class="card" style="display:${showingCard ? "" : "none"}">
    ${createWeatherInfoHtml()}
    ${createDisplayErrorHtml()}
    </div>
    `;
}

function createWeatherInfoHtml() {
    return /*HTML*/ `
    <h1 class="cityDisplay">${weatherInfo.city}</h1>
    <p class="tempDisplay">${(weatherInfo.temp - 273.15).toFixed(1)}°C</p>
    <p class="humidityDisplay">Humidity: ${weatherInfo.humidity}%</p>
    <p class="descDisplay">${weatherInfo.description}</p>
    <p class="weatherEmoji">${getWeatherEmoji(weatherInfo.id)}</p>
    `;
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function createDisplayErrorHtml() {
    return /*HTML*/ `
    <p class="errorDisplay">${errorDisplay}</p>
    `;
}

