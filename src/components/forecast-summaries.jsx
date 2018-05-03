// IMPORT LIBRARY
import React from 'react';
import ForecastSummary from './forecast-summary';

// Use JSX to render props.city and props.country
const ForcastSummaries = props => (
  <div className="forecast-summaries">
    {
    props.forecasts.map(forecast => (
      <ForecastSummary
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature.max}
      />
    ))
  }
  </div>
);

// EXPORT LIBRARY
export default ForcastSummaries;
