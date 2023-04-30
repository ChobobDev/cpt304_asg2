import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Location = () => {
  const [locationName, setLocationName] = useState('');

  const getCurrentLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`);

          const city = response.data.address.city || response.data.address.town || response.data.address.village;
          if (city) {
            setLocationName(city);
          }
        } catch (error) {
          console.error('Error fetching location details:', error);
        }
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <p>Your current location: <strong>{locationName}</strong></p>
    </div>
  );
};

export default Location;
