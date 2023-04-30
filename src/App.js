import CountrySelector from './components/CountrySelector';
import PublicHolidayList from './components/PublicHolidayList';
import Location from './components/Location';
import React, { useState } from 'react';
import './App.css';

const  App=()=> {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [publicHoliday, setPublicHoliday] = useState(null);
  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    console.log(countryCode);
  };
  const handlePublicHoliday = (holiday) => {
    setPublicHoliday(holiday);
  };
  return (
    <div className="App">
      <Location/>
      <CountrySelector onCountryChange={handleCountryChange} />
      <PublicHolidayList countryCode={selectedCountry} onHolidaySelect={handlePublicHoliday} />
    </div>
  );
}

export default App;
