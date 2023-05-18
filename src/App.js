import React, { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FirstFloorCharts from "./components/charts/floor_rendering/FirstFloorCharts.jsx";
import SecondFloorCharts from "./components/charts/floor_rendering/SecondFloorCharts.jsx";
import ThirdFloorCharts from "./components/charts/floor_rendering/ThirdFloorCharts.jsx";
import FourthFloorCharts from "./components/charts/floor_rendering/FourthFloorCharts.jsx";
import ObstaclesTable from "./components/tables/ObstaclesTable";
import RoutersTable from "./components/tables/RoutersTable";
import Navbar from "./components/Navbar";
import Net from "vanta/src/vanta.net";

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        Net({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x704349,
          backgroundColor: "#0b1129",
          points: 11.0,
          maxDistance: 21.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <Router>
        <div className="flex-container">
          <Navbar />
          <div ref={myRef}>
            <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8">
              <p className="text-slate-900 font-weight-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center dark:text-white">
                Visualization of Wi-Fi data <br />
                in the form of multiple graphs and diagrams
              </p>
              <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                SZN Visualization is a website that displays data about
                different network equipment, including performance,
                communication with different applications. And also visualizes
                wireless data in 2D and 3D format.
              </p>
            </div>
            <Routes>
              <Route path="/routers" element={<RoutersTable />} />
              {/*<Route path="/access-points" element={<AccessPointsTable />} />*/}
              <Route path="/obstacles" element={<ObstaclesTable />} />
              <Route
                path="/charts/first-floor"
                element={<FirstFloorCharts />}
              />
              <Route
                path="/charts/second-floor"
                element={<SecondFloorCharts />}
              />
              <Route
                path="/charts/third-floor"
                element={<ThirdFloorCharts />}
              />
              <Route
                path="/charts/fourth-floor"
                element={<FourthFloorCharts />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
