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
    updateView();
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
    weatherInfo.city = data.name;
    weatherInfo.temp = data.main.temp;
    weatherInfo.humidity = data.main.humidity;
    weatherInfo.description = data.weather[0].description;
    weatherInfo.id = data.weather[0].id;

    showingCard = true;
    errorDisplay = "";
    createWeatherInfoHtml();

    /* Dette under er det samme som linje 33-37, 
    men det over gir mer mening når man ikke har lært om object destructuring.
    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }] } = data;
    weatherInfo = {
        city, temp, humidity, description, id,
    }; */
}

function displayError(error) {
    weatherInfo.html = "";
    errorDisplay = error;
    showingCard = true;
    updateView();
}