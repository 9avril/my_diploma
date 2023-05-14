import React from "react";
import Plot from "react-plotly.js";
import "../plotstyles.css";
import secondFloorData from "../../../data/data-floors/secondFloor";

const SplomSecFloor = () => {
  const data = secondFloorData[0].APFound;
  const dimensions = ["x", "y", "z"].map((axis, index) => {
    return {
      label: axis.toUpperCase(),
      values: data.flatMap((item) => item.LS.map((row) => row[index])),
    };
  });

  const traces = [
    {
      type: "splom",
      dimensions: dimensions,
      marker: {
        color: "rgba(23, 190, 207, 0.8)",
        size: 5,
      },
    },
  ];

  const layout = {
    title: "Scatterplot Matrix (SPLOM)",
    width: 500,
    height: 500,
    font: { color: "#FFFFFF" },
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent",
    margin: { l: 30, r: 30, b: 30, t: 30 },
    scene: {
      bgcolor: "transparent",
    },
    xaxis: {
      gridcolor: "rgba(255, 255, 255, 0.2)",
    },
    yaxis: {
      gridcolor: "rgba(255, 255, 255, 0.2)",
    },
    zaxis: {
      gridcolor: "rgba(255, 255, 255, 0.2)",
    },
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

export default SplomSecFloor;
