import React from "react";
import Histogram2DContourPlot from "../main_charts/Histogram2DContourPlot";
import SplomPlot from "../main_charts/SplomPlot";
import "../plotstyles.css";
import ThreeDMeshPlot from "../main_charts/ThreeDMeshPlot";
import Topographical3DSurface from "../main_charts/Topographical3DSurface";
import firstFloorData from "../../../data/data-floors/firstFloor";
import RibbonChart from "../main_charts/RibbonChart";
import LinePlot from "../main_charts/LinePlot";

const App = () => {
  return (
    <div className="plot-grid">
      <div className="plot-wrapper">
        <Topographical3DSurface floorData={firstFloorData} />
      </div>
      <div className="plot-wrapper">
        <ThreeDMeshPlot floorData={firstFloorData} />
      </div>
      <div className="plot-wrapper">
        <RibbonChart floorData={firstFloorData} />
      </div>
      <div className="plot-wrapper">
        <Histogram2DContourPlot floorData={firstFloorData} />
      </div>
      <div className="plot-wrapper">
        <LinePlot floorData={firstFloorData} />
      </div>
      <div className="plot-wrapper">
        <SplomPlot floorData={firstFloorData} />
      </div>
    </div>
  );
};

export default App;
