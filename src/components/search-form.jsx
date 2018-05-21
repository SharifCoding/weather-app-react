// https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
// https://github.com/react-toolbox/react-toolbox/issues/652

// IMPORT LIBRARY
import React from 'react';

import '../styles/search-form.scss';

// Use JSX to render props.city
class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // receives a event as a parameter in the component state
  handleInputChange(event) {
    // console.log(event.target.value);
    this.setState({
      searchText: event.target.value,
    });
  }
  render() {
    return (
      <div className="search-form">
        <input
          className="search-city"
          placeholder="Enter City..."
          onChange={this.handleInputChange}
          value={this.state.searchText}
        />
        <button className="search-btn" onClick={() => this.state.searchText}>Search</button>
      </div>
    );
  }
}

// EXPORT LIBRARY
export default SearchForm;
