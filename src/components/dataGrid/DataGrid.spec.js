import React from 'react';
import { shallow } from 'enzyme';
import DataGrid from './DataGrid';
import { AgGridReact } from 'ag-grid-react';

describe('CanceledGrid', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<DataGrid />));

    it('should render a single <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should contain a matching <AgGridReact /> element', () => {
        expect(wrapper.containsMatchingElement(<AgGridReact />)).toEqual(true);
    });

});