// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

import '../styles/app.scss';

// App component renders LocationDetails, ForecastSummaries, and ForecastDetails
const App = props => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts} />
    <ForecastDetails forecasts={props.forecasts[0]} />
    {/* <ForecastDetails
      date={props.forecast.date}
      max={props.forecast.temperature.max}
      min={props.forecast.temperature.min}
      speed={props.forecast.wind.speed}
      direction={props.forecast.wind.direction}
      humidity={props.forecast.humidity}
    /> */}
  </div>
);
// PropTypes for the location prop use PropTypes.shape instead of PropTypes.objectOf
// PropTypes.shape - object whose keys are known ahead of time and may represent different types
App.propTypes = {
  // <LocationDetails>
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  // <ForecastSummaries>
  forecasts: PropTypes.arrayOf.isRequired,
  // <ForecastDetails>
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    humidity: PropTypes.number,
  }).isRequired,
};

// EXPORT LIBRARY
export default App;
