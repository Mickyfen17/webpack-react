import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import AppComponent from '../src/App';

describe('App', () => {
  it('renders App', () => {
    const wrapper = shallow(<AppComponent />);
    expect(wrapper).to.have.lengthOf(1);
  });
});
