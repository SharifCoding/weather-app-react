// IMPORT LIBRARY
import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

import '../styles/app.scss';

// class App component renders LocationDetails, ForecastSummaries, and ForecastDetails
class App extends React.Component {
  constructor(props) {
    super(props);
    // set an initial value of this.state to be an object with a selectedDate property
    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }
  // receives a date as a parameter and sets that date as the selected datein the component state
  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }
  render() {
    // pass forecast into `ForecastDetails` based on the selectedDate
    const selectedForecast = this.props.forecasts.find(forecast => (
      forecast.date === this.state.selectedDate));
    return (
      <div className="forecast">
        <LocationDetails
          city={this.props.location.city}
          country={this.props.location.country}
        />
        <ForecastSummaries
          forecasts={this.props.forecasts}
        // pass `this.handleForecastSelect` method into ForecastSummaries as prop `onForecastSelect`
          onForecastSelect={this.handleForecastSelect}
        />
        <ForecastDetails forecasts={selectedForecast} />
      </div>
    );
  }
}

// PropTypes for the location prop use PropTypes.shape instead of PropTypes.objectOf
// PropTypes.shape - object whose keys are known ahead of time and may represent different types
App.propTypes = {
  // <LocationDetails>
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  // <ForecastSummaries>
  forecasts: PropTypes.arrayOf.isRequired,
};

// EXPORT LIBRARY
export default App;
