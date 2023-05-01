import React from 'react';

const ForecastWeather = ({ weather }) => {
  return (
    <div>
      <p>Weather forecast:</p>
      <p>Temperature: {weather?.temp.day}°C</p>
      <p>Humidity: {weather?.humidity}%</p>
      <p>Weather: {weather?.weather[0]?.description}</p>
    </div>
  );
};

export default ForecastWeather;
