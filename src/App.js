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
			autoHeight: true,
		},
		{
			field: 'weight',
			headerName: 'Weight',
			sortable: true,
			filter: 'agNumberColumnFilter',
			autoHeight: true,
			cellStyle: params => {
				return {
					backgroundColor:
						params.column.colId % 2 === 0 ? '#ffffff' : '#f3f3f3',
				}
			},
		},
		{
			field: 'size',
			headerName: 'Size',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
		},
		{
			field: 'temperature_range',
			headerName: 'Temperature Range',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
			cellStyle: params => {
				return {
					backgroundColor:
						params.column.colId % 2 === 0 ? '#ffffff' : '#f3f3f3',
				}
			},
		},
		{
			field: 'humidity_range',
			headerName: 'Humidity Range',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
		},
		{
			field: 'security_info',
			headerName: 'Security Info',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
			cellStyle: params => {
				return {
					backgroundColor:
						params.column.colId % 2 === 0 ? '#ffffff' : '#f3f3f3',
				}
			},
		},
		{
			field: 'os',
			headerName: 'OS',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
		},
		{
			field: 'supported_protocols',
			headerName: 'Supported Protocols',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
			cellStyle: params => {
				return {
					backgroundColor:
						params.column.colId % 2 === 0 ? '#ffffff' : '#f3f3f3',
				}
			},
		},
		{
			field: 'antenna',
			headerName: 'Antenna',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
		},
		{
			field: 'antenna_type',
			headerName: 'Antenna Type',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
			cellStyle: params => {
				return {
					backgroundColor:
						params.column.colId % 2 === 0 ? '#ffffff' : '#f3f3f3',
				}
			},
		},
		{
			field: 'ports_info',
			headerName: 'Ports Info',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
		},
		{
			field: 'power_source',
			headerName: 'Power Source',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
			cellStyle: params => {
				return {
					backgroundColor:
						params.column.colId % 2 === 0 ? '#ffffff' : '#f3f3f3',
				}
			},
		},
		{
			field: 'wifi_standard',
			headerName: 'WiFi Standard',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
		},
		{
			field: 'wifi_bandwidth',
			headerName: 'WiFi Bandwidth',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
			cellStyle: params => {
				return {
					backgroundColor:
						params.column.colId % 2 === 0 ? '#ffffff' : '#f3f3f3',
				}
			},
		},
		{
			field: 'ethernet_speed',
			headerName: 'Ethernet Speed',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
		},
		{
			field: 'usb_ports',
			headerName: 'USB Ports',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
			cellStyle: params => {
				return {
					backgroundColor:
						params.column.colId % 2 === 0 ? '#ffffff' : '#f3f3f3',
				}
			},
		},
		{
			field: 'vpn_support',
			headerName: 'VPN Support',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
		},
		{
			field: 'indoor_coverage_area',
			headerName: 'Indoor Coverage Area',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
			cellStyle: params => {
				return {
					backgroundColor:
						params.column.colId % 2 === 0 ? '#ffffff' : '#f3f3f3',
				}
			},
		},
		{
			field: 'outdoor_coverage_area',
			headerName: 'Outdoor Coverage Area',
			sortable: true,
			filter: 'agTextColumnFilter',
			autoHeight: true,
		},
	]

	const onGridReady = params => {
		setGridApi(params.api)
		setColumnApi(params.columnApi) // Установите columnApi
		params.api.sizeColumnsToFit()
	}

	return (
		<div className='flex-container'>
			<h1 className='font-bold text-3xl mb-5 ml-3'>Routers</h1>
			<div className='flex'>
				<div className='ag-theme-alpine w-full ml-3' style={{ flexGrow: 1 }}>
					<AgGridReact
						rowData={routers}
						columnDefs={routerColumns}
						defaultColDef={{
							resizable: true,
							minWidth: 150,
							cellStyle: { 'white-space': 'normal', 'line-height': '28px' },
							sortable: true,
							filter: true,
							cellClass: params => {
								return params.colIndex % 2 === 0 ? 'ag-custom-column-bg' : ''
							},
						}}
						onGridReady={onGridReady}
						onFirstDataRendered={onGridReady} // Добавьте событие onFirstDataRendered
						rowSelection='multiple'
						suppressRowClickSelection
					/>
				</div>
				{columnApi && (
					<div className='w-1/4 ml-4'>
						<FieldVisibilityController
							columnApi={columnApi}
							columnDefs={routerColumns}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
