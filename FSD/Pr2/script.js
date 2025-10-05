// Hardcoded weather data (mock data)
const weatherData = {
  Ahmedabad: { temp: 34, desc: "Sunny and clear ☀️" },
  Mumbai: { temp: 29, desc: "Humid with light breeze 🌤️" },
  Delhi: { temp: 32, desc: "Hot and dry 🌞" },
  Chennai: { temp: 31, desc: "Warm and cloudy ☁️" },
  Kolkata: { temp: 28, desc: "Rainy with thunderstorms ⛈️" },
  Surat: { temp: 33, desc: "Hot and humid 🌡️" }
};

// Get DOM elements
const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

// Event listener for button click
getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city === "") {
    cityName.textContent = "⚠️ Please enter a city name.";
    temperature.textContent = "";
    description.textContent = "";
    return;
  }

  const data = weatherData[city];

  if (data) {
    cityName.textContent = `Weather in ${city}`;
    temperature.textContent = `🌡️ Temperature: ${data.temp}°C`;
    description.textContent = data.desc;
  } else {
    cityName.textContent = `❌ No data found for "${city}".`;
    temperature.textContent = "";
    description.textContent = "Try Ahmedabad, Mumbai, Delhi, Chennai, Kolkata, or Surat.";
  }

  cityInput.value = "";
});
