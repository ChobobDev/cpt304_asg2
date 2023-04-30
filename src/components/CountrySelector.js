import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountrySelector = ({ onCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        const sortedCountries = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(sortedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
    onCountryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="country-selector">Select a country:</label>
      <select id="country-selector" value={selectedCountry} onChange={handleChange}>
        <option value="">--Select a country--</option>
        {countries.map((country) => (
          <option key={country.countryCode} value={country.countryCode}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
