// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';

// App component renders LocationDetails using JSX
// <LocationDetails city={props.location.city} country={props.location.country} />
const App = props => (
  <LocationDetails
    city={props.location.city}
    country={props.location.country}
  />
);
// PropTypes for the location prop use PropTypes.shape instead of PropTypes.objectOf
// PropTypes.shape - object whose keys are known ahead of time and may represent different types
App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
