import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Holiday = ({ holiday, location }) => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (latitude, longitude, date) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/history.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${latitude},${longitude}&dt=${date}`
      );
      const currentWeather = response.data.forecast.forecastday[0].day;
      setWeather(currentWeather);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (location) {
      const { lat, lon } = location;
      const formattedDate = new Date(holiday.date).toISOString().split('T')[0];
      fetchWeather(lat, lon, formattedDate);
    }
  }, [location, holiday]);

  return (
    <div className="holiday">
      <h4>{holiday.name}</h4>
      <p>{holiday.date}</p>
      {weather ? (
        <div>
          <p>Weather: {weather.condition.text}</p>
          <p>Average Temperature: {weather.avgtemp_c}°C</p>
          <p>Max Temperature: {weather.maxtemp_c}°C</p>
          <p>Min Temperature: {weather.mintemp_c}°C</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Holiday;
