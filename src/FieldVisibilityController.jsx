import React, { useEffect, useState } from 'react'

const FieldVisibilityController = ({ columnApi, columnDefs }) => {
	const [columnVisibility, setColumnVisibility] = useState({})

	useEffect(() => {
		if (columnApi) {
			const initialVisibility = {}
			columnDefs.forEach(col => {
				initialVisibility[col.field] = columnApi
					.getColumn(col.field)
					.isVisible()
			})
			setColumnVisibility(initialVisibility)
		}
	}, [columnApi, columnDefs])

	const handleChange = (field, isChecked) => {
		if (columnApi) {
			columnApi.setColumnVisible(field, isChecked)
			setColumnVisibility({ ...columnVisibility, [field]: isChecked })
		}
	}

	// Не рендерим компонент, если columnApi еще не установлен
	if (!columnApi) {
		return null
	}

	return (
		<div className='border border-gray-200 p-4 rounded bg-gray-200'>
			<h3 className='text-xl font-semibold mb-4'>Field Visibility</h3>
			<ul>
				{columnDefs.map(col => (
					<li key={col.field} className='flex items-center mb-2'>
						<input
							type='checkbox'
							id={col.field}
							className='mr-2'
							checked={columnVisibility[col.field]}
							onChange={e => handleChange(col.field, e.target.checked)}
						/>
						<label htmlFor={col.field} className='text-black'>
							{col.headerName}
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}
export default FieldVisibilityController
