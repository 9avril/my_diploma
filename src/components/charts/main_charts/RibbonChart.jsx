import React from "react";
import Plot from "react-plotly.js";
import "../plotstyles.css";

const RibbonChart = ({ floorData }) => {
  const data = floorData[0].APFound;

  const traces = data.map((item, index) => {
    const xValues = Array.from({ length: item.LS.length }, (_, i) => i);
    const zValues = item.LS.map((row, index) => {
      if (!Array.isArray(row)) {
        console.error(`Error at index ${index}:`, row);
        return 0; // Or some other default value
      }
      return row.reduce((a, b) => a + b, 0) / row.length;
    });

    const yValues = Array(item.LS[0].length).fill(item.CH);
    const minZ = Math.min(...zValues);
    const maxZ = Math.max(...zValues);
    const normalizedZValues = zValues.map(
      (value) => (value - minZ) / (maxZ - minZ)
    );

    return {
      x: xValues,
      y: yValues,
      z: normalizedZValues,
      type: "scatter3d",
      mode: "lines",
      name: "",
      showscale: false,
      line: {
        color: normalizedZValues.map((val) => {
          if (val < 0.5) {
            return "#1a1b2b";
          } else if (val < 1) {
            return "#383c6b";
          } else {
            return "#9194b7";
          }
        }),
        width: 10,
      },
    };
  });

  const layout = {
    width: 500,
    height: 500,
    title: "Ribbon Plot",
    scene: {
      xaxis: {
        title: "Index",
        titlefont: { color: "#FFFFFF" },
        tickfont: { color: "#FFFFFF" },
        gridcolor: "rgba(30, 37, 40, 0.1)",
        bgcolor: "rgba(0, 0, 0, 0)",
      },
      yaxis: {
        title: "CH",
        titlefont: { color: "#FFFFFF" },
        tickfont: { color: "#FFFFFF" },
        gridcolor: "rgba(30, 37, 40, 0.1)",
        bgcolor: "rgba(0, 0, 0, 0)",
      },
      zaxis: {
        title: "Average LS",
        titlefont: { color: "#FFFFFF" },
        tickfont: { color: "#FFFFFF" },
        gridcolor: "rgba(30, 37, 40, 0.1)",
        bgcolor: "rgba(0, 0, 0, 0)",
      },
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

export default RibbonChart;
