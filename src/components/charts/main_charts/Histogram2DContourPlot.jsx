import React from "react";
import Plot from "react-plotly.js";
import "../plotstyles.css";
const Histogram2DContourPlot = ({ floorData }) => {
  const data = floorData[0].APFound;
  const x = data.flatMap((item) => item.LS.map((row) => row[0]));
  const y = data.flatMap((item) => item.LS.map((row) => row[1]));

  const traces = [
    {
      x: x,
      y: y,
      type: "histogram2dcontour",
      colorscale: [
        [0, "#1a1b2b"],
        [0.5, "#383c6b"],
        [1, "#9194b7"],
      ],
      showscale: false,
    },
  ];

  const layout = {
    autosize: true,
    height: 500,
    width: 500,
    xaxis: {
      title: "X Axis",
      titlefont: { color: "#FFFFFF" },
      tickfont: { color: "#FFFFFF" },
    },
    yaxis: {
      title: "Y Axis",
      titlefont: { color: "#FFFFFF" },
      tickfont: { color: "#FFFFFF" },
    },
    title: "2D Histogram Contour Plot",
    // width: 477,
    margin: { l: 30, r: 30, b: 30, t: 30 },
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent",
    font: { color: "#FFFFFF" },
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

export default Histogram2DContourPlot;
