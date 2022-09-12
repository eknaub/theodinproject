let apiKey = 'f78c3b76420309da6474034f593d36d7';

window.addEventListener('DOMContentLoaded', initButtons);

function initButtons() {
  let infoBtn = document.getElementById('info');
  infoBtn.addEventListener('click', () => {
    console.log('Show info');
  });
  let searchBtn = document.getElementById('search');
  searchBtn.addEventListener('click', buildData);

  let unitSwitch = document.getElementById('unit');
  unitSwitch.addEventListener('change', buildData)
}

async function buildData() {
  const unitSwitch = document.getElementById('unit');
  const inputField = document.getElementById('searchinput');

  //True = F imperial, False = C metric
  const unit = unitSwitch.checked ? 'imperial' : 'metric';

  /*
    Location Formats:
    {city name}
    {city name},{country code}
    {city name},{state code}, {country code} (US)
  */
  const location = inputField.value;
  if(location === '') return;
  const locationSplit = location.split(',');
  //const weatherData = await getWeatherDataForLocation(locationSplit, unit);
  //displayWeather(weatherData);
}

function displayWeather(weatherData) {
  // For Main (left side)
  const location = weatherData.name;
  const currentTemp = weatherData.main.temp;
  const weatherMain = weatherData.weather[0].main;
  const weatherIcon = weatherData.weather[0].icon;

  //For Weather Details (right side)
  const weatherFeelsLike = weatherData.main.feels_like;
  const tempMin = weatherData.main.temp_min;
  const tempMax = weatherData.main.temp_max;
  const windSpeed = weatherData.wind.speed;
  const cloudPercent = weatherData.clouds.all;
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;

  let timezone = 3600;
  let x = moment.utc(sunrise,'X').add(timezone,'seconds').format('HH:mm a');
}

async function getWeatherDataForLocation(location, unit) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`
  const response = await fetch(url, {mode: 'cors'});
  const weatherData = await response.json();

  return weatherData;
}
