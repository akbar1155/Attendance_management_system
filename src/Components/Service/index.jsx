import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherInfo() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await axios.get(
          'https://open-meteo.p.rapidapi.com/weather',
          {
            params: { latitude: 'YOUR_LATITUDE', longitude: 'YOUR_LONGITUDE' },
            headers: {
              'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
            },
          }
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h2>Weather Information</h2>
      <p>Temperature: {weatherData.temperature}</p>
      <p>Humidity: {weatherData.humidity}</p>
      <p>Weather Condition: {weatherData.condition}</p>
    </div>
  );
}

export default WeatherInfo;
