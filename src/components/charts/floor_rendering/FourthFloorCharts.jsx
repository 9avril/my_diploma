import Topographical3DSurface from "../main_charts/Topographical3DSurface";
import ThreeDMeshPlot from "../main_charts/ThreeDMeshPlot";
import RibbonChart from "../main_charts/RibbonChart";
import Histogram2DContourPlot from "../main_charts/Histogram2DContourPlot";
import LinePlot from "../main_charts/LinePlot";
import SplomPlot from "../main_charts/SplomPlot";
import fourthFloorData from "../../../data/data-floors/fourthFloor";

const FourthFloorCharts = () => {
  return (
    <div className={"plot-grid"}>
      <div className={"plot-wrapper"}>
        <Topographical3DSurface floorData={fourthFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <ThreeDMeshPlot floorData={fourthFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <RibbonChart floorData={fourthFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <Histogram2DContourPlot floorData={fourthFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <LinePlot floorData={fourthFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <SplomPlot floorData={fourthFloorData} />
      </div>
    </div>
  );
};

export default FourthFloorCharts;
