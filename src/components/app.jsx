// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import '../styles/app.scss';

// App component renders LocationDetails, ForecastSummaries using JSX
const App = props => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts} />
  </div>
);
// PropTypes for the location prop use PropTypes.shape instead of PropTypes.objectOf
// PropTypes.shape - object whose keys are known ahead of time and may represent different types
App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

// EXPORT LIBRARY
export default App;
