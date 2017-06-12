/* global describe test expect :true*/
import React from 'react';
import { shallow } from 'enzyme';

import PlayerTotalScore from '../../src/components/PlayerTotalScore';

describe('<PlayerTotalScore />', () => {
  const props = {
    playerTotalScore: 3
  };

  const wrapper = shallow(<PlayerTotalScore {...props}  />);
  test('PlayerTotalScore does not render as empty or null', () => {
    expect(wrapper.getNode()).toBeTruthy();
  });

  test('PlayerTotalScore render with the correct Text label', () => {
    expect(wrapper.find('.player-current-label').text()).toBe('Current');
  });

  test('PlayerTotalScore render with the correct Text score ammount', () => {
    expect(wrapper.find('.player-current-score').text()).toBe('3');
  });
});
