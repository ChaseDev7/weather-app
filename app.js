// 6cf8ab72602f40c9a2a222219232809

const cityName = document.querySelector("#city-name");
const searchBtn = document.querySelector("#search-button");

const container = document.createElement("div");
container.setAttribute("id", "container");

searchBtn.addEventListener("click", function showCityDetails (event) {
  event.preventDefault();

  container.innerHTML = "";

  fetch(`https://api.weatherapi.com/v1/current.json?key=6cf8ab72602f40c9a2a222219232809&q=${cityName.value}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    document.body.appendChild(container);

    const city = document.createElement("div");
    city.setAttribute("id", "city");
    city.textContent = response.location.name;
    container.appendChild(city);

    const cityTime = document.createElement("div");
    cityTime.setAttribute("id", "city-time");
    cityTime.textContent = response.location.localtime;
    container.appendChild(cityTime);

    const detailsContainer = document.createElement("div");
    detailsContainer.setAttribute("id", "details-container");
    container.appendChild(detailsContainer);

    const weatherContainer = document.createElement("div");
    weatherContainer.setAttribute("id", "weather-container");
    detailsContainer.appendChild(weatherContainer);

    const weather = document.createElement("div");
    weather.setAttribute("id", "weather");
    weather.textContent = response.current.condition.text;
    
    const img = document.createElement("img");

    if (weather.textContent.includes("cloudy") || weather.textContent.includes("Cloud") || weather.textContent.includes("Overcast")) {
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=icZRmPkBLgUpUKFqSpVs0TLhK78pHn1b&s=clouds`, {mode: 'cors'})
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          img.src = response.data.images.original.url;
        });
    } else if (weather.textContent.includes("Clear") || weather.textContent.includes("Sunny")) {
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=icZRmPkBLgUpUKFqSpVs0TLhK78pHn1b&s=sun`, {mode: 'cors'})
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          img.src = response.data.images.original.url;
        });
    } else if (weather.textContent.includes("Rain") || weather.textContent.includes("rain")) {
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=icZRmPkBLgUpUKFqSpVs0TLhK78pHn1b&s=rain`, {mode: 'cors'})
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          img.src = response.data.images.original.url;
        });
    } else if (weather.textContent.includes("Fog")) {
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=icZRmPkBLgUpUKFqSpVs0TLhK78pHn1b&s=fog`, {mode: 'cors'})
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          img.src = response.data.images.original.url;
        });
    } else if (weather.textContent.includes("Mist")) {
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=icZRmPkBLgUpUKFqSpVs0TLhK78pHn1b&s=mist`, {mode: 'cors'})
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          img.src = response.data.images.original.url;
        });
    };

    weatherContainer.appendChild(img);
    weatherContainer.appendChild(weather);

    const infoContainer = document.createElement("div");
    infoContainer.setAttribute("id", "info-container");
    detailsContainer.appendChild(infoContainer);

    const temperature = document.createElement("div");
    temperature.setAttribute("id", "temperature");
    temperature.textContent = `Temp: ${response.current.temp_c}C`;
    infoContainer.appendChild(temperature);

    const humidity = document.createElement("div");
    humidity.setAttribute("id", "humidity");
    humidity.textContent = `Humidity: ${response.current.humidity}%`;
    infoContainer.appendChild(humidity);

    const wind = document.createElement("div");
    wind.setAttribute("id", "wind");
    wind.textContent = `Wind: ${response.current.wind_kph}kph`;
    infoContainer.appendChild(wind);
  });
});