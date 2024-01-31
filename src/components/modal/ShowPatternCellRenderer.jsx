import React from 'react'
import radiationPattern from '../../data/columns/radiationPattern'

const ShowPatternCellRenderer = props => {
	const { data, context } = props
	const { handleShowModal } = context

	const handleClick = () => {
		const imgUrl = radiationPattern[data.model]
		handleShowModal(imgUrl)
	}

	return (
		<button onClick={handleClick} className='text-blue-500'>
			Show Radiation Pattern
		</button>
	)
}

export default ShowPatternCellRenderer
