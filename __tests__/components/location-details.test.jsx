// IMPORT LIBRARY
import React from 'react';
import Enzyme from 'enzyme';
import LocationDetails from '../../src/components/location-details';

describe('component location-details', () => {
  it('renders the passed city and country in a h1 tag', () => {
    // variable `wrapper` a rendered component using Enzyme
    const wrapper = Enzyme.shallow((
      <LocationDetails city="foo" country="bar" />
    ));
    // selected an element using `find` and use `text` method to get the text from the element
    const text = wrapper.find('h1').text();
    // normal Jest assertion to check what is expected
    expect(text).toEqual('foo, bar');
  });
});
