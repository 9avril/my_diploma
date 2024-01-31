import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Heatmap from "./components/heatmap/Heatmap.jsx";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import FirstFloorCharts from "./components/charts/floor_rendering/FirstFloorCharts.jsx";
import FourthFloorCharts from "./components/charts/floor_rendering/FourthFloorCharts.jsx";
import SecondFloorCharts from "./components/charts/floor_rendering/SecondFloorCharts.jsx";
import ThirdFloorCharts from "./components/charts/floor_rendering/ThirdFloorCharts.jsx";
import ObstaclesTable from "./components/tables/ObstaclesTable";
import RoutersTable from "./components/tables/RoutersTable";
import interpolData4Floor from "./data/data-floors/interpolData4Floor";
import AccessPointsTable from "./components/tables/AccessPointsTable";

function App() {
  return (
    <>
      <Router>
        <div className="flex-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/routers" element={<RoutersTable />} />
            <Route path="/access_points" element={<AccessPointsTable />} />
            <Route path="/obstacles" element={<ObstaclesTable />} />
            <Route path="/charts/first-floor" element={<FirstFloorCharts />} />
            <Route
              path="/charts/second-floor"
              element={<SecondFloorCharts />}
            />
            <Route path="/charts/third-floor" element={<ThirdFloorCharts />} />
            <Route
              path="/charts/fourth-floor"
              element={<FourthFloorCharts />}
            />
            <Route
              path="/heatmap"
              element={<Heatmap data={interpolData4Floor} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
