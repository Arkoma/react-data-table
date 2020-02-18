import React, { Component } from "react"
import './DataGrid.css';
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import {data as exampleData } from '../../json/example';

class DataGrid extends Component {
    state = {
        columns: [
            {
                headerName: 'Category',
                field: 'category',
                width: '20%'
            },
            {
                headerName: 'Actual',
                field: 'actual',
                width: '20%'
            },
            {
                headerName: 'Budgeted',
                field: 'budgeted',
                width: '20%'
            },
            {
                headerName: 'Remaining',
                field: 'remaining',
                width: '20%'
            }
        ],
        data: [

        ]
    }

    componentDidMount() {
        let { data } = this.state;

        this.setState( { data: exampleData });
    }
    render() {
        return(
            <div className="data-grid-container">
                <AgGridReact />
            </div>
        )
    }
}

export default DataGrid;