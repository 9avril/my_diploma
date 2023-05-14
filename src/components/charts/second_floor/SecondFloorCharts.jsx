import Topographical3DSecFloor from "./Topographical3DSecFloor";
import ThreeDMeshPlotSecFloor from "./ThreeDMeshPlotSecFloor";
import RibbonSecFloor from "./RibbonSecFloor";
import Histogram2DSecFloor from "./Histogram2DSecFloor";
import LinePlotSecFloor from "./LinePlotSecFloor";
import SplomSecFloor from "./SplomSecFloor";

const SecondFloorCharts = () => {
  return (
    <div className={"plot-grid"}>
      <div className={"plot-wrapper"}>
        <Topographical3DSecFloor />
      </div>
      <div className={"plot-wrapper"}>
        <ThreeDMeshPlotSecFloor />
      </div>
      <div className={"plot-wrapper"}>
        <RibbonSecFloor />
      </div>
      <div className={"plot-wrapper"}>
        <Histogram2DSecFloor />
      </div>
      <div className={"plot-wrapper"}>
        <LinePlotSecFloor />
      </div>
      <div className={"plot-wrapper"}>
        <SplomSecFloor />
      </div>
    </div>
  );
};

export default SecondFloorCharts;
