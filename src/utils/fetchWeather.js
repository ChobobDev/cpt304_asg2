import axios from 'axios';

const fetchWeather = async (latitude, longitude, date) => {
  const currentDate = new Date();
  const holidayDate = new Date(date);
  const diffInDays = Math.ceil((holidayDate - currentDate) / (1000 * 60 * 60 * 24));

  if (diffInDays < -16) {
    console.log('Historical data is not available');
    return { status: 'historical' };
  }

  if (diffInDays > 16) {
    console.log('Future data is not available');
    return { status: 'future' };
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${Math.floor(
        holidayDate.getTime() / 1000
      )}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    if (diffInDays < 0) {
      console.log('Historical weather data:', response.data.current);
      return { status: 'historical', weather: response.data.current };
    } else {
      console.log('Forecast weather data:', response.data.daily[0]);
      return { status: 'forecast', weather: response.data.daily[0] };
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

export default fetchWeather;
