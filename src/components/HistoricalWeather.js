import React from 'react';

const HistoricalWeather = ({ weather }) => {
  return (
    <div>
      <p>Historical weather:</p>
      <p>Temperature: {weather?.temp}°C</p>
      <p>Humidity: {weather?.humidity}%</p>
      <p>Weather: {weather?.weather[0]?.description}</p>
    </div>
  );
};

export default HistoricalWeather;
