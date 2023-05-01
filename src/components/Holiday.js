import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HistoricalWeather from './HistoricalWeather';
import ForecastWeather from './ForecastWeather';
import FutureWeather from './FutureWeather';
import fetchWeather from '../utils/fetchWeather'


const Holiday = ({ holiday, location }) => {
  const [weather, setWeather] = useState(null);
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [showRentalInfo, setShowRentalInfo] = useState(false);

  const holidayBlockStyle = {
    display: 'inline-block',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  useEffect(() => {
    if (location) {
      setLoading(true);
      const { lat, lon } = location;
      const formattedDate = new Date(holiday.date).toISOString().split('T')[0];
      fetchWeather(lat, lon, formattedDate).then((result) => {
        setStatus(result.status);
        setWeather(result.weather);
        setLoading(false);
      });
    }
  }, [location, holiday]);

  const renderWeather = () => {
    if (loading) {
      return <p>Loading weather...</p>;
    }
  
    if (status === 'historical') {
      return <HistoricalWeather weather={weather} />;
    }
  
    if (status === 'forecast') {
      return <ForecastWeather weather={weather} />;
    }
  
    if (status === 'future') {
      const diffInDays = Math.ceil(
        (new Date(holiday.date) - new Date()) / (1000 * 60 * 60 * 24)
      );
      return <FutureWeather days={diffInDays} />;
    }
  
    return <p>Weather data unavailable</p>;
  };
  

  return (
    <div className="holiday" style={holidayBlockStyle}>
      <h4>{holiday.name}</h4>
      <p>{holiday.date}</p>
      {loading ? <p>Loading weather...</p> : renderWeather()}
    </div>
  );
};

export default Holiday;
