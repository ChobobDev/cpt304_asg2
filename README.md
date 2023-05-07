# Public Holiday Planner

## Overview

The Public Holiday Planner is a React-based web application that allows users to explore public holidays in different countries, along with weather information and short-term rental options for those holidays.

## Features

- Select a country to view its public holidays
- Display weather information for the selected public holiday in the user's area
- Show available short-term accommodation rentals for the selected public holiday

## Dependencies

This project uses the following dependencies:

- [React](https://reactjs.org/)
- [axios](https://github.com/axios/axios)
- [date-fns](https://date-fns.org/)
- [react-geolocated](https://github.com/no23reason/react-geolocated)

Please make sure to have these dependencies installed when running the project.

## Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/public-holiday-planner.git
```

2. Change to the project directory:

```
cd public-holiday-planner
```

3. Install dependencies:

```
npm install
```

4. Create a `.env` file in the root of the project directory, and add your API keys for the following services:

```
REACT_APP_CALENDARIFIC_API_KEY=your_calendarific_api_key
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
REACT_APP_HOTELS4_API_KEY=your_hotels4_api_key
```

5. Start the development server:

```
npm start
```

The application should now be running on `http://localhost:3000`.

## Usage

1. Select a country from the dropdown menu to view its list of public holidays.
2. Click on a public holiday to view weather and short-term rental information for that date.
3. Enter your location or use geolocation to find relevant weather and rental information.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)