const API_KEY = "1172d833e6e0a77eb25ac843127daa9a";
export async function getWeatherData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getForecasttWeather(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
