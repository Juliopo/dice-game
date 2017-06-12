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

  test('PlayerName should render as a child', () => {
    expect(wrapper.find('PlayerName').length).toBe(1);
  });

  test('Should have 1 PlayerScore element', () => {
    expect(wrapper.find('PlayerScore').length).toBe(1);
  });

  test('Should have 1 PlayerTotalScore child element', () => {
    expect(wrapper.find('PlayerTotalScore').length).toBe(1);
  });
});
