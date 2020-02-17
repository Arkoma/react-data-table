import React, { Component } from "react"
import './DataGrid.css';
import { AgGridReact } from "ag-grid-react/lib/agGridReact";

class DataGrid extends Component {
    state = {
        columns: [
            {
                headerName: 'Category'
            },
            {
                headerName: 'Actual'
            },
            3,
            4
        ]
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