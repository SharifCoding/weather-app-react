// IMPORT LIBRARY
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ForcastSummary from '../../src/components/forecast-summary';
import ForcastSummaries from '../../src/components/forecast-summaries';

// MOCK VALUES TO TEST
const forecasts = [
  {
    date: 123,
    description: 'Monday',
    icon: 'icon1',
    temperature: {
      max: 999,
    },
  },
  {
    date: 456,
    description: 'Friday',
    icon: 'icon2',
    temperature: {
      max: 777,
    },
  },
];

// TEST UNITS
describe('component forecast-summary', () => {
  it('renders the date', () => {
    // variable `wrapper` a rendered component using Enzyme
    const wrapper = shallow((
      <ForcastSummary
        date="mockDate"
        temperature="mockTemp"
        description="mockDes"
        icon="mockIcon"
      />
    ));
    // selected an element using `find` and use `text` method to get the text from the element
    const text = wrapper.find('.forecastDate').text();
    // normal Jest assertion to check what is expected
    expect(text).toEqual('mockDate');
  });
  it('renders the temperature', () => {
    const wrapper = shallow((
      <ForcastSummary
        date="mockDate"
        temperature="mockTemp"
        description="mockDes"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.forecastTemp').text()).toEqual('mockTemp');
  });
  it('renders the description', () => {
    const wrapper = shallow((
      <ForcastSummary
        date="mockDate"
        temperature="mockTemp"
        description="mockDes"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.forecastDes').text()).toEqual('mockDes');
  });
  it('renders the icon', () => {
    const wrapper = shallow((
      <ForcastSummary
        date="mockDate"
        temperature="mockTemp"
        description="mockDes"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.forecastIcon').text()).toEqual('mockIcon');
  });
});

describe('forecast-summary rendered components', () => {
  it('renders correct amount of components', () => {
    const wrapper = Enzyme.shallow((
      <ForcastSummaries forecasts={forecasts} />
    ));
    // `find` method returns an array to assert the correct number components have been rendered
    expect(wrapper.find(ForcastSummary).length).toEqual(2);
  });
  it('passes correct values from each forecast', () => {
    const wrapper = Enzyme.shallow((
      <ForcastSummaries forecasts={forecasts} />
    ));
    // `find` method will return all of the DOM nodes which match the given selector
    wrapper.find(ForcastSummary).forEach((node, index) => {
      // `forEach` method to make assertions on each node (date, description, icon, and temperature)
      expect(node.prop('date')).toEqual(forecasts[index].date);
      expect(node.prop('description')).toEqual(forecasts[index].description);
      expect(node.prop('icon')).toEqual(forecasts[index].icon);
      expect(node.prop('temperature')).toEqual(forecasts[index].temperature.max);
    });
  });
});
