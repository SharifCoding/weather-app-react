// https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/search-form.scss';

// Use JSX to render props.city
const SearchForm = Props => (
  <div className="search-form">
    <input
      className="search-city"
      placeholder="Enter City..."
    />
    <button className="search-btn" onClick={() => Props.city}>Search</button>
  </div>
);

// Add PropTypes for props.city which is string
SearchForm.prototype = {
  city: PropTypes.string.isRequired,
};

// EXPORT LIBRARY
export default SearchForm;
