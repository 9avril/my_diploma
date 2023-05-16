import Topographical3DSurface from "../main_charts/Topographical3DSurface";
import secondFloorData from "../../../data/data-floors/secondFloor";
import ThreeDMeshPlot from "../main_charts/ThreeDMeshPlot";
import RibbonChart from "../main_charts/RibbonChart";
import Histogram2DContourPlot from "../main_charts/Histogram2DContourPlot";
import LinePlot from "../main_charts/LinePlot";
import SplomPlot from "../main_charts/SplomPlot";

const SecondFloorCharts = () => {
  return (
    <div className={"plot-grid"}>
      <div className={"plot-wrapper"}>
        <Topographical3DSurface floorData={secondFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <ThreeDMeshPlot floorData={secondFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <RibbonChart floorData={secondFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <Histogram2DContourPlot floorData={secondFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <LinePlot floorData={secondFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <SplomPlot floorData={secondFloorData} />
      </div>
    </div>
  );
};

export default SecondFloorCharts;
