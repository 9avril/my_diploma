import React from 'react'
import Plot from 'react-plotly.js'
import firstFloorData from '../data/data-floors/firstFloor.js'

const PlotlyExample = () => {
	const data = firstFloorData[0].APFound

	const traces = data
		.filter(item => item.LS && item.LS.length > 0 && item.LS[0].length > 0)
		.map(item => {
			const xValues = Array.from(
				{ length: item.LS[0].length },
				(_, i) => item.CH + i * 10
			)
			const yValues = item.LS.map((_, i) => -68 - i * 4)

			return {
				x: xValues,
				y: yValues,
				z: item.LS,
				type: 'surface',
				name: item.S,
				showscale: false,
				colorscale: 'Blues',
			}
		})

	const layout = {
		// title: 'Topographical 3D Surface Plot',
		width: 500,
		height: 500,
		margin: {
			l: 0,
			r: 50,
			b: 50,
			t: 50,
			pad: 4,
		},
		scene: {
			xaxis: {
				title: 'CH',
				gridcolor: 'white', // Измените цвет линий сетки
				zerolinecolor: 'white',
			},
			yaxis: {
				title: 'LS',
				gridcolor: 'white',
				zerolinecolor: 'white',
			},
			zaxis: {
				title: 'SR',
				gridcolor: 'white',
				zerolinecolor: 'white',
			},
			bgcolor: 'rgb(0, 0, 20)', // Измените фон диаграммы на темный
		},
		plot_bgcolor: 'rgb(0, 0, 30)', // Измените фон области графика на темный
		paper_bgcolor: 'rgb(0, 0, 30)', // Измените фон страницы на темный
		font: {
			color: 'white', // Измените цвет текста на белый
		},
	}
	return (
		<div className='plot-container'>
			<Plot data={traces} layout={layout} className='js-plotly-plot' />
		</div>
	)
}

export default PlotlyExample
