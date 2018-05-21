// IMPORT LIBRARY
import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';

import '../styles/app.scss';

// class App component renders LocationDetails, ForecastSummaries, and ForecastDetails
class App extends React.Component {
  constructor(props) {
    super(props);
    // set an initial value of this.state to be an object with a selectedDate property
    this.state = {
      // selectedDate: this.state.forecasts[0].date,
      forecasts: [],
      location: {
        city: [], // gets info from response.data.location.city
        country: [], // gets info from response.data.location.country
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  componentDidMount() {
    // componentDidMount; use axios to make a HTTP request for weather data from the following API
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${this.state.location.city}`)
    // axios.get('https://mcr-codes-weather.herokuapp.com/forecast')
      .then((response) => {
        // setState method; set values of this.state.forecasts and this.state.location
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          // `selectedDate` can only be set after you get the data from the API
          selectedDate: response.data.forecasts[0].date,
        });
      }).catch((err) => {
        console.log(err);
      });
  }

  // receives a date as a parameter and sets that date as the selected date in the component state
  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    // pass forecast into `ForecastDetails` based on the selectedDate
    const selectedForecast = (
      this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate)
    );

    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm
          forecasts={this.state.forecasts}
          location={this.state.location}
        />
        <ForecastSummaries
          forecasts={this.state.forecasts}
        // pass `this.handleForecastSelect` method into ForecastSummaries as prop `onForecastSelect`
          onForecastSelect={this.handleForecastSelect}
        />
        {/* https://reactjs.org/docs/conditional-rendering.html */}
        {/* {someCondition && <MyConditionalyRenderedComponent>} */}
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

// EXPORT LIBRARY
export default App;
