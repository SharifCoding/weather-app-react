// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';

// Use JSX to render props.city and props.country
// const LocationDetails = () => <h1 className="location-details" />;
const LocationDetails = Props => <h1 className="location-details">{Props.city}, {Props.country}</h1>;

// Add PropTypes for props.city and props.country which are both strings
LocationDetails.prototype = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

// EXPORT LIBRARY
export default LocationDetails;
