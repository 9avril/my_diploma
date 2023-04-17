import { AgGridReact } from 'ag-grid-react'
import React, { useEffect, useState } from 'react'
import './App.css'
import FieldVisibilityController from './FieldVisibilityController'

function App() {
	const [routers, setRouters] = useState([])
	const [gridApi, setGridApi] = useState(null)
	const [columnApi, setColumnApi] = useState(null) // Создайте новое состояние для columnApi

	useEffect(() => {
		fetch('http://localhost:3001/routers')
			.then(response => response.json())
			.then(data => setRouters(data))
	}, [])

	const routerColumns = [
		{
			field: 'model',
			headerName: 'Model',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'weight',
			headerName: 'Weight',
			sortable: true,
			filter: 'agNumberColumnFilter',
		},
		{
			field: 'size',
			headerName: 'Size',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'temperature_range',
			headerName: 'Temperature Range',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'humidity_range',
			headerName: 'Humidity Range',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'security_info',
			headerName: 'Security Info',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'os',
			headerName: 'OS',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'supported_protocols',
			headerName: 'Supported Protocols',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'antenna',
			headerName: 'Antenna',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'antenna_type',
			headerName: 'Antenna Type',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'ports_info',
			headerName: 'Ports Info',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'power_source',
			headerName: 'Power Source',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'wifi_standard',
			headerName: 'WiFi Standard',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'wifi_bandwidth',
			headerName: 'WiFi Bandwidth',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'ethernet_speed',
			headerName: 'Ethernet Speed',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'usb_ports',
			headerName: 'USB Ports',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'vpn_support',
			headerName: 'VPN Support',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'indoor_coverage_area',
			headerName: 'Indoor Coverage Area',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
		{
			field: 'outdoor_coverage_area',
			headerName: 'Outdoor Coverage Area',
			sortable: true,
			filter: 'agTextColumnFilter',
		},
	]
	const onGridReady = params => {
		setGridApi(params.api)
		setColumnApi(params.columnApi) // Установите columnApi
		params.api.sizeColumnsToFit()
	}

	return (
		<div>
			<h1>Routers</h1>
			<div className='ag-theme-alpine' style={{ height: 400, width: '100%' }}>
				<AgGridReact
					rowData={routers}
					columnDefs={routerColumns}
					defaultColDef={{
						resizable: true,
						minWidth: 150,
						cellStyle: { 'white-space': 'normal', 'line-height': '20px' },
						sortable: true,
						filter: true,
					}}
					onGridReady={onGridReady}
					onFirstDataRendered={onGridReady} // Добавьте событие onFirstDataRendered
					rowSelection='multiple'
					suppressRowClickSelection
				/>
			</div>
			{columnApi && (
				<FieldVisibilityController
					columnApi={columnApi}
					columnDefs={routerColumns}
				/>
			)}
		</div>
	)
}

export default App
