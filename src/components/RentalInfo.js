import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RentalInfo = ({ location, holidayDate }) => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRentals = async (latitude, longitude, date) => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://hotels4.p.rapidapi.com/properties/list',
        {
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RENTAL_API_KEY,
            'X-RapidAPI-Host': 'apidojo-hydra.p.rapidapi.com',
          },
          params: {
            latitude,
            longitude,
            checkIn: date,
            checkOut: date,
            sortOrder: 'PRICE',
            pageNumber: 1,
            pageSize: 10,
          },
        }
      );

      setRentals(response.data.data.body.searchResults.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching rental data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      const { lat, lon } = location;
      fetchRentals(lat, lon, holidayDate);
    }
  }, [location, holidayDate]);

  if (loading) {
    return <p>Loading rental information...</p>;
  }

  if (!rentals.length) {
    return <p>No rentals found for the selected date and location.</p>;
  }

  return (
    <div>
      <h4>Rental Information</h4>
      {rentals.map((rental, index) => (
        <div key={index}>
          <h5>{rental.name}</h5>
          <p>Price: {rental.ratePlan.price.current} {rental.ratePlan.price.currency}</p>
          <p>Address: {rental.address.streetAddress}, {rental.address.locality}, {rental.address.region}, {rental.address.postalCode}, {rental.address.countryName}</p>
        </div>
      ))}
    </div>
  );
};

export default RentalInfo;
