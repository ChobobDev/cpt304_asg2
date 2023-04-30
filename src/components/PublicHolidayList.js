import React, { useState, useEffect } from 'react';
import axios from 'axios';

const holidayBlockStyle = {
    display: 'inline-block',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  

const PublicHolidayList = ({ countryCode, onHolidaySelect }) => {
  const [publicHolidays, setPublicHolidays] = useState([]);

  useEffect(() => {
    const fetchPublicHolidays = async () => {
      if (countryCode) {
        try {
          const response = await axios.get(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`);
          setPublicHolidays(response.data);
        } catch (error) {
          console.error('Error fetching public holidays:', error);
        }
      } else {
        setPublicHolidays([]);
      }
    };

    fetchPublicHolidays();
  }, [countryCode]);

  const handleHolidayClick = (holiday) => {
    onHolidaySelect(holiday);
  };

  return (
    <div>
      <h2>Public Holidays</h2>
      {publicHolidays.length === 0 ? (
      <p>No public holidays available for the selected country.</p>
    ) : (
      <div>
        {publicHolidays.map((holiday) => (
          <div
            key={holiday.date}
            style={holidayBlockStyle}
            onClick={() => handleHolidayClick(holiday)}
          >
            <strong>{holiday.name}</strong>
            <br />
            {holiday.date}
          </div>
        ))}
      </div>
        )}
    </div>
  );
};

export default PublicHolidayList;
