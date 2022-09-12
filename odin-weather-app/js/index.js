let apiKey = 'f78c3b76420309da6474034f593d36d7';

window.addEventListener('DOMContentLoaded', initDom);

let lastSearch = ['London', 'GB'];

async function initDom() {
  this.initButtons();
  const weatherData = await getWeatherDataForLocation(lastSearch, 'metric');
  displayWeather(weatherData, 'metric');
}

function initButtons() {
  let infoBtn = document.getElementById('info');
  infoBtn.addEventListener('click', () => {
    console.log('Show info');
  });
  let searchBtn = document.getElementById('search');
  searchBtn.addEventListener('click', () => {
    buildData(false);
  });

  let unitSwitch = document.getElementById('unit');
  unitSwitch.addEventListener('change', () => {
    buildData(true)
  })
}

async function buildData(unitChanged) {
  resetWeather();
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
  const location = unitChanged ? lastSearch.join() : inputField.value;
  if(location === '') return;
  const locationSplit = location.split(',');
  lastSearch = locationSplit;
  const weatherData = await getWeatherDataForLocation(locationSplit, unit);
  displayWeather(weatherData, unit);
}

function displayWeather(weatherData, unit) {
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

  // For Main (left side)
  const currentDate = document.getElementById('current-date');
  currentDate.textContent = new Date().toUTCString();
  const degreeDom = document.getElementById('degree');
  degreeDom.textContent = `${Math.ceil(currentTemp)}°`;
  const locationDom = document.getElementById('location');
  locationDom.textContent = location;
  const weatherIconDom = document.getElementById('condition-icon');
  const icon = document.createElement('img');
  icon.src = `img/${weatherIcon}.png`;
  weatherIconDom.appendChild(icon);
  const conditionDescDom = document.getElementById('condition-desc');
  conditionDescDom.textContent = weatherMain;
  
  //For Weather Details (right side)
  const weatherFeelsLikeDom = document.getElementById('weatherFeelsLike');
  weatherFeelsLikeDom.textContent = `${Math.ceil(weatherFeelsLike)}°`;
  const tempMinDom = document.getElementById('tempMin');
  tempMinDom.textContent = `${Math.ceil(tempMin)}°`;
  const tempMaxDom = document.getElementById('tempMax');
  tempMaxDom.textContent = `${Math.ceil(tempMax)}°`;
  const windSpeedDom = document.getElementById('windSpeed');
  windSpeedDom.textContent = formatWindSpeed(windSpeed, unit);
  const cloudPercentDom = document.getElementById('cloudPercent');
  cloudPercentDom.textContent = `${cloudPercent}%`;
  const sunriseDom = document.getElementById('sunrise');
  sunriseDom.textContent = formatUnitTimeStamp(sunrise);
  const sunsetDom = document.getElementById('sunset');
  sunsetDom.textContent = formatUnitTimeStamp(sunset);
}

function formatUnitTimeStamp(timestamp) {
  let date = new Date(timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let formattedTime = hours + ':' + minutes.substr(-2);

  return formattedTime;
}

function formatWindSpeed(speed, unit) {
  if(unit === 'metric') {
    let kmh = speed*3.6;
    let rounded = (Math.round(kmh * 100) / 100).toFixed(2);
    return `${rounded} km/h`;
  }
  else if(unit === 'imperial') {
    let rounded = (Math.round(speed * 100) / 100).toFixed(2);
    return `${rounded} miles/hour`;
  }
}

function resetWeather() {
  const degreeDom = document.getElementById('degree');
  degreeDom.textContent = '';
  const locationDom = document.getElementById('location');
  locationDom.textContent = '';
  const weatherIconDom = document.getElementById('condition-icon');
  weatherIconDom.innerHTML = '';
  const conditionDescDom = document.getElementById('condition-desc');
  conditionDescDom.textContent = '';
  
  //For Weather Details (right side)
  const weatherFeelsLikeDom = document.getElementById('weatherFeelsLike');
  weatherFeelsLikeDom.textContent = '';
  const tempMinDom = document.getElementById('tempMin');
  tempMinDom.textContent = '';
  const tempMaxDom = document.getElementById('tempMax');
  tempMaxDom.textContent = '';
  const windSpeedDom = document.getElementById('windSpeed');
  windSpeedDom.textContent = '';
  const cloudPercentDom = document.getElementById('cloudPercent');
  cloudPercentDom.textContent = '';
  const sunriseDom = document.getElementById('sunrise');
  sunriseDom.textContent = '';
  const sunsetDom = document.getElementById('sunset');
  sunsetDom.textContent = '';
}

async function getWeatherDataForLocation(location, unit) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`
  console.log(url);
  const response = await fetch(url, {mode: 'cors'});
  const weatherData = await response.json();

  return weatherData;
}
