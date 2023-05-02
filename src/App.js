import React from 'react'
import {
	Link,
	Route,
	BrowserRouter as Router,
	Routes,
	useMatch,
} from 'react-router-dom'
import './App.css'
import FirstFloorCharts from './components/charts/first_floor/FirstFloorCharts.jsx'
import AccessPointsTable from './components/tables/AccessPointsTable'
import ObstaclesTable from './components/tables/ObstaclesTable'
import RoutersTable from './components/tables/RoutersTable'
function NavLink(props) {
	const match = useMatch(props.to)
	return (
		<Link
			{...props}
			className={`text-black text-xl ${
				match ? 'text-blue-100' : 'hover:text-blue-100'
			} transition-all duration-300`}
		/>
	)
}

function App() {
	return (
		<>
			<Router>
				<div className='flex-container'>
					<nav className='bg-gray-400 p-4 mb-7'>
						<ul className='flex space-x-4'>
							<li>
								<NavLink to='/routers'>Routers</NavLink>
							</li>
							<li>
								{/*<NavLink to="/access-points">Access Points</NavLink>*/}
							</li>
							<li>
								<NavLink to='/obstacles'>Obstacles</NavLink>
							</li>
							<li>
								<NavLink to='/charts'>Charts</NavLink>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path='/routers' element={<RoutersTable />} />
						<Route
							path='/access-points'
							element={<AccessPointsTable />}
						/>
						<Route path='/obstacles' element={<ObstaclesTable />} />
						<Route path='/charts' element={<FirstFloorCharts />} />
					</Routes>
				</div>
			</Router>
		</>
	)
}

export default App
