// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

import '../styles/forecast-summary.scss';


// Use JSX to render props.city and props.country
const ForcastSummary = Props => (
  <div className="forecast-summary">
    <div className="forecastDate">
      {/* https://www.npmjs.com/package/moment */}
      <span>{Moment(Props.date).format('DD/MM/YYYY')}</span>
      {/* <span>{Props.date}</span> */}
    </div>
    <div className="forecastTemp">
      <span>{Props.temperature} &deg;c</span>
    </div>
    <div className="forecastDes">
      <span>{Props.description}</span>
    </div>
    <div className="forecastIcon">
      {/* https://www.npmjs.com/package/react-icons-weather */}
      <WeatherIcon name="owm" iconId={Props.icon} />
      {/* <span>{Props.icon}</span> */}
    </div>
    <div className="moreDetails">
      {/* Adding the More Details button with event handler */}
      {/* https://reactjs.org/docs/faq-functions.html */}
      <button onClick={() => Props.onSelect(Props.date)}>More Details</button>
    </div>
  </div>
);

// Add PropTypes for props.date and props.temperature which are both numbers
ForcastSummary.prototype = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onForecastSelect: PropTypes.number.isRequired,
};

// EXPORT LIBRARY
export default ForcastSummary;
