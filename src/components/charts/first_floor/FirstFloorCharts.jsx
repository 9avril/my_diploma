import React from "react";
import Histogram2DContourPlot from "./Histogram2DContourPlot";
import LinePlotWithAnnotations from "./LinePlotWithAnnotations";
import RibbonChartFirstFloor from "./RibbonChartFirstFloor";
import SplomFirstFloor from "./SplomFirstFloor";
import "../plotstyles.css";
import Topographical3DSurfaceFirstF from "./Topographical3DSurfaceFirstF";
import ThreeDMeshPlot from "./ThreeDMeshPlot";

const App = () => {
  return (
    <div className="plot-grid">
      <div className="plot-wrapper">
        <Topographical3DSurfaceFirstF />
      </div>
      <div className="plot-wrapper">
        <ThreeDMeshPlot />
      </div>
      <div className="plot-wrapper">
        <RibbonChartFirstFloor />
      </div>
      <div className="plot-wrapper">
        <Histogram2DContourPlot />
      </div>
      <div className="plot-wrapper">
        <LinePlotWithAnnotations />
      </div>
      <div className="plot-wrapper">
        <SplomFirstFloor />
      </div>
    </div>
  );
};

export default App;
