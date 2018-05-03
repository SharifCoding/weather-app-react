// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';

// Use JSX to render props.city and props.country
const ForcastSummary = props =>
  (<div className="forecast-summary">
    <div className="forecastDate">
      <span>{props.date}</span>
    </div>
    <div className="forecastTemp">
      <span>{props.temperature}</span>
    </div>
    <div className="forecastDes">
      <span>{props.description}</span>
    </div>
    <div className="forecastIcon">
      <span>{props.icon}</span>
    </div>
  </div>);

// Add PropTypes for props.date and props.temperature which are both numbers
ForcastSummary.prototype = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

// EXPORT LIBRARY
export default ForcastSummary;
