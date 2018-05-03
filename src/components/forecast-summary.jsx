// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';

// Use JSX to render props.city and props.country
const ForcastSummary = props => <h1 className="forecast-summary">{props.city}, {props.country}</h1>;

// Add PropTypes for props.city and props.country which are both strings
ForcastSummary.prototype = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

// EXPORT LIBRARY
export default ForcastSummary;
