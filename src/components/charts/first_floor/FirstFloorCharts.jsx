import React from "react";
import Topographical3DSurfaceFirstF from "./Topographical3DSurfaceFirstF";
import RibbonChartFirstFloor from "./RibbonChartFirstFloor";
import ClusterGraphFirstFloor from "./ClusterGraphFirstFloor";

const FirstFloorCharts = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  return (
    <div style={containerStyle}>
      <Topographical3DSurfaceFirstF />
      <RibbonChartFirstFloor />
      <ClusterGraphFirstFloor />
    </div>
  );
};

export default FirstFloorCharts;
