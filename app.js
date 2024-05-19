const apiKey = "Add your Key here";

const weatherDataEl = document.getElementById("weather-data");

const formEl = document.querySelector("form");
const cityInputEl = document.getElementById("city-input");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&unit=metric`
    );

    if (!response) {
      throw new Error("Network response was mot okay");
    }

    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const details = [
      `Feels like : ${Math.round(data.main.feels_like)}`,
      `Humidity : ${data.main.humidity}%`,
      `Wind Speed : ${data.wind.speed} m/s`,
    ];

    weatherDataEl.querySelector(".icon").innerHTML = `<img
    src="http://openweathermap.org/img/wn/${icon}.png"
    alt="Weather-icon"/>`;

    weatherDataEl.querySelector(".temperature").textContent = `${temp}℃`;

    weatherDataEl.querySelector(".description").textContent = description;

    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent =
      "An error happended, please try again later";

    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}
