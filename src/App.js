import React from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useMatch,
} from "react-router-dom";
import "./App.css";
import FirstFloorCharts from "./components/charts/first_floor/FirstFloorCharts.jsx";
import AccessPointsTable from "./components/tables/AccessPointsTable";
import ObstaclesTable from "./components/tables/ObstaclesTable";
import RoutersTable from "./components/tables/RoutersTable";

function NavLink(props) {
  const match = useMatch(props.to);
  return (
    <Link
      {...props}
      className={`${
        match ? "text-white" : "hover:text-white"
      } transition-all duration-300`}
    />
  );
}

function App() {
  return (
    <>
      <Router>
        <div className="flex-container">
          <nav className="nav-style p-4 mb-7">
            <div className="nav-left">
              <span className="text-white text-2xl">SZN Visualization</span>
            </div>
            <ul className="flex space-x-4">
              <li>
                <NavLink to="/routers" className="text-xl">
                  Routers
                </NavLink>
              </li>
              <li>
                {/*<NavLink to="/access-points">Access Points</NavLink>*/}
              </li>
              <li>
                <NavLink to="/obstacles" className="text-xl">
                  Obstacles
                </NavLink>
              </li>
              <li>
                <NavLink to="/charts" className="text-xl">
                  Charts
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/routers" element={<RoutersTable />} />
            <Route path="/access-points" element={<AccessPointsTable />} />
            <Route path="/obstacles" element={<ObstaclesTable />} />
            <Route path="/charts" element={<FirstFloorCharts />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
