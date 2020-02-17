import React from 'react';
import { shallow } from 'enzyme';
import DataGrid from './DataGrid';
import { AgGridReact } from 'ag-grid-react';

describe('DataGrid', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<DataGrid />));

    it('should render a single <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should contain a matching <AgGridReact /> element', () => {
        expect(wrapper.containsMatchingElement(<AgGridReact />)).toEqual(true);
    });

    it('should contain 4 headings', () => {
        expect(wrapper.instance().state.columns.length).toEqual(4);
    });

    it('should contain a header with the name "Category"', () => {
        expect(wrapper.instance().state.columns[0].headerName).toEqual('Category');
    });

    it('should contain a header with the name "Actual"', () => {
        expect(wrapper.instance().state.columns[1].headerName).toEqual('Actual');
    })

});