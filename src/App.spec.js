import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import DataGrid from './components/dataGrid/DataGrid';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should contain a <CanceledGrid /> component', () => {
    expect(wrapper.containsMatchingElement(<DataGrid />)).toEqual(true);
  });

});
