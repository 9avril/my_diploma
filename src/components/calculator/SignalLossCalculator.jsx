import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const SignalLossCalculator = ({ obstacles }) => {
	const [bandwidth, setBandwidth] = useState('')
	const [selectedObstacles, setSelectedObstacles] = useState([
		{ obstacleType: '', material: '' },
	])
	const [calculatedBandwidth, setCalculatedBandwidth] = useState(null)

	const handleChangeObstacle = (e, index) => {
		const newObstacles = [...selectedObstacles]
		newObstacles[index].obstacleType = e.target.value
		setSelectedObstacles(newObstacles)
	}

	const handleChangeMaterial = (e, index) => {
		const newObstacles = [...selectedObstacles]
		newObstacles[index].material = e.target.value
		setSelectedObstacles(newObstacles)
	}

	const uniqueMaterials = [
		...new Set(obstacles.map(obstacle => obstacle.material)),
	]

	const addObstacle = () => {
		setSelectedObstacles([
			...selectedObstacles,
			{ obstacleType: '', material: '' },
		])
	}

	const calculateBandwidth = () => {
		let newBandwidth = parseFloat(bandwidth)
		selectedObstacles.forEach(selectedObstacle => {
			const obstacle = obstacles.find(
				o => o.obstacle_type === selectedObstacle.obstacleType
			)
			if (obstacle) {
				const signalLossPercent = parseFloat(
					obstacle.signal_loss_percent
				)
				newBandwidth = newBandwidth * (1 - signalLossPercent / 100)
			}
		})
		setCalculatedBandwidth(newBandwidth.toFixed(2))
	}

	return (
		<div className='bg-[rgba(20,40,70,1)] mt-3 p-4 rounded-2xl text-white w-80'>
			<h3 className='text-xl'>Signal Loss Calculator</h3>
			<TextField
				label='Router Bandwidth (Mbps):'
				type='number'
				value={bandwidth}
				onChange={e => setBandwidth(e.target.value)}
				sx={{ color: 'white', width: '200px' }}
				InputProps={{
					inputProps: { style: { color: 'white' } },
				}}
			/>
			{selectedObstacles.map((selectedObstacle, index) => (
				<div key={index} className='my-2'>
					<InputLabel
						id={`obstacle-${index}-label`}
						className='text-white'
					>
						Obstacles
					</InputLabel>
					<Select
						labelId={`obstacle-${index}-label`}
						value={selectedObstacle.obstacleType}
						onChange={e => handleChangeObstacle(e, index)}
						className='text-white mb-2'
						sx={{ color: 'white', width: '212px' }}
					>
						<MenuItem value=''>
							<em>Obstacles</em>
						</MenuItem>
						{obstacles.map(obstacle => (
							<MenuItem
								key={obstacle.obstacle_type}
								value={obstacle.obstacle_type}
							>
								{obstacle.obstacle_type}
							</MenuItem>
						))}
					</Select>

					<InputLabel
						id={`material-${index}-label`}
						className='text-white'
					>
						Materials
					</InputLabel>
					<Select
						labelId={`material-${index}-label`}
						value={selectedObstacle.material}
						onChange={e => handleChangeMaterial(e, index)}
						className='text-white mb-2'
						sx={{ color: 'white', width: '212px' }}
					>
						<MenuItem value=''>
							<em>Select a material</em>
						</MenuItem>
						{uniqueMaterials.map(materialItem => (
							<MenuItem key={materialItem} value={materialItem}>
								{materialItem}
							</MenuItem>
						))}
					</Select>
				</div>
			))}
			<Button
				variant='contained'
				color='primary'
				onClick={addObstacle}
				className='mr-4'
			>
				Add Obstacle
			</Button>
			<Button
				variant='contained'
				color='secondary'
				onClick={calculateBandwidth}
			>
				Calculate
			</Button>
			{calculatedBandwidth && (
				<p>
					Bandwidth after passing through the obstacles:{' '}
					<strong>{calculatedBandwidth} Mbps</strong>
				</p>
			)}
		</div>
	)
}

export default SignalLossCalculator
