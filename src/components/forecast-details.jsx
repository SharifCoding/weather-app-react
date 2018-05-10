// ForecastDetails needs details about; date, temperature, wind, and humidity for the selected date.
// Have date, temperature, wind and humidity props. Again, this is all available in the JSON data.

// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import '../styles/forecast-details.scss';


// ForecastDetails render the formatted date, the min and max temperatures,
// the humidity and the wind speed and direction.
const ForecastDetails = Props => (
  <div className="forecast-details">
    <div className="forecast-date">
      <span>{Moment(Props.forecasts.date).format('DD/MM/YYYY')}</span>
    </div>
    <div className="forecast-tempmax">
      <span>Max Temperature: {Props.forecasts.temperature.max} &deg;c</span>
    </div>
    <div className="forecast-tempmin">
      <span>Min Temperature: {Props.forecasts.temperature.min} &deg;c</span>
    </div>
    <div className="forecast-wind">
      <span>Wind: {Props.forecasts.wind.speed}mph {Props.forecasts.wind.direction}</span>
    </div>
    <div className="forecast-humidity">
      <span>Humidity: {Props.forecasts.humidity}%</span>
    </div>
  </div>
);

// Add PropTypes for props.date and props.temperature which are both numbers
ForecastDetails.prototype = {
  date: PropTypes.number.isRequired,
  // temperature: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  // wind: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  direction: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
};

// EXPORT LIBRARY
export default ForecastDetails;
