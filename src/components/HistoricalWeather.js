import React from 'react';

const HistoricalWeather = ({ weather }) => {
  return (
    <div>
      <p>Historical Weather: {weather.weather[0].description}</p>
      <p>Temperature: {weather.temp}°C</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
};

export default HistoricalWeather;
