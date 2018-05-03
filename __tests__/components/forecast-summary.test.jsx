// IMPORT LIBRARY
import React from 'react';
import { shallow } from 'enzyme';
import ForcastSummary from '../../src/components/forecast-summary';

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
