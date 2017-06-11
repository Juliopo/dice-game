/* global describe test expect :true*/
import React from 'react';
import { shallow } from 'enzyme';

import  Btn from '../../src/components/Btn';

describe('<Btn />', () => {
  const props = {
    NameClass: 'btn-new',
    text: 'New Game',
    icon: 'ion-ios-plus-outline'
  };
  const wrapper = shallow(<Btn {...props}  />);
  test('Btn does not render as empty or null', () => {
    expect(wrapper.getNode()).toBeTruthy();
  });

  test('Btn render with Text new Game', () => {
    expect(wrapper.find('button').text()).toEqual(props.text);
  });

  test('Btn render with correct className', () => {
    expect(wrapper.find(`.${props.NameClass}`).length).toBe(1);
  });

  test('Btn render with correct className', () => {
    expect(wrapper.find(`.${props.icon}`).length).toBe(1);
  });
});
