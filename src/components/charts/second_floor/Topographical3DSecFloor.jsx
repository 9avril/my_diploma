import React from "react";
import Plot from "react-plotly.js";
import secondFloorData from "../../../data/data-floors/secondFloor";
import "../plotstyles.css";
const Topographical3DSurfaceSecFloor = () => {
  const data = secondFloorData.flatMap((floor) => floor.APFound);

  const traces = data
    .filter((item) => item.LS && item.LS.length > 0 && item.LS[0].length > 0)
    .map((item) => {
      const xValues = Array.from(
        { length: item.LS[0].length },
        (_, i) => item.CH + i * 10
      );
      const yValues = item.LS.map((_, i) => -68 - i * 4);

      return {
        x: xValues,
        y: yValues,
        z: item.LS,
        type: "surface",
        name: item.S,
        showscale: false,
        opacity: 0.8,
        colorscale: [
          [0, "#1a1b2b"],
          [0.5, "#383c6b"],
          [1, "#9194b7"],
        ],
      };
    });

  const layout = {
    title: "Topographical 3D Surface Plot",
    width: 500,
    height: 500,
    scene: {
      xaxis: {
        title: "CH",
        titlefont: { color: "#FFFFFF" },
        tickfont: { color: "#FFFFFF" },
        gridcolor: "rgba(30, 37, 40, 0.1)",
        bgcolor: "rgba(0, 0, 0, 0)",
      },
      yaxis: {
        title: "LS",
        titlefont: { color: "#FFFFFF" },
        tickfont: { color: "#FFFFFF" },
        gridcolor: "rgba(30, 37, 40, 0.1)",
        bgcolor: "rgba(0, 0, 0, 0)",
      },
      zaxis: {
        title: "SR",
        titlefont: { color: "#FFFFFF" },
        tickfont: { color: "#FFFFFF" },
        gridcolor: "rgba(30, 37, 40, 0.1)",
        bgcolor: "rgba(0, 0, 0, 0)",
      },
      // bgcolor: "#0f2027",
      gridcolor: "#203a40",
    },
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent",
    font: { color: "#FFFFFF" },
    margin: { l: 30, r: 30, b: 30, t: 30 },
  };

  const plotStyle = {};

  const plotContainerStyle = {};

  return (
    <div style={plotStyle}>
      <div style={plotContainerStyle}>
        <div className="plot-container">
          <Plot data={traces} layout={layout} />
        </div>
      </div>
    </div>
  );
};

export default Topographical3DSurfaceSecFloor;
