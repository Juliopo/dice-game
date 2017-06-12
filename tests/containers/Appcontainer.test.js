/* global describe test expect :true*/
import React from 'react';
import { shallow } from 'enzyme';

import { AppContainer } from '../../src/containers/AppContainer';

describe('<AppContainer />', () => {
  const wrapper = shallow(<AppContainer />);
  test('App does not render as empty or null', () => {
    expect(wrapper.getNode()).toBeTruthy();
  });

  test('App should have 6 childs elements', () => {
    expect(wrapper.props().children.length).toBe(6);
  });

  test('PlayerPanelContainer should be render as a child, two times', () => {
    expect(wrapper.find('PlayerPanelContainer').length).toBe(2);
  });

  test('App should have 3 Btn elements', () => {
    expect(wrapper.find('Btn').length).toBe(3);
  });

  test('App should have 1 Dice child element', () => {
    expect(wrapper.find('Dice').length).toBe(1);
  });
});
