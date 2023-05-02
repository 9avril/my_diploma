import React, { useState } from 'react'

const SignalLossCalculator = ({ obstacles }) => {
	const [bandwidth, setBandwidth] = useState('')
	const [selectedObstacle, setSelectedObstacle] = useState('')
	const [calculatedBandwidth, setCalculatedBandwidth] = useState(null)

	const calculateBandwidth = () => {
		const obstacle = obstacles.find(
			o => o.obstacle_type === selectedObstacle
		)
		if (obstacle) {
			const signalLossPercent = parseFloat(obstacle.signal_loss_percent)
			const newBandwidth = bandwidth * (1 - signalLossPercent / 100)
			setCalculatedBandwidth(newBandwidth.toFixed(2))
		} else {
			setCalculatedBandwidth(null)
		}
	}

	return (
		<div className='border border-gray-200 p-4 rounded bg-gray-200 mt-4     '>
			<h3 className='text-xl font-semibold mb-4'>
				Signal Loss Calculator
			</h3>
			<div className='mb-4'>
				<label htmlFor='bandwidth' className='text-black'>
					Router Bandwidth (Mbps):
				</label>
				<input
					type='number'
					id='bandwidth'
					className='ml-2'
					value={bandwidth}
					onChange={e => setBandwidth(e.target.value)}
				/>
			</div>
			<div className='mb-4'>
				<label htmlFor='obstacle' className='text-black'>
					Obstacle:
				</label>
				<select
					id='obstacle'
					className='ml-2'
					value={selectedObstacle}
					onChange={e => setSelectedObstacle(e.target.value)}
				>
					<option value=''>Select an obstacle</option>
					{obstacles.map(obstacle => (
						<option
							key={obstacle.obstacle_type}
							value={obstacle.obstacle_type}
						>
							{obstacle.obstacle_type}
						</option>
					))}
				</select>
			</div>
			<button
				onClick={calculateBandwidth}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
			>
				Calculate
			</button>
			{calculatedBandwidth && (
				<p className='mt-4'>
					Bandwidth after passing through the obstacle:{' '}
					<strong>{calculatedBandwidth} Mbps</strong>
				</p>
			)}
		</div>
	)
}

export default SignalLossCalculator
