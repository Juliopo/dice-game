/* global describe test expect :true*/
import React from 'react';
import { shallow } from 'enzyme';

import PlayerScore from '../../src/components/PlayerScore';

describe('<PlayerScore />', () => {
  const props = {
    playerScore: 23,
    position: 'left'
  };
  const wrapper = shallow(<PlayerScore {...props}  />);
  test('PlayerScore does not render as empty or null', () => {
    expect(wrapper.getNode()).toBeTruthy();
  });

  test('PlayerScore render with the correct Text', () => {
    expect(wrapper.text()).toBe('23');
  });
});
