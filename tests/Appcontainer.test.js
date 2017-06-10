/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import { AppContainer } from '../src/containers/AppContainer';

describe('<AppContainer />', () => {
  const wrapper = shallow(<AppContainer />);
  test('App does not render as empty or null', () => {
    expect(wrapper.getNode()).toBeTruthy();
  });
});
/* eslint-enable */
