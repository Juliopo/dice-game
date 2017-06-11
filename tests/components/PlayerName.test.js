/* global describe test expect :true*/
import React from 'react';
import { shallow } from 'enzyme';

import PlayerName from '../../src/components/PlayerName';

describe('<PlayerName />', () => {
  const props = {
    playerName: 'Julio'
  };
  const wrapper = shallow(<PlayerName {...props}  />);
  test('PlayerName does not render as empty or null', () => {
    expect(wrapper.getNode()).toBeTruthy();
  });

  test('PlayerName render with the correct Text', () => {
    expect(wrapper.text()).toBe('Julio');
  });
});
