/* global describe test expect :true*/
import React from 'react';
import { shallow } from 'enzyme';

import  Dice from '../../src/components/Dice';

describe('<Dice />', () => {
  const props = {
    diceResult: 4,
    isDiceRolling: false
  };
  const wrapper = shallow(<Dice {...props}  />);
  test('Dice does not render as empty or null', () => {
    expect(wrapper.getNode()).toBeTruthy();
  });

  test('Dice render with the correct image', () => {
    expect(wrapper.prop('alt')).toBe('Dice-4');
  });
});
