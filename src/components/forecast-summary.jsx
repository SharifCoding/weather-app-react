// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

// Use JSX to render props.city and props.country
const ForcastSummary = Props => (
  <div className="forecast-summary">
    <div className="forecastDate">
      {/* https://www.npmjs.com/package/moment */}
      <span>{Moment(Props.date).format('DD/MM/YYYY')}</span>
      {/* <span>{Props.date}</span> */}
    </div>
    <div className="forecastTemp">
      <span>{Props.temperature}</span>
    </div>
    <div className="forecastDes">
      <span>{Props.description}</span>
    </div>
    <div className="forecastIcon">
      {/* https://www.npmjs.com/package/react-icons-weather */}
      <WeatherIcon name="owm" iconId={Props.icon} />
      {/* <span>{Props.icon}</span> */}
    </div>
  </div>
);

// Add PropTypes for props.date and props.temperature which are both numbers
ForcastSummary.prototype = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

// EXPORT LIBRARY
export default ForcastSummary;
