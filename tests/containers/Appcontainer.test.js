/* global describe test expect :true*/
import React from 'react';
import { shallow } from 'enzyme';

import { AppContainer } from '../../src/containers/AppContainer';

describe('<AppContainer />', () => {
  const wrapper = shallow(<AppContainer />);
  test('App does not render as empty or null', () => {
    expect(wrapper.getNode()).toBeTruthy();
  });

  test('App should have 6 elements or more', () => {
    expect(wrapper.props().children.length).toBeGreaterThan(5);
  });
});
