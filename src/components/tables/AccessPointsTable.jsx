import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import FieldVisibilityController from "../visibility/FieldVisibilityController";
import ACColumns from "../../data/columns/ACColumns";
import routerColumns from "../../data/columns/routerColumns";

const AccessPointsTable = () => {
  const [accessPoint, setAccessPoint] = useState([]);
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/access-points")
      .then((response) => response.json())
      .then((data) => setAccessPoint(data));
  }, []);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setColumnApi(params.columnApi); // Установите columnApi
    params.api.sizeColumnsToFit();
  };

  return (
    <div className="flex-container">
      <div className="flex">
        <div className="ag-theme-alpine w-full ml-3" style={{ flexGrow: 1 }}>
          <AgGridReact
            rowData={accessPoint}
            columnDefs={ACColumns}
            defaultColDef={{
              resizable: true,
              minWidth: 150,
              cellStyle: { "white-space": "normal", "line-height": "28px" },
              sortable: true,
              filter: true,
            }}
            onGridReady={onGridReady}
            onFirstDataRendered={onGridReady}
            rowSelection="multiple"
            suppressRowClickSelection
            getRowStyle={(params) => {
              return {
                backgroundColor:
                  params.node.rowIndex % 2 === 0 ? "#ffffff" : "#f3f3f3",
              };
            }}
          />
        </div>
        {columnApi && (
          <div className="w-1/4 ml-4">
            <FieldVisibilityController
              columnApi={columnApi}
              columnDefs={ACColumns}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessPointsTable;
