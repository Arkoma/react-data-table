import React from 'react';
import { shallow } from 'enzyme';
import DataGrid from './DataGrid';
import { AgGridReact } from 'ag-grid-react';
import App from '../../App';

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
    });

    it('should contain a header with the name "Budgeted"', () => {
        expect(wrapper.instance().state.columns[2].headerName).toEqual('Budgeted');
    });

    it('should contain a header with the name "Remaining"', () => {
        expect(wrapper.instance().state.columns[3].headerName).toEqual('Remaining');
    });

    it('should contain a field with the name "category"', () => {
        expect(wrapper.instance().state.columns[0].field).toEqual('category');
    });

    it('should contain a field with the name "actual"', () => {
        expect(wrapper.instance().state.columns[1].field).toEqual('actual');
    });

    it('should contain a field with the name "budgeted"', () => {
        expect(wrapper.instance().state.columns[2].field).toEqual('budgeted');
    });

    it('should contain a field with the name "remaining"', () => {
        expect(wrapper.instance().state.columns[3].field).toEqual('remaining');
    });

    it('should contain rows each with a width of 20%', () => {
        expect(wrapper.instance().state.columns[0].width).toEqual('20%');
        expect(wrapper.instance().state.columns[1].width).toEqual('20%');
        expect(wrapper.instance().state.columns[2].width).toEqual('20%');
        expect(wrapper.instance().state.columns[3].width).toEqual('20%');
    });

    it('should contian data', () => {
        expect(wrapper.instance().state.data).toEqual(!null);
    });

});