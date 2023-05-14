import React from "react";
import Plot from "react-plotly.js";
import firstFloorData from "../../../data/data-floors/firstFloor";
import "../plotstyles.css";

const LinePlotWithAnnotations = () => {
  const data = firstFloorData[0].APFound;

  const xValues = Array.from({ length: data[0].LS.length }, (_, i) => i);
  const traces = data.map((item, index) => {
    const yValues = item.LS.map(
      (row) => row.reduce((a, b) => a + b, 0) / row.length
    );

    return {
      x: xValues,
      y: yValues,
      type: "scatter",
      mode: "lines",
      name: `CH ${item.CH}`,
      line: { shape: "spline" },
    };
  });

  const annotations = data.map((item, index) => {
    const lastYValue =
      item.LS[item.LS.length - 1].reduce((a, b) => a + b, 0) /
      item.LS[item.LS.length - 1].length;

    return {
      x: xValues[xValues.length - 1],
      y: lastYValue,
      xref: "x",
      yref: "y",
      text: ``,
      showarrow: false,
      arrowhead: 6,
      ax: 20,
      ay: 0,
      font: { color: "#FFFFFF" },
    };
  });

  const layout = {
    xaxis: {
      title: "Index",
      titlefont: { color: "#FFFFFF" },
      tickfont: { color: "#FFFFFF" },
      gridcolor: "rgba(30, 37, 90, 0.1)",
    },
    yaxis: {
      title: "Average LS",
      titlefont: { color: "#FFFFFF" },
      tickfont: { color: "#FFFFFF" },
      gridcolor: "rgba(30, 37, 90, 0.1)",
    },
    title: "Line Plot with Annotations",
    width: 500,
    height: 500,
    margin: { l: 30, r: 30, b: 30, t: 30 },
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent",
    font: { color: "#FFFFFF" },
    annotations: annotations,
    gridcolor: "rgba(30, 37, 90, 0.1)",
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

export default LinePlotWithAnnotations;
