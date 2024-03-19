async function getWeatherFormData() {
    if (cityInput) {
        try {
            const weatherData = await getWeatherData(cityInput);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.error(error);
            displayError(error);
        }
    }
    else {
        displayError("Please enter a city");
    }
    cityInput = "";
}

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} `;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data")
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }] } = data;

    weatherInfo = {
        city, temp, humidity, description, id,
    };

    showingCard = true;
    errorDisplay = "";
    createWeatherInfoHtml();
    updateView();
}

function displayError(error) {
    weatherInfo.html = "";
    errorDisplay = error;
    showingCard = true;
    updateView();
}