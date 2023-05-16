import Topographical3DSurface from "../main_charts/Topographical3DSurface";
import ThreeDMeshPlot from "../main_charts/ThreeDMeshPlot";
import RibbonChart from "../main_charts/RibbonChart";
import Histogram2DContourPlot from "../main_charts/Histogram2DContourPlot";
import LinePlot from "../main_charts/LinePlot";
import SplomPlot from "../main_charts/SplomPlot";
import thirdFloorData from "../../../data/data-floors/thirdFloor";

const ThirdFloorCharts = () => {
  return (
    <div className={"plot-grid"}>
      <div className={"plot-wrapper"}>
        <Topographical3DSurface floorData={thirdFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <ThreeDMeshPlot floorData={thirdFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <RibbonChart floorData={thirdFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <Histogram2DContourPlot floorData={thirdFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <LinePlot floorData={thirdFloorData} />
      </div>
      <div className={"plot-wrapper"}>
        <SplomPlot floorData={thirdFloorData} />
      </div>
    </div>
  );
};

export default ThirdFloorCharts;
