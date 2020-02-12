import React, { Component } from "react"
import './DataGrid.css';
import { AgGridReact } from "ag-grid-react/lib/agGridReact";

class DataGrid extends Component {
    render() {
        return(
            <div className="canceled-grid-container">
                <AgGridReact />
            </div>
        )
    }
}

export default DataGrid;