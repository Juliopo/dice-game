/* global describe test expect :true*/
import React from 'react';
import { shallow } from 'enzyme';

import { PlayerPanelContainer } from '../../src/containers/PlayerPanelContainer';

describe('<PlayerPanelContainer />', () => {
  const playerInfo = {
    id: 1,
    name: 'player1',
    score: 0,
    totalScore: 0
  };
  const wrapper = shallow(<PlayerPanelContainer playerInfo={ playerInfo } isMyTurn />);
  test('PlayerPanelContainer does not render as empty or null', () => {
    expect(wrapper.getNode()).toBeTruthy();
  });

  test('PlayerPanelContainer should have 3 elements or more', () => {
    expect(wrapper.props().children.length).toBe(3);
  });
});
