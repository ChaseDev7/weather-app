// 6cf8ab72602f40c9a2a222219232809

const cityName = document.querySelector("#city-name");
const searchBtn = document.querySelector("#search-button");

searchBtn.addEventListener("click", function showCityDetails (event) {
  event.preventDefault();
  console.log(cityName.value);
});