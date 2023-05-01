import React from 'react';

const ForecastWeather = ({ weather }) => {
  return (
    <div>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Average Temperature: {weather.temp.day}°C</p>
      <p>Max Temperature: {weather.temp.max}°C</p>
      <p>Min Temperature: {weather.temp.min}°C</p>
    </div>
  );
};

export default ForecastWeather;
